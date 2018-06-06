'use strict';

const lighthouse          = require('lighthouse')
const perfConfig          = require('lighthouse/lighthouse-core/config/fast-config.js');
const chromeLauncher      = require('chrome-launcher');
const NotificationHandler = require('./src/notification-handler');

module.exports.audit = (event, context, callback, chrome) => {
  const opts = {
    disableDeviceEmulation: true,
    disableCpuThrottling: true,
    disableNetworkThrottling: true,
    chromeFlags: [
      '--show-paint-rects',
      '--headless',
      '--disable-gpu',
      '--no-sandbox',
    ],
  }
  const urls = [
    'https://192abc.com/',
    'https://192abc.com/parenting',
    'https://192abc.com/35580',
  ]
  let messages = [];

  // ループで複数URLに対してLighthouse関数実行する
 
  // lighthouse関数は並列の非同期処理ができない
  // map/for等のループで実行すると、前の処理を待ってくれないので、async/awaitを使って連続した非同期処理を実装
  async function runLighthouse() {
    for (let url of urls) {
      // lighthouse関数のawait
      // lighthouse関数はpromiseを返す see: https://github.com/GoogleChrome/lighthouse/blob/9823a6579e59b8ea86620bf3dec59a7fd66110c4/lighthouse-core/runner.js
      // Promiseの結果が返されるまで、async function内の処理(forループ)を一時停止する
      await lighthouse(url, opts, perfConfig).then(results => {
        delete results.artifacts;
        const reports = results.reportCategories.map(report => ({
          name: report.name,
          score: report.score,
          url: url,
        }))
        const perfResult  = reports.filter(result => result['name'] == 'Performance');
        messages.push(perfResult);
      });
    }
  }
  runLighthouse().then(() => {
    const notificationHandler = new NotificationHandler(messages);
    notificationHandler.audit();
  })
};


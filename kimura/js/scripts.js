'use strict';
const AsyncSample = function(){};
AsyncSample.prototype.sync = function(){
  console.log('sync');
};
AsyncSample.prototype.asyncMethod = async function(){
  const timer = setInterval(function(){
    console.log('async');
    clearInterval(timer);
    return 'test';
  }, 1000);
};
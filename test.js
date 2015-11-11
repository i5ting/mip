var mip = require('.');

mip(function(ip){
  console.log('debug = true:' + ip);
}, true);


mip(function(ip){
  console.log('debug = false:' + ip);
});


// mip();

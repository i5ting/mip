var publicIp = require('public-ip');

module.exports = function (){  
  var debug = false, cb;
  if (arguments.length >= 2) {
    debug = arguments[1];
    cb = arguments[0];
  }else if (arguments.length == 1) {
    cb = arguments[0];
  }else{
    throw Error('this method need 1+ param')
  }
  publicIp.v4(function (err, ip) {
    if(err){
      return console.log(err)
    }
  	//=> '46.5.21.123'
    if(debug == true){
      ip = '127.0.0.1'
    }
    cb(ip);
  });
}

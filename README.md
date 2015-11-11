# mip = machine ip

获取主机ip，如果正式环境，返回公网ip，如果是测试环境返回127.0.0.1

Artwork by [i5ting](http://www.github.com/i5ting/).

[![Deps](https://david-dm.org/i5ting/mip.svg)](https://david-dm.org/i5ting/mip) 
[![npm](https://img.shields.io/npm/v/mip.svg)](https://www.npmjs.com/package/mip)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/i5ting/mip/master/LICENSE.md)
[![npm](https://img.shields.io/npm/dt/mip.svg)](https://www.npmjs.com/package/mip)


## Install

    [sudo]npm install --save mip

## Usage 

way 1:

```
var mip = require('mip');

mip(function(ip){
  console.log('debug = false:' + ip);
});
```

way 2:

```
var mip = require('mip');

mip(function(ip){
  console.log('debug = true:' + ip);
}, true);

```

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## 版本历史

- v1.0.0 初始化版本

## 欢迎fork和反馈

- write by `i5ting` i5ting@126.com

如有建议或意见，请在issue提问或邮件

## License

this repo is released under the [MIT
License](http://www.opensource.org/licenses/MIT).

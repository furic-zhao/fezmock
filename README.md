# FEZMOCK
FEZMOCK是一套随机数据模拟工具库，配合工程构建工具模拟各种数据场景。

## 安装

- NPM安装

````bash
npm install fezmock --save
````

## 快速使用

````bash
import fezmock from 'fezmock';

let rtnData = fezmock.mock({
  "data|2": [{
    "name": '@cword(80)',
    "price": "@natural(3000, 8000).00",
    "commentNum": '@integer(6000, 60000)',
    "hot": '@boolean',
    "img": "@dataImage('100x100','我是产品图片')"
  }]
});
````
`rtnData` 的返回值为：

````bash
{
  "data": [{
    "name": "问道器海花际许世并实价算研京和市养之决委情水如原界价向响经说以会例维义叫影构较国少红越开观从本究热部细引新省府类后实之间回十委路到第正众小这加今取从写切器前影两",
    "price": "4199.00",
    "commentNum": 12475,
    "hot": false,
    "img": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAJT0lEQ…NOEMSJSC+YIIgXk044QRAnIr1ggiBeTDrhBEGciPSC+Rd3sQWduQ7ipwAAAABJRU5ErkJggg=="
  }, {
    "name": "使增指工选争走须多动得低非教儿平对义动第节必有场长地意样料极很动精公她反济给一划别西眼安厂生将精两即数且太将心实光要全想研美色过农少才来理海何保度造划际用过最委",
    "price": "4010.00",
    "commentNum": 59593,
    "hot": true,
    "img": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAKdUlEQ…smRDmkcg6ZEDn8lFszIcohlXPIhMjhp9yaCVEOqZzD/wKmIWLoj1h9wQAAAABJRU5ErkJggg=="
  }]
}
````

## FEZMOCK使用文档

[FEZMOCK WIKI](https://github.com/furic-zhao/fezmock/wiki)
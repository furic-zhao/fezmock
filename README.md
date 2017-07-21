# FEZMOCK
FEZMOCK是一套前端数据模拟开发框架，让前端工程师独立于后端进行开发。增加单元测试的真实性，通过随机数据，模拟各种数据场景。

## FEZMOCK使用背景

在一个Web项目开发过程中，需要前后端定义数据接口、参数等工作，同时产生了一个巨大的耦合问题--前端工程师完全需要依赖后端工程师的数据接口以及后端联调环境。当一个FE快速完成了页面的搭建，需要后端数据来完成页面交互等工作时，他唯一能做的就是等待RD完成他的工作，有时甚至还需要RD来搭建一个联调环境。FEZMOCK就是为解决前后端并行开发、提高团队研发效率。

## FEZMOCK安装

- NPM安装

````bash
npm install fezmock --save
````

## FEZMOK使用方法

FEZMOCK需要与 【[FEZ前端模块化工程开发框架](https://github.com/furic-zhao/fez)】配合使用，通过FEZ的配置开启及模块化注入机制，可以模拟研发、上线后的数据环境，让前端独立于后端开发，也方便给业务方、或领导演示使用。

- 首先需要在`fez.config.js`文件中开启 `useMock`配置项。

````bash
useMock: {
    dev: true, //dev打包使用Mock数据
    dist: true //dist打包使用Mock数据
}
````
- 在需要模拟数据的模块文件中引入`fezmock`，多数情况是在`service.js`文件中。并将有关MOCK逻辑的代码块放在`/* @if MOCK */`与`/* @endif */`之间区域。


````bash
/* @if MOCK */
import mock from 'fezmock';
/* @endif */
````

````bash
/* @if MOCK */
  let rtnData = mock({
    "data|2": [{
      "name": '@cword(80)',
      "price": "@natural(3000, 8000).00",
      "commentNum": '@integer(6000, 60000)',
      "hot": '@boolean',
      "img": "@dataImage('100x100','我是产品图片')"
    }]
  });
/* @endif */
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


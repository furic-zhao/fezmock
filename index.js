/* ==================================
 * @ 2017 FEZMOCK 前端数据模拟开发框架
 * https://github.com/furic-zhao/fezmock
 * ================================== */

var mock = require('./handler');

module.exports = function(mockData) {
  return mock.gen(mockData);
};

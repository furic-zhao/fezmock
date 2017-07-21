/* ==================================
 * @ 2017 FEZMOCK 前端数据模拟开发框架
 * https://github.com/furic-zhao/fezmock
 * ================================== */

var handler = require('./handler');

module.exports = {
  mock: function(mockData) {
    return handler.gen(mockData);
  }
}

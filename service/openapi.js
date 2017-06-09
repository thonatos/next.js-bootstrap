// const Client = require('aliyun-api-gateway').Client
const config = require('../config.prod')
const Client = require('./api-gateway-nodejs-sdk').Client

Date.prototype.Format = function (fmt) { //author: meizz   
  var o = {
    "M+": this.getMonth() + 1,                 //月份   
    "d+": this.getDate(),                    //日   
    "h+": this.getHours(),                   //小时   
    "m+": this.getMinutes(),                 //分   
    "s+": this.getSeconds(),                 //秒   
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度   
    "S": this.getMilliseconds()             //毫秒   
  };
  if (/(y+)/.test(fmt))
    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt))
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}

class OpenApi {

  constructor() {
    this.host = 'https://openapi.insta360.com'    
    this.client = new Client(config.ak, config.sk)
  }

  async doAction(url) {
    try {
      let t = await this.client.get(url)
      return t
    } catch (error) {
      throw (error)
    }
  }

  get(date = new Date().Format('yyyy-MM-DD'), days = 5) {
    let url = this.host + `/community/v1/dailySelection/list?date=${date}&days=${days}`
    return this.doAction(url)
  }
}

module.exports = OpenApi
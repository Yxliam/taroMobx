import { BigNumber } from "bignumber.js";
/**
 * 格式化秒数
 * @param {string} second 秒数
 * @param {string} type 类型
 */
export const formatSecond = (date: any, type: string) => {
  if (!date || date <= 0) {
    return;
  }

  let day: number | string = parseInt((date / 60 / 60 / 24).toString());
  let hour: number | string = parseInt(((date / 60 / 60) % 24).toString());
  let minute: number | string = parseInt(((date / 60) % 60).toString());
  let second: number | string = parseInt((date % 60).toString());
  hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;
  // let leftTime = ' ' + day + ' 天 ' + hour + ' 时 ' + minute + ' 分 ' + second + ' 秒 ';
  let leftTime = type
    ? `${minute}:${second}`
    : day + " 天 " + hour + " 时 " + minute + " 分";

  return leftTime;
};

/**
 * 时间戳转日期
 * @param {date} value 时间戳
 * @param {string} format 格式化
 *
 * format格式如下:
 * 1."yyyy-MM-dd hh:mm:ss"
 * 2."yyyy年MM月dd日"
 * 3."MM/dd/yyyy"
 * 4."yyyyMMdd"
 * 5."hh:mm:ss"
 */
export const dateFormat = (value: any, format: any) => {
  if (typeof value == "string") value = Number(value);
  if (!format) format = "yyyy-MM-dd hh:mm:ss";
  var date = new Date(value);
  var o: {
    [key: string]: any;
  } = {
    "M+": date.getMonth() + 1, //month
    "d+": date.getDate(), //day
    "h+": date.getHours(), //hour
    "m+": date.getMinutes(), //minute
    "s+": date.getSeconds(), //second
    "q+": Math.floor((date.getMonth() + 3) / 3), //quarter
    S: date.getMilliseconds() //millisecond
  };
  if (/(y+)/.test(format)) {
    format = format.replace(
      RegExp.$1,
      (date.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  }
  for (var k in o) {
    if (new RegExp("(" + k + ")").test(format)) {
      format = format.replace(
        RegExp.$1,
        RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
      );
    }
  }
  return format;
};

export const addition = (a: any, b: any, c = 2) => {
  let num: any = new BigNumber(a);
  num = num.plus(b);
  num = num.toFixed(c);
  return num;
};

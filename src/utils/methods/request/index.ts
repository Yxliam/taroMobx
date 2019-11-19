import Taro from "@tarojs/taro";
import QS from "qs";
import constants from "../../constants/index";
import { showToast } from "../tips/index";

/**
 * @desc    封装请求统一处理方法
 * @param   {object}    params                      (必)请求方法传参
 *
 * @param   {string}    params.url                  (必)请求地址
 * @param   {string}    params.method               (非)请求方法类型，默认为post
 * @param   {object}    params.data                 (非)请求参数
 * @param   {string}    params.dataType             (非)接口返参数据类型，默认为json
 * @param   {string}    params.responseType         (非)设置响应的数据类型，默认为text
 * @param   {object}    params.header               (非)请求头信息，默认为传入本地token
 *
 * @param   {function}  params.success              (非)请求成功后的回调方法，不建议使用
 * @param   {function}  params.fail                 (非)请求失败后的回调方法，不建议使用
 * @param   {function}  params.complete             (非)请求完成后的回调方法，不建议使用
 *
 * @param   {boolean}   params.useGlobal            (非)自定义参数，是否使用全局配置，默认为true
 * @param   {boolean}   params.isLogin              (非)是否是登录
 *
 * @return  {Promise}
 * @throws  {TypeError}
 */
export const request = async (params: any) => {
  if (!params.url) {
    return new Error("请传入请求地址");
  }
  const token = await Taro.getStorageSync("token");
  // 请求头
  let header: {
    [key: string]: string;
  } = {};
  if (params.isLogin) {
    if (token) {
      header["token"] = token;
    }
  }

  // 请求参数
  let data = params.data || {};
  // 请求方法
  const requestMethods = params.method ? params.method.toUpperCase() : "POST";

  if (requestMethods === "PUT") {
    header["Content-Type"] = "application/json";
  }

  return new Promise((resolve, reject) => {
    Taro.request({
      url: params.url,
      method: (params.method && requestMethods) || "POST",
      data: data,
      dataType: params.dataType || "json",
      responseType: params.responseType || "text",
      header: params.header || header,
      success: params.success || function() {},
      fail: params.fail || function() {},
      complete: params.complete || function() {}
    })
      .then(res => {
        const apiStatus = Number(res.statusCode);
        if (apiStatus === constants.HTTP_OK) {
          resolve(res.data);
        } else {
          reject();
          showToast("请求异常");
        }
      })
      .catch(error => {
        showToast("系统繁忙");
        reject(error);
      });
  });
};

/**
 * 请求
 */
export const requestAll = async (tasks: Iterable<any>) => {
  Taro.showLoading({ mask: true, title: "" });

  try {
    return await Promise.all(tasks);
  } catch (error) {
    return Promise.reject(error);
  } finally {
    Taro.hideLoading();
  }
};

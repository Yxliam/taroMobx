import Taro from "@tarojs/taro";
import Qs from "qs";

/**
 * @desc    页面跳转，在当前页面打开
 *          PS：无返回按钮
 * @param   {String}    route       路由（非必传），不传默认为首页
 *                                  '/pages/main/index/index'
 * @param   {Object}    params      参数（非必传）
 */
export const goToPage = (route: string, params?: any) => {
  let url;
  if (route) {
    url = params ? `${route}?${Qs.stringify(params)}` : route;
    return Taro.redirectTo({ url: url });
  } else {
    url = "/pages/index/index";
    return Taro.switchTab({ url: url });
  }
};

/**
 * @desc    关闭当前页面，返回上一页面或多级页面
 *          PS：有返回按钮
 * @param   {Object}    params
 * @param   {number}    delta       返回的页面数，如果 delta 大于现有页面数，则返回到首页。
 *                                 （非必传），不传默认为首页
 *                                  '/pages/index/index'
 * @param   {string}    route       返回的页面的路由路径（非必传）
 *                                  PS： 参数为空，直接返回上一页面
 */
export const backPage = (params?: any) => {
  let delta: number | undefined = undefined;
  if (params && params.delta) {
    const deltaTemp = Number(params.delta);
    if (deltaTemp) {
      delta = deltaTemp;
    }
  } else if (params && params.route) {
    const pages = Taro.getCurrentPages();
    let num = 0;
    pages.map((item, i) => {
      if (item.route === params.route) {
        num = i + 1;
        return;
      }
    });
    if (num) {
      delta = pages.length - num;
      if (delta <= 0) {
        return;
      }
    }
  } else {
    delta = 1;
  }
  return Taro.navigateBack({ delta });
};

/**
 * @desc    页面跳转，在新窗口打开
 *          PS：有返回按钮
 * @param   {String}    route       路由（非必传），不传默认为首页
 *                                  '/pages/index/index'
 * @param   {Object}    params      参数（非必传）
 */
export const openPage = (route: string, params?: any) => {
  let url;
  if (route) {
    url = params ? `${route}?${Qs.stringify(params)}` : route;
    return Taro.navigateTo({ url });
  } else {
    url = "/pages/index/index";
    return Taro.switchTab({ url });
  }
};

/**
 * @desc    重定向并重新加载某页面
 *          PS：无返回按钮
 * @param   {String}    route       路由（非必传），不传默认为首页
 *                                  '/pages/main/index/index'
 * @param   {Object}    params      参数（非必传）
 */
export const reLaunch = (route: string, params: any) => {
  let url;
  if (route) {
    url = params ? `${route}?${Qs.stringify(params)}` : route;
  } else {
    url = "/pages/index/index";
  }
  return Taro.reLaunch({ url });
};

/**
 * @desc    切换底部tabBar
 *          PS：无返回键，通过底部的tabBar切换
 * @param   {String}    route       路由（非必传），不传默认为首页
 *                                  '/pages/main/index/index'
 * @param   {Object}    params      参数（非必传）
 *
 * @tips                page.$component.componentDidMount
 *                      调用该页面的onShow方法以触发刷新该页面
 */
export const switchTab = (route: string, params: any) => {
  let url;
  if (route) {
    url = params ? `${route}?${Qs.stringify(params)}` : route;
  } else {
    url = "/pages/index/index";
  }
  return Taro.switchTab({ url });
};

/**
 * 设置导航栏标题
 */
export const setNavigationBarTitle = async (title: string) => {
  return await Taro.setNavigationBarTitle({ title });
};

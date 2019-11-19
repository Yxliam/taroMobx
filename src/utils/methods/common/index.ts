import Taro from "@tarojs/taro";
export const setStorage = (key: string, value: any) => {
  return Taro.setStorageSync(key, value);
};

export const getStorage = (key: string) => {
  return Taro.getStorageSync(key);
};

export const checkPhone = (phone: string) => {
  if (!/^1[3456789]\d{9}$/.test(phone)) {
    return false;
  } else {
    return true;
  }
};

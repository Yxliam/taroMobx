import utils from "../utils";

const baseUrl = process.env.TARO_ENV === "h5" ? "/toap" : "https://xxx/api";

export const getCourier = (data: any) => {
  return utils.request({
    url: `${baseUrl}/xxx`,
    method: "get",
    data: data,
    isLogin: true
  });
};

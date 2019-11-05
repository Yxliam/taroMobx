import utils from "@/utils/";

export const getUser = data => {
  return utils.request({
    url: `${utils.API_PATH}/v1/user`,
    method: "get",
    data,
    isLogin: true
  });
};

import Taro from "@tarojs/taro";
import helper from "../utils/helper";

export async function getList() {
  return helper.ajax(helper.postParams(`url`));
}

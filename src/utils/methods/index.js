import * as requestUtils from "./request/index";
import * as tipsUtils from "./tips/index";
import * as navigateUtils from "./navigate/index";
import * as formatDataUtils from "./formatData/index";
import helper from "./helper";
export default {
  ...requestUtils,
  ...tipsUtils,
  ...navigateUtils,
  ...formatDataUtils,
  helper
};

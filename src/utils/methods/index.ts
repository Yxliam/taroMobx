import * as requestUtils from "./request/index";
import * as tipsUtils from "./tips/index";
import * as navigateUtils from "./navigate/index";
import * as formatDataUtils from "./formatData/index";
import * as common from "./common/index";
export default {
  ...requestUtils,
  ...tipsUtils,
  ...navigateUtils,
  ...formatDataUtils,
  ...common
};

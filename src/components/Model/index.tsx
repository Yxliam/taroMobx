import Taro from "@tarojs/taro";
import { View, Button } from "@tarojs/components";
import "./index.scss";

interface paramInter {
  title: string;
  content: string;
  btnText: string;
}

interface Iprops {
  params: paramInter;
  successHandle: Function;
}

const Model = (props: Iprops) => {
  const { params, successHandle } = props;

  const onGotUserInfo = (res: any) => {
    if (res.detail.userInfo) {
      // 返回的信息中包含用户信息则证明用户允许获取信息授权
      console.log("授权成功");
      Taro.setStorage({
        key: "userInfo",
        data: res.detail.userInfo
      });
      successHandle(true);
    } else {
      console.log("取消授权");
      // 用户取消授权，进行提示，促进重新授权
      successHandle(false);
    }
  };

  return (
    <View className="dialog-container">
      <View className="dialog-mask"></View>
      <View className="dialog-info">
        <View className="dialog-title">{params.title}</View>
        <View className="dialog-content">{params.content}</View>
        <View className="dialog-footer">
          <Button
            className="dialog-btn"
            open-type="getUserInfo"
            onGetUserInfo={onGotUserInfo}
          >
            {params.btnText}
          </Button>
        </View>
      </View>
    </View>
  );
};

export default Model;

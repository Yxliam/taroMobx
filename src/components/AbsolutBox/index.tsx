import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import utils from "../../utils";
import { AtIcon } from "taro-ui";
import "./index.scss";

interface paramInter {
  title: string;
  content: string;
  time: string;
}

interface Iprops {
  params: paramInter;
}

const GridWrap = (props: Iprops) => {
  const { params } = props;

  return (
    <View className="absolute-wrapper">
      <View className="absolute-title pd10">
        <AtIcon value="bell" size="15"></AtIcon>
        {params.title}
      </View>
      <View className="absolute-content pd10">{params.content}</View>
      <View className="absolute-time pd10">{params.time}</View>
    </View>
  );
};

export default GridWrap;

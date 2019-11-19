import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtGrid } from "taro-ui";
import utils from "../../utils";
import "./index.scss";

interface navGridItemInterFace {}

interface Iprops {
  navGridList: navGridItemInterFace[];
  title: string;
}

const GridWrap = (props: Iprops) => {
  const { navGridList, title } = props;
  const goDetail = (item: any) => {
    utils.openPage(item.url);
  };
  return (
    <View className="grid-wrapper">
      <View className="grid-title">{title}</View>
      <AtGrid columnNum={3} data={navGridList} onClick={goDetail} />
    </View>
  );
};

export default GridWrap;

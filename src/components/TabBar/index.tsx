import Taro, { useState, useEffect } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { AtTabBar } from "taro-ui";
import utils from "../../utils";
import "./index.scss";

interface tabInter {
  title: string;
  iconPrefixClass: string;
  iconType: string;
  reouter: string;
}

interface Iprops {
  curren: number;
}

const tabList: tabInter[] = [
  {
    title: "首页",
    reouter: "/pages/index/index",
    iconPrefixClass: "icon",
    iconType: "shouye1"
  },
  {
    title: "段子",
    reouter: "/pages/sub/joke/index/index",
    iconPrefixClass: "icon",
    iconType: "xiaohua"
  },
  {
    title: "我的",
    reouter: "/pages/sub/mine/index/index",
    iconPrefixClass: "icon",
    iconType: "wodedangxuan"
  }
];

const TabBar = (props: Iprops) => {
  const { curren } = props;

  const goNewPage = (value: number) => {
    utils.goToPage(tabList[value].reouter);
  };

  return (
    <View style={{ paddingTop: 45 }}>
      <AtTabBar
        fixed={true}
        tabList={tabList}
        onClick={goNewPage}
        current={curren}
        iconSize={25}
        color="#A3A3A3"
        selectedColor="#262626"
      />
    </View>
  );
};

export default TabBar;

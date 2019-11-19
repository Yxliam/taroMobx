import Taro, { Component } from "@tarojs/taro";
import { View, Swiper, SwiperItem, Image, Button } from "@tarojs/components";
import SwiperWrap from "../../components/SwiperWrap";
import "./index.scss";

const swiperList = [
  {
    src: require("../../assets/img/top.jpg")
  }
];
export default class AtPage extends Component {
  state = {
    images: [],
    isH5: true,
    initClass: {}
  };

  render() {
    let { isH5, initClass } = this.state;
    isH5 = process.env.TARO_ENV === "h5" ? true : false;
    if (isH5) {
      initClass = {
        marginTop: 45
      };
    }
    return (
      <View className="container" style={initClass}>
        <SwiperWrap
          swiperList={swiperList}
          autoplay={false}
          indicatorDots={false}
        />
        {this.props.children}
      </View>
    );
  }
}

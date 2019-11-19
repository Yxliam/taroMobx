import Taro from "@tarojs/taro";
import { View, Swiper, Image, SwiperItem } from "@tarojs/components";
import "./index.scss";

interface swiperItemInterFace {
  src: string;
}
interface Iprops {
  swiperList: swiperItemInterFace[];
  autoplay?: boolean;
  indicatorDots?: boolean;
}

const SwiperWrap = (props: Iprops) => {
  const { swiperList = [], autoplay = true, indicatorDots = true } = props;
  return (
    <View>
      <Swiper
        className="swiper-container"
        indicatorColor="#999"
        indicatorActiveColor="#333"
        circular
        indicatorDots={indicatorDots}
        autoplay={autoplay}
      >
        {swiperList.map(item => {
          return (
            <SwiperItem className="swiper-item-container">
              <Image className="swiper-image" src={item.src} />
            </SwiperItem>
          );
        })}
      </Swiper>
    </View>
  );
};

export default SwiperWrap;

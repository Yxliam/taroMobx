import Taro, { useState, useEffect } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { AtFab } from "taro-ui";
import "./index.scss";

interface Iprops {
  topText?: string;
  size?: "small" | "normal";
}

const Top = (props: Iprops) => {
  const { topText, size } = props;
  const [btnSize, setSize] = useState(size);
  const [text, setText] = useState("Top");
  useEffect(() => {
    if (size) {
      setSize(size);
    }
    if (topText) {
      setText(topText);
    }
  }, [topText, size]);
  //回到顶部
  const goTop = () => {
    Taro.pageScrollTo({
      scrollTop: 0,
      duration: 300
    });
  };
  return (
    <View className="top-btn">
      <AtFab size={btnSize} onClick={goTop}>
        <Text>{text}</Text>
      </AtFab>
    </View>
  );
};

export default Top;

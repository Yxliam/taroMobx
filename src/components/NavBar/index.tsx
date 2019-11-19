import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtNavBar } from "taro-ui";
import utils from "../../utils";
import "./index.scss";

interface Iprops {
  title: string;
  showBottom?: boolean;
}

const NavBarWrap = (props: Iprops) => {
  const initStyle = {
    paddingBottom: 45
  };
  const { title, showBottom = false } = props;
  const goBak = () => {
    utils.backPage();
  };

  return (
    <View style={showBottom ? initStyle : {}}>
      <AtNavBar
        fixed
        onClickLeftIcon={goBak}
        color="#000"
        title={title}
        leftIconType="chevron-left"
      />
    </View>
  );
};

export default NavBarWrap;

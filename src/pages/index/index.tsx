import Taro, { Component, Config } from "@tarojs/taro";
import { View, Text, Button } from "@tarojs/components";
import "./index.scss";

interface IProps {}

const initialState = {};
type State = Readonly<typeof initialState>;

// @inject("commonStore")
// @observer
// @WishShare()
export default class Index extends Component<IProps, State> {
  state: State = initialState;
  // eslint-disable-next-line react/sort-comp
  config: Config = {
    navigationBarTitleText: "首页"
  };

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return <View className="wrapper">hello</View>;
  }
}

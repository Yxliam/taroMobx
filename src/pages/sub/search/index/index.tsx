import Taro, { Component, Config } from "@tarojs/taro";
import { View, Text, Button } from "@tarojs/components";
import { observer, inject } from "@tarojs/mobx";
import WishShare from "@decorators/wishShare";

interface IProps {}

const initialState = { clickCount: 0 };
type State = Readonly<typeof initialState>;

@inject("commonStore")
@observer
@WishShare()
export default class Index extends Component<IProps, State> {
  state: State = initialState;
  // eslint-disable-next-line react/sort-comp
  config: Config = {
    navigationBarTitleText: "测试"
  };

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  clickHandle = () => {
    const { clickCount } = this.state;
    this.setState((preState: State) => ({
      clickCount: clickCount + 1
    }));
  };

  render() {
    const { clickCount } = this.state;
    return (
      <View className="index">
        <View>{clickCount}</View>
        <Button onClick={this.clickHandle}>sub测试</Button>
      </View>
    );
  }
}

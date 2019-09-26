import Taro, { Component } from "@tarojs/taro";
import { View, Text, Button } from "@tarojs/components";
import { observer, inject } from "@tarojs/mobx";
import "./index.scss";

@inject("commonStore")
@observer
export default class Index extends Component {
  // eslint-disable-next-line react/sort-comp
  config = {
    navigationBarTitleText: "首页"
  };

  constructor(props) {
    super(props);
    this.state = {
      // 创建一个初始的 Todolist
      list: ["get up", "coding", "sleep"],
      inputVal: ""
    };
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  inputHandler(e) {
    let val = e.target.value;
    this.setState({
      inputVal: val
    });
  }
  addItem() {
    let { list, inputVal } = this.state;
    // 如果输入框的值为空，则返回，否则添加到事项列表里
    console.log("add");
    if (inputVal == "") return;
    else {
      list.push(inputVal);
    }
    this.setState({
      list,
      inputVal: ""
    });
  }

  delItem(index) {
    let { list } = this.state;
    list.splice(index, 1);
    this.setState({
      list
    });
  }

  addClick() {
    console.log("hhhh");
    const { commonStore } = this.props;
    commonStore.increment();
  }

  render() {
    let { list, inputVal } = this.state;
    const {
      commonStore: { counter }
    } = this.props;
    return (
      <View className="index">
        <Input
          className="input"
          type="text"
          value={inputVal}
          onInput={this.inputHandler.bind(this)}
        />
        {/* 不能使用 {()=>this.addItem()} */}
        <Text className="add" onClick={this.addItem.bind(this)}>
          添加
        </Text>
        <View className="list_wrap">
          <Text>todo list</Text>
          {list.map((item, index) => {
            return (
              <View key={index}>
                <Text>
                  {index + 1}.{item}
                </Text>
                <Text className="del" onClick={this.delItem.bind(this, index)}>
                  删除
                </Text>
              </View>
            );
          })}
        </View>

        <Text>这是点击次数{counter}</Text>
        <Button onClick={this.addClick.bind(this)}>点击</Button>
      </View>
    );
  }
}

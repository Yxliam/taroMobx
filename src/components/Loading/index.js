import Taro, { Component } from "@tarojs/taro";
import { View, Text, Image } from "@tarojs/components";
import { AtActivityIndicator } from 'taro-ui'
import config from './config'
import "./index.scss";

/**
 * 列表加载loading
 */

export default class Loading extends Component {

  static options = {
    addGlobalClass: true
  }

  static defaultProps = {
    // 数据是否为空
    dataBlank: false,
    // 是否加载中
    isLoading: false,
    // 是否加载完成
    isLoadeAll: false,
    // 滚动到多少距离加载
    distance: 100,
    // 配置显示相关页面
    type: 'index',
    // 上拉加载数据
    onGetData: () => {

    }
  }

  /**
   * 定时器
   */
  timer = null

  /**
   * 因为taro组件里面的生命周期， 无法触发，所以只能在外面用ref来调用初始化和卸载
   */
  componentWillMount () { }

  componentDidMount () {
  }

  componentWillUnmount () {
  }

  componentDidShow () {
  }

  componentDidHide () {
  }

  /**
   * 初始化
   */
  init = () => {
    process.env.TARO_ENV === 'h5' && this.handleAddEvent()
  }

  /**
   * 添加滚动事件
   */
  handleAddEvent = () => {
    window.addEventListener('scroll', this.handleLoading)
  }

  /**
   * 滚动加载
   */
  handleLoading = () => {
    // 添加节流函数
    clearTimeout(this.timer)

    this.timer = setTimeout(() => {
      const { distance, isLoading, isLoadeAll } = this.props
      let height, currentHeight, scrollTop

      height = document.documentElement.scrollHeight
      currentHeight = document.documentElement.clientHeight
      scrollTop = document.body.scrollTop + document.documentElement.scrollTop
      if (height !== currentHeight && scrollTop !== 0 && (scrollTop + currentHeight) >= (height - distance) && !isLoading && !isLoadeAll) {
        const { onGetData } = this.props
        onGetData()
      }
    }, 50)
  }

  /**
   * 取消事件
   */
  handleRemoveEvent = () => {
    window.removeEventListener('scroll', this.handleLoading)
  }

  render () {
    const { loading } = this.state
    const { isLoading, isLoadeAll, type, dataBlank } = this.props
    // 关于没数据时候的显示配置
    const noData = config[type]
    return (
      <View className='page-loading'>
        {
          dataBlank && <View className={`${noData.className}`}>
            <Image className='img img-text' src={config[type].img}></Image>
            <Text className='no-data-title'>{config[type].text}</Text>
          </View>
        }
        {isLoadeAll && !dataBlank && <Text className='text'>亲，加载到底部拉~</Text>}
        { !isLoadeAll && !dataBlank && <AtActivityIndicator className='loading' content='加载中...'></AtActivityIndicator>}
      </View>
    )
  }
}

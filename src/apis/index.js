import Taro from '@tarojs/taro'
import helper from '../utils/helper'

export async function getList(page) {
    return Taro.request(helper.getParams(`url`))
  }
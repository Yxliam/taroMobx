import Taro from '@tarojs/taro'

/**
 * 显示Toast
 */
export const showToast = async (params) => {
  let timer = ''
  return new Promise(async (resolve, reject) => {
    if (typeof params === 'string') {
      await Taro.showToast({ title: params, icon: 'none' })
      timer = setTimeout(() => {
        clearInterval(timer)
        resolve()
      }, 2000)
      return false
    }
    await Taro.showToast(params)
    timer = setTimeout(() => {
      clearInterval(timer)
      resolve()
    }, params.duration || 2000)
  })
}

/**
 * 计算时间
 */
export const hms = (countdown) => {
  let h = Math.floor(countdown / 3600)
  let m = Math.floor((countdown % 3600) / 60)
  let s = countdown % 60


  if (h > 99) {
    h = '99'
    m = '59'
    s = '59'
  } else {
    h = h < 10 ? `0${h}` : `${h}`
    m = m < 10 ? `0${m}` : `${m}`
    s = s < 10 ? `0${s}` : `${s}`
  }
  return { h, m, s }
}
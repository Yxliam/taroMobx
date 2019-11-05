import NODATA from '../../assets/images/no-data.png'
import NODATA1 from '../../assets/images/no-data-1.png'
import NODATA2 from '../../assets/images/no-data-3.png'


const config = {
  // 我唱过的
  index: {
    className: 'no-data',
    img: NODATA,
    text: '暂无点歌记录，快去点歌吧~'
  },
  // 热门歌曲
  hot: {
    className: 'no-data',
    img: NODATA,
    text: '暂无热门歌曲'
  },
  // 新歌推荐
  new: {
    className: 'no-data',
    img: NODATA,
    text: '暂无新歌推荐'
  },
  // 套餐列表
  recharge: {
    className: 'no-data',
    img: NODATA,
    text: '暂无套餐'
  },
  // 搜索
  search: {
    className: 'no-data-1',
    img: NODATA1,
    text: 'Sorry，没找到相关结果哦'
  },
  // 暂无歌曲
  mySong: {
    className: 'no-data-2',
    img: NODATA2,
    text: '暂无已点歌曲'
  }
}

export default config
import server from './server'
import config from './config'
import title from './title'
export default {
  ...server,
  ...title,
  ...config
}
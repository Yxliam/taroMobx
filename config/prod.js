const path = require("path");
module.exports = {
  env: {
    NODE_ENV: '"production"'
  },
  defineConstants: {},
  alias: {
    "@components": path.resolve(__dirname, "..", "src/components"),
    "@utils": path.resolve(__dirname, "..", "src/utils"),
    "@pages": path.resolve(__dirname, "..", "src/pages"),
    "@assets": path.resolve(__dirname, "..", "src/assets"),
    "@apis": path.resolve(__dirname, "..", "src/apis"),
    "@stores": path.resolve(__dirname, "..", "src/stores"),
    "@decorators": path.resolve(__dirname, "..", "src/decorators")
  },
  weapp: {},
  h5: {
    /**
     * 如果h5端编译后体积过大，可以使用webpack-bundle-analyzer插件对打包体积进行分析。
     * 参考代码如下：
     * webpackChain (chain) {
     *   chain.plugin('analyzer')
     *     .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin, [])
     * }
     */
  }
};

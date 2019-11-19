const path = require("path");
module.exports = {
  env: {
    NODE_ENV: '"development"'
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
  weapp: {
    module: {
      postcss: {
        autoprefixer: {
          enable: true
        },
        // 小程序端样式引用本地资源内联配置
        url: {
          enable: true,
          config: {
            limit: 10240 // 文件大小限制
          }
        }
      }
    }
  },
  h5: {
    devServer: {
      host: "localhost",
      port: 10086,
      proxy: {}
    }
  }
};

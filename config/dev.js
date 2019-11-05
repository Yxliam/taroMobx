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
  weapp: {},
  h5: {}
};

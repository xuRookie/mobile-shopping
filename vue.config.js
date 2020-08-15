const path = require('path')

const IS_PROD = ["production", "prod"].includes(process.env.NODE_ENV)
// __dirname指向被执行js文件的绝对路径
const resolve = dir => path.join(__dirname, dir)

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/mobile-shopping" : "/",
  productionSourceMap: !IS_PROD, // 生产环境的 source map
  devServer: {
    port: 3300,
    open: true,
    overlay: {
      // 让浏览器 overlay 同时显示警告和错误
      warnings: true,
      errors: true
    },
    // 热更新
    hotOnly: true
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@assets', resolve('src/assets'))
      .set('@components', resolve('src/components'))
      .set('@views', resolve('src/views'))
  },
  // configureWebpack: config => {
  //   const plugins = []
  //   config.plugins = [...config.plugins, ...plugins];
  // }
  // 1. autoprefixer的配置、2. postcss-pxtorm的配置，单独配置，各自都可以生效。但是一起使用后，autoprefixer无效。
  // 将代码都配置到postcss.config.js，各自都可以正常使用。
  // css: {
  //   loaderOptions: {
  //     postcss: {
  //       plugins: [
  //         require('postcss-pxtorem')({ // 把px单位换算成rem单位
  //           rootValue: 37.5, // 换算基数，默认37.5
  //           propList: ['*'], // 属性选择器，*表示通用，!font-size表示禁用字体转换
  //           exclude: /(node_module)/,  // 默认false，可以（reg）利用正则表达式排除某些文件夹的方法
  //           // unitPrecision: 5, //允许REM单位增长到的十进制数字,小数点后保留的位数。
  //           // selectorBlackList: ['.radius'], //要忽略并保留为px的选择器
  //           // // mediaQuery: false,  //（布尔值）允许在媒体查询中转换px。
  //           // minPixelValue: 5 //设置要替换的最小像素值(3px会被转rem)。 默认 0
  //         })
  //       ]
  //     }
  //   }
  // }
}
const CracoLessPlugin = require('craco-less')
const WebpackBar = require('webpackbar');
const CircularDependencyPlugin = require('circular-dependency-plugin')

module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      webpackConfig.stats = 'errors-only'//这样才会生效
      return webpackConfig
    },
    plugins: [
      new CircularDependencyPlugin({
        // 排除检测符合正则的文件
        exclude: /a\.js|node_modules/,
        // 将符合正则的文件包含在内
        include: /dir/,
        // 向 webpack 输出错误而不是警告
        failOnError: true,
        // 允许包含异步导入的循环
        // 举例：via import(/* webpackMode: "weak" */ './file.js')
        allowAsyncCycles: false,
        // 设置当前的工作目录以显示模块路径
        cwd: process.cwd(),
      }),
      new WebpackBar()//增加一个进度条
    ]
  },
  babel: {
    compact: true
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        // 此处根据 less-loader 版本的不同会有不同的配置，详见 less-loader 官方文档
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {},
            javascriptEnabled: true
          }
        }
      }
    }
  ]
}
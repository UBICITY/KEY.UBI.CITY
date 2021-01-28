// 是否为生产环境
const isProduction = process.env.NODE_ENV !== 'development'

module.exports = {
  // 基本路径
  publicPath: './', // 默认的'/'是绝对路径，如果不确定在根路径，改成相对路径'./'
  // 输出文件目录
  outputDir: 'dist',
  assetsDir: 'static',
  indexPath: 'index.html',
  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,
  // css相关配置
  css: {
  // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    // 为预处理器的 loader 传递自定义选项。比如传递给
    // sass-loader 时，使用 `{ sass: { ... } }`。
    loaderOptions: {}
    // 为所有的 CSS 及其预处理文件开启 CSS Modules。
    // modules: false
  },
  // webpack-dev-server 相关配置
  devServer: {
    disableHostCheck: true,
    open: true,
    host: '0.0.0.0',
    port: 8080,
    hot: true, // hot配置是否启用模块的热替换功能，devServer的默认行为是在发现源代码被变更后，通过自动刷新整个页面来做到事实预览，开启hot后，将在不刷新整个页面的情况下通过新模块替换老模块来做到实时预览。

    // proxy: {
    //     '/send': {
    //       target: 'https://fpbafr2wdi.execute-api.ap-northeast-1.amazonaws.com',
    //       secure: true,
    //       changeOrigin: true,
    //       pathRewrite: {
    //         '^/send': ''
    //       }
    //     }
    // },
    // headers: {
    //   'Access-Control-Allow-Origin': '*'
    // },
    overlay: {
      warnings: false,
      errors: false
    }
  },
  configureWebpack: config => {
    // config.plugins.push(
    //   new BundleAnalyzerPlugin({
    //     analyzerMode: 'disabled',
    //     generateStatsFile: true,
    //     statsOptions: { source: false }
    //   })
    // )
    // resolve: {
    //   alias: {
    //     "@": resolve("src"),
    //     "@i": resolve("src/api"),
    //     "@c": resolve("src/components"),
    //     "@v": resolve("src/views"),
    //     "@s": resolve("src/store"),
    //     "@u": resolve("src/utils")
    //   }
    // },
    if (isProduction) {
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
      // gzip压缩配置
      // config.plugins.push(
      //   new CompressionPlugin({
      //     filename: '[path][base].gz',
      //     algorithm: 'gzip', // 压缩算法
      //     test: new RegExp('.(' + ['js', 'css'].join('|') + ')$'), // 匹配文件名
      //     threshold: 102400, // 对10K以上的数据进行压缩
      //     minRatio: 0.8,
      //     deleteOriginalAssets: true // 删除原始文件只保留压缩后的文件
      //   })
      // )
      // 代码压缩
    //   config.plugins.push(
    //     new UglifyJsPlugin({
    //       uglifyOptions: {
    //         // 生产环境自动删除console
    //         compress: {
    //           drop_debugger: true,
    //           drop_console: true,
    //           pure_funcs: ['console.log']
    //         }
    //       },
    //       sourceMap: false,
    //       parallel: true
    //     })
    //   )
    // }
    // 公共代码抽离
    // config.optimization = {
    //   splitChunks: {
    //     cacheGroups: {
    //       vendor: {
    //         chunks: 'all',
    //         test: /node_modules/,
    //         name: 'vendor',
    //         minChunks: 1,
    //         maxInitialRequests: 5,
    //         minSize: 0,
    //         priority: 100
    //       },
    //       common: {
    //         chunks: 'all',
    //         test: /[\\/]src[\\/]js[\\/]/,
    //         name: 'common',
    //         minChunks: 2,
    //         maxInitialRequests: 5,
    //         minSize: 0,
    //         priority: 60
    //       },
    //       styles: {
    //         name: 'styles',
    //         test: /\.(sa|sc|c)ss$/,
    //         chunks: 'all',
    //         enforce: true
    //       },
    //       runtimeChunk: {
    //         name: 'manifest'
    //       }
    //     }
    //   }
    // }
    } else {
      config.devtool = 'eval-cheap-module-source-map'
    }
  },
  pluginOptions: {
  // ...
  }
}
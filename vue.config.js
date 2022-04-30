const { defineConfig } = require('@vue/cli-service')
const { resolve } = require('path')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.json', '.vue', '.jpg', '.png', 'jpeg'],
      alias: {
        '@': resolve(__dirname, 'src/'),
        '@@': resolve(__dirname, 'public/'),
        vue$: 'vue/dist/vue.runtime.esm.js'
      }
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader']
        }
      ]
    }
  }
})


const path = require('path')
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, 'src/assets/styles/helpers/_variables.scss'),
        path.resolve(__dirname, 'src/assets/styles/helpers/_mixins.scss'),
        path.resolve(__dirname, 'src/assets/styles/helpers/_breakpoints.scss')
      ]
    }
  }
})

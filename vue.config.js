const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  pages: {
    index: {
      entry: 'src/app/main.ts'
    }
  },
  transpileDependencies: true,
  chainWebpack: config => {
    config.module.rule('md')
    .test(/\.svg/)
    .use('vue-loader')
    .loader('vue-loader')

    config.module.rule('md')
      .test(/\.md/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-markdown-loader')
      .loader('vue-markdown-loader/lib/markdown-compiler')
      .options({
        raw: true,
      });
  }
})
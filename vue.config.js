const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/styles/shared/_variables.scss";
          @import "@/assets/styles/shared/_mixins.scss";
        `,
      },
    },
  },
})

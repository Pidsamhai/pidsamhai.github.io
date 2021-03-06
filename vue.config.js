const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath: process.env.BASE_HREF || "/",
  pages: {
    index: {
      entry: "src/main.ts",
      title: "Pidsamhai",
    },
  },
  transpileDependencies: true,
  pluginOptions: {
    vuetify: {
      // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
    },
  },
});

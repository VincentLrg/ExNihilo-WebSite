module.exports = {
  css: {
    loaderOptions: {
      sass: {
          prependData: `
            @import "src/assets/scss/app.scss";
            @import "src/assets/scss/canvas.scss";
            @import "src/assets/scss/content.scss";
            @import "src/assets/scss/cursor.scss";
            @import "src/assets/scss/fonts.scss";
            @import "src/assets/scss/glitchV1.scss";
            @import "src/assets/scss/glitchV2.scss";
            @import "src/assets/scss/hero.scss";
            @import "src/assets/scss/teams.scss";
            @import "src/assets/scss/variables.scss";
          `
        }
    }
  },
  configureWebpack: {
      module: {
        rules: [{
          test: /\.(ttf|otf|eot|woff|woff2)$/,
          use: {
            loader: "file-loader",
            options: {
              name: "src/assets/fonts/[name].[ext]",
            },
          },
        }]
      }
    }
};
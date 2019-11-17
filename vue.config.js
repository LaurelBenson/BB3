module.exports = {
    css: {
      loaderOptions: {
        sass: {
          prependData: `@import "~@/css/variables.sass";`,
        }
      }
    }
  };
module.exports = {
  runtimeCompiler: true,
    css: {
      loaderOptions: {
        sass: {
          prependData: `@import "~@/css/variables.sass";`,
        }
      }
    }
  };
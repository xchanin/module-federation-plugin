const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  /**
   * Define libraries to share
   */
  shared: {
    
    /**
     * singleton - if there's a version conflict this gives us the highest version
     * 
     * strictVerion - if there's a version conflict emit a runtime error
     */
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },
});

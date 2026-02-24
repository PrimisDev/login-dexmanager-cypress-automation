const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demo4.dexmanager.com',
    includeShadowDom: true,
    testIsolation: true
  }
})
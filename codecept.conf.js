exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Appium: {
      app: '/Users/hebertsoares/Documents/QaNinja/CodeceptJS/LoginExample.app',
      platform: 'iOS',
      "host": "localhost",
      "port": 4723,
      desiredCapabilities: {
        deviceName: "iPhone X",
        platformVersion: "12.2",
      }
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'Projeto-CodeceptJS',
  translation: 'pt-BR'
}
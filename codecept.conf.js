exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Appium: {
      app: '/Users/hebertsoares/Downloads/9.24.0.android/app-release.apk',
      platform: 'Android',
      "host": "localhost",
      "port": 4723,
      desiredCapabilities: {
        "appPackage": "br.com.brainweb.ifood",
        "appActivity": "br.com.brainweb.ifood.mvp.splash.view.SplashScreenActivity",
        "deviceName": "testinho",
        "platformVersion": "7.1.1"
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
exports.config = {
  output: './output',
  helpers: {
    Appium: {
      app: '/Users/hebertsoares/Documents/QaNinja/CodeceptJS/app-debug.apk',
      platform: 'Android',
      host: 'localhost',
      port: 4723,
      desiredCapabilities: {
        automationName: 'uiautomator2',
        appWaitPackage: 'com.example.heitorcolangelo.espressotests',
        appPackage: 'com.example.heitorcolangelo.espressotests',
        appActivity: 'com.example.heitorcolangelo.espressotests.ui.activity.LoginActivity',
        deviceName: 'novo1',
        platformVersion: '9'
      }
    }
  },
  include: {
    I: './steps_file.js'
  },
  mocha: {},
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    }
  },
  tests: './*_test.js',
  name: 'Projeto-CodeceptJS',
  translation: 'pt-BR'
}
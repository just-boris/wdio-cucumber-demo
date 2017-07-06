exports.config = {
  specs: ["./features/**/*.feature"],

  maxInstances: 5,
  capabilities: [
    {
      browserName: "firefox"
    }
  ],

  sync: true,

  baseUrl: "https://news.ycombinator.com",
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,

  services: ["selenium-standalone"],
  framework: "cucumber",
  reporters: ["dot", "allure"],

  cucumberOpts: {
    require: ["./step-definitions"],
    timeout: 20000
  }
};

const chalk = require('chalk');
const puppeteer = require('puppeteer');
const NodeEnvironment = require('jest-environment-node');
const { readBrowserEndpoint } = require('../utils/endpoint');

module.exports = class PuppeteerEnvironment extends NodeEnvironment {
    async setup() {
      await super.setup();
      console.log(chalk.yellow('\nConnect with browser instance'))
        
      const endpoint = readBrowserEndpoint();
      this.global.browserInstance = await puppeteer.connect({
        browserWSEndpoint: endpoint,
      })
    }
}
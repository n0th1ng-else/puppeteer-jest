const puppeteer = require('puppeteer');
const chalk = require('chalk');
const { saveBrowserEndpoint } = require('../utils/endpoint');

module.exports = async function setup() {
    console.log(chalk.yellow('Run browser instance'));
    const browser = await puppeteer.launch({
        // always show DevTools
        // devtools: true,
        // Disable headless mode
        headless: false,
        // Slow down the input
        // slowMo: 100
    });

    const endpoint = browser.wsEndpoint();
    saveBrowserEndpoint(endpoint);
    global.__BROWSER_INSTANCE__ = browser;
}
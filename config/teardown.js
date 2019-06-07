const chalk = require('chalk');
const { clearEndpointCache } = require('../utils/endpoint');

module.exports = async function teardown() {
    console.log(chalk.yellow('Teardown browser and clear cache'));
    const browser = global.__BROWSER_INSTANCE__;
    await browser.close();
    clearEndpointCache();
}
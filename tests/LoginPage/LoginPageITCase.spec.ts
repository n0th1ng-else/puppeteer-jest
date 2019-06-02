import { launch, Page, Browser } from 'puppeteer';

let page: Page;
let browser: Browser;

describe('google page', () => {
    beforeAll(async () => {
        browser = await launch();
        page = await browser.newPage();
    })

    it('open main page', async () => {
        await page.goto('https://google.com');
        const text = await page.evaluate(() => document.body.textContent);
        expect(text).toContain('google');
    })

    afterAll(async () => {
        await browser.close();
    })
})

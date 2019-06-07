import { Page, Browser, BrowserContext } from 'puppeteer';

const browser: Browser = (global as any).browserInstance;
let context: BrowserContext;
let page: Page;

describe('google page', () => {
    beforeEach(async () => {
        context = await browser.createIncognitoBrowserContext();
        page = await context.newPage();
    })

    it('open google page', async () => {
        await page.goto('https://google.com');
        const text = await page.evaluate(() => document.body.textContent);
        expect(text).toContain('google');
    })

    afterEach(async () => {
        await page.close();
        await context.close();
    })
})

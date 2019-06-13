import { Page, Browser, BrowserContext } from 'puppeteer';
import { LoginPage } from '../../pages/Login';

let page: Page;
let browser: Browser = (global as any).browserInstance;

let context: BrowserContext;
let login: LoginPage;

// TODO run API
// TODO run DB queries

describe('First TS test', () => {
	beforeEach(async () => {
		context = await browser.createIncognitoBrowserContext();
		page = await context.newPage();
		login = new LoginPage(page);
	});

	it('Logs in to Tradeshift', async () => {
		await page.goto('https://sandbox.tradeshift.com');
		await login.isPageLoaded();
		await login.setEmail('sen+s@tradeshift.com');
		await login.setPassword('localPWD');

		await Promise.all([
			page.keyboard.press('Enter'),
			page.waitForNavigation({ waitUntil: 'networkidle0' })
		]);

		const url = await page.url();
		expect(url).toContain('Tradeshift.TaskList');
	});

	afterEach(async () => {
		await page.close();
		await context.close();
	});
});

import { Page } from 'puppeteer';

export class LoginPage {
	constructor(private readonly page: Page) {}

	public async isPageLoaded(): Promise<void> {
		await this.page.waitForSelector(Elements.LOGIN_CONTAINER);
	}

	public async setEmail(email: string): Promise<void> {
		await this.page.type(Elements.EMAIL, email);
	}

	public async setPassword(pwd: string): Promise<void> {
		await this.page.type(Elements.PASSWORD, pwd);
	}
}

enum Elements {
	LOGIN_CONTAINER = '.tst-loginregister-container',
	EMAIL = '.tst-email',
	PASSWORD = '.tst-password[name=j_password]'
}

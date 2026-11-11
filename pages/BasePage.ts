import { Page, Locator } from '@playwright/test';

export class BasePage {
  protected readonly page: Page;
  protected readonly navHome: Locator;
  protected readonly navCart: Locator;

  constructor(page: Page) {
    this.page = page;
    this.navHome = page.locator('[data-test="nav-home"]');
    this.navCart = page.locator('[data-test="nav-cart"]');
  }

  async navigate(path: string = '/') {
    await this.page.goto(path);
  }

  async clickElement(locator: Locator) {
    await locator.waitFor({ state: 'visible' });
    await locator.click();
  }

  async typeText(locator: Locator, text: string) {
    await locator.waitFor({ state: 'visible' });
    await locator.fill(text);
  }

   async goToHome() {
    await this.clickElement(this.navHome);
  }

  async openCart() {
    await this.clickElement(this.navCart);
  }
}
import { BasePage } from './BasePage';
import { Page, Locator } from '@playwright/test';

export class HomePage extends BasePage {
   
private readonly productCards: Locator;

  constructor(page: Page) {
    super(page);
    this.productCards = page.locator('a.card');
  }

  async openProduct(productName: string) {
    const card = this.productCards.filter({ hasText: productName }).first();
    await this.clickElement(card);
  }

}
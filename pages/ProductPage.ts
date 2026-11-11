import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class ProductPage extends BasePage {
  private readonly addToCartButton: Locator;
  private readonly cartAlert: Locator;

  constructor(page: Page) {
    super(page);
    this.addToCartButton = page.locator('[data-test="add-to-cart"]');
    this.cartAlert = page.getByRole('alert');
  }


  async addToCart() {
    await this.clickElement(this.addToCartButton);
  }

  async expectAddedToCart() {
    await expect(this.cartAlert).toBeVisible();
  }
}
import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  private readonly signInLink: Locator;
  private readonly emailInput: Locator;
  private readonly passwordInput: Locator;
  private readonly submitButton: Locator;

  constructor(page: Page) {
    super(page)
    this.signInLink = page.locator('[data-test="nav-sign-in"]');
    this.emailInput = page.locator('#email');
    this.passwordInput = page.locator('#password');
    this.submitButton = page.locator('[data-test="login-submit"]');
  }

   async goto() {
    await this.page.goto('/');
  }

    async openLoginForm() {
    await this.signInLink.click();
  }
   async login(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.submitButton.click();
 }

}
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('ToolShop - Flujo E2E de Compra de Principio', () => {

  test('Proceso completo de compra en un solo flujo monolítico', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await test.step('Abrir la página de inicio', async () => {
    await loginPage.goto();
    await expect(page).toHaveURL('/');
    });



    await test.step('Paso 2: Iniciar sesión con credenciales válidas', async () => {
      await loginPage.openLoginForm();
      await loginPage.login('admin@practicesoftwaretesting.com', 'welcome01');
      await expect(page).toHaveURL(/.*dashboard/);
      await expect(page.locator('[data-test="page-title"]')).toHaveText('Sales over the years');
      await expect(page.locator('app-dashboard')).toBeVisible();
      await expect(page.getByText('INV-').first()).toBeVisible();
    });

    await test.step('Paso 3: Categorías', async () => {
      await page.locator('[data-test="nav-categories"]').click();
      await page.locator('[data-test="nav-hand-tools"]').click();
      await expect(page).toHaveURL(/.*category\/hand-tools/);
      await expect(page.locator('[data-test="page-title"]')).toHaveText('Categoría: Hand Tools');
    });
  });
});


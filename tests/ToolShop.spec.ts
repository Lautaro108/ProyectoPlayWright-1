import { test, expect } from '@playwright/test';

test.describe('ToolShop - Flujo E2E de Compra de Principio', () => {

  test('Proceso completo de compra en un solo flujo monolítico', async ({ page }) => {

    // Paso 1: Abrir la página de inicio de ToolShop 
    await page.goto('https://practicesoftwaretesting.com/');
    await expect(page).toHaveURL('https://practicesoftwaretesting.com/');

    // Paso 2: Iniciar sesión con credenciales válidas
    await page.locator('[data-test="nav-sign-in"]').click();
    await page.fill('[id="email"]', 'admin@practicesoftwaretesting.com');
    await page.fill('[id="password"]', 'welcome01');
    await page.locator('[data-test="login-submit"]').click();
    await expect(page).toHaveURL(/.*dashboard/);
    await expect(page.locator('[data-test="page-title"]')).toHaveText('Sales over the years');
    await expect(page.locator('app-dashboard')).toBeVisible();
    await expect(page.getByText('INV-').first()).toBeVisible();

    // Paso 3: Paso a Categorías y seleccionar una categoría de producto
    await page.locator('[data-test="nav-categories"]').click();
    await page.locator('[data-test="nav-hand-tools"]').click(); // Selecciona la primera categoría

    await expect(page).toHaveURL(/.*category\/hand-tools/);
    await expect(page.locator('[data-test="page-title"]')).toHaveText('Categoría: Hand Tools');


  });

});
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { ProductPage } from '../pages/ProductPage';

const Combination_Pliers = 'Combination Pliers'; // poné el nombre del producto que elegiste

test('Compra: agregar un producto al carrito', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);
  const productPage = new ProductPage(page);

  await test.step('Iniciar sesión', async () => {
    await loginPage.goto();
    await loginPage.openLoginForm();
    await loginPage.login('admin@practicesoftwaretesting.com', 'welcome01');
    await expect(page).toHaveURL(/.*dashboard/);
  });

  await test.step('Volver a la pantalla de inicio', async () => {
    await homePage.goToHome();
  });

  await test.step('Abrir el producto', async () => {
    await homePage.openProduct(Combination_Pliers);
  });

  await test.step('Subir la cantidad y agregar al carrito', async () => {
    await productPage.addToCart();
    await productPage.expectAddedToCart();
  });
});
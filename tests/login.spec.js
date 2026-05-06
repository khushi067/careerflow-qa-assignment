import{test, expect} from '@playwright/test'

const { LoginPage } = require('../pages/LoginPage');
const { InventoryPage } = require('../pages/InventoryPage');
const data = require('../utils/testData');

/*
Flow Justification:
This test validates a core e2e user journey:
Login → Dashboard load → Perform action (add to cart)

This matters because it verifies:
- Authentication works
- User lands on correct page
- Core interaction (cart functionality) works
*/

test('Valid login and add item to cart', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  await loginPage.goto();
  await loginPage.login(data.validUser.username, data.validUser.password);

  // Assertion 1: Inventory page loaded
  await expect(page.locator('.inventory_list')).toBeVisible();

  // Assertion 2: Add item to cart
  await inventoryPage.addItemToCart();

  // Assertion 3: Cart count updates
  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
});

test('Invalid login shows error', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login(data.invalidUser.username, data.invalidUser.password);

  // Assertion: Error message visible
  await expect(await loginPage.getError()).toBeVisible();
});

class InventoryPage {
	constructor(page) {
	  this.page = page;
	  this.inventoryContainer = '.inventory_list';
	  this.addToCartBtn = '.inventory_item button';
	  this.cartBadge = '.shopping_cart_badge';
	}
  
	async isLoaded() {
	  return await this.page.locator(this.inventoryContainer).isVisible();
	}
  
	async addItemToCart() {
	  await this.page.locator(this.addToCartBtn).first().click();
	}
  
	async getCartCount() {
	  return await this.page.locator(this.cartBadge).textContent();
	}
  }
  
  module.exports = { InventoryPage };
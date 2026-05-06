class LoginPage {
	constructor(page) {
	  this.page = page;
	  this.usernameInput = '#user-name';
	  this.passwordInput = '#password';
	  this.loginButton = '#login-button';
	  this.errorMessage = "//h3[contains(text(),'Epic sadface: Username and password do not match a')]";
	}
  
	async goto() {
	  await this.page.goto('https://www.saucedemo.com/');
	}
  
	async login(username, password) {
	  await this.page.fill(this.usernameInput, username);
	  await this.page.fill(this.passwordInput, password);
	  await this.page.click(this.loginButton);
	}
  
	async getError() {
	  return this.page.locator(this.errorMessage);
	}
  }
  
  module.exports = { LoginPage };

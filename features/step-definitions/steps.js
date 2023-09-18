import { Given, When, Then } from '@wdio/cucumber-framework';
import LoginPage from '../pageobjects/login.page.js';

Given("User is located on {string} of saucedemo website", async (pageName) => {
    await LoginPage.open(pageName);
});

When("User click {string} button", async (loginButton) => {
    await LoginPage[loginButton].click();
});

Then("User should see {string} error", async (errorMessage) => {
    await expect(LoginPage.errorMsg).toHaveText(errorMessage);
});
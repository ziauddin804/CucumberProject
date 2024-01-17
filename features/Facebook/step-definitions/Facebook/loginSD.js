const { Given } = require("@wdio/cucumber-framework");
const LoginPage = require ('../../POM/Facebook/LoginPage')

const loginPage = new LoginPage();

Given (/^I am on facebook$/, async function () {
    await browser.url('/');
    await browser.pause(5000);
});

When (/^I type '(.*)' as username$/, async function () {
   await loginPage.enterLoginEmail('username');
});
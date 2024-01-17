const { BROWSER_ENVIRONMENTS } = require("@wdio/cli/build/constants");
const { Given } = require("@wdio/cucumber-framework");


Given (/^I am on facebook$/, async function () {
    await browser.url('/');
})
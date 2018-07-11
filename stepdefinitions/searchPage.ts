import { browser, protractor } from "protractor";
import { SearchPageObject } from "../pages/searchPage";
import { When, Then } from "cucumber";

const search: SearchPageObject = new SearchPageObject();

When('I type {string}', async (text) => {
    await search.searchTextBox.sendKeys(text);
});


Then('I click on search button', async () => {
    await browser.actions().sendKeys(protractor.Key.ENTER).perform();
});

Then('I click on google logo', async () => {
    await search.logo.click();
});

  
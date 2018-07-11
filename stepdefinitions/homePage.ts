import { browser } from "protractor";
import { Given } from "cucumber";
import { SearchPageObject } from "../pages/searchPage";
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

const search: SearchPageObject = new SearchPageObject();

Given('I am on {string} search page', async (text) => {
    browser.sleep(3000);
    if(text === 'google') {
        await expect(browser.getTitle()).to.eventually.equal("Google");
    } else if(text === 'cucumber') {
        await expect(browser.getTitle()).to.eventually.equal(text+" - Google Search");
    } else if(text === 'protractor') {
        await expect(browser.getTitle()).to.eventually.equal(text+" - Google Search");
    }  
});
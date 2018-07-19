"use strict";
const assert = require("assert");
const should = require("chai");

const Login = require("../pageobjects/loginPage"),
    LoginActions = Login.LoginActions,
    LoginPage = Login.LoginPage;

const AccountMenu = require("../pageobjects/accountMenu"),
    AccountMenuPage = AccountMenu.AccountMenuPage,
    AccountMenuActions = AccountMenu.AccountMenuActions;

const HomePage = require("../pageobjects/home.page");
const userData = require("../data/user.data");

var testSuiteName;
var test1;

var extendedWait = 5000;

suite((testSuiteName = "Login Test Suite"), () => {
  test((test1 = "A_Login to resale succesfully"), () => {
    browser.logger.info('Starting test for "' + test1 + '"');
    LoginActions.login();
  });

  test("B_Logout of resale succesfully", () => {
    HomePage.listingHasReseller_Row.waitForVisible(extendedWait);
    AccountMenuActions.logout();
    
    LoginPage.username_Input.waitForVisible(HomePage.defaultWait);
    LoginPage.password_Input.waitForVisible(HomePage.defaultWait);
    LoginPage.submit_Button.waitForVisible(HomePage.defaultWait);

    browser.logger.info("Resale Login page opened as expected.");

    assert.equal(browser.getTitle(), "Login");
  });
});

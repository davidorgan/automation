"use strict";
//const assert = require("assert");
//const should = require("chai");
var chai = require("chai");
var chaiWebdriver = require("chai-webdriverio").default;
chai.use(chaiWebdriver(browser));
var chai = require("chai"),
    expect = chai.expect,
    should = chai.should();

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

suite("Version number test suite", () => {
  test((test1 = "A_Version number test"), () => {
    browser.logger.info('Starting test for "' + test1 + '"');
    LoginActions.login();

    AccountMenuActions.hoverMenu();
    expect(AccountMenuPage.userMenuVersion_Li.getText()).to.be.eql('Qcue ' + userData.versionNum);
  });
});
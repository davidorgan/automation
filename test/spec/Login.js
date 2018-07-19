"use strict";
const assert = require("assert");
const should = require("chai");
const LoginPage = require("../pageobjects/loginPage");
const HomePage = require("../pageobjects/home.page");
const userData = require("../data/user.data");

var testSuiteName;
var test1;

suite((testSuiteName = "Login Test Suite"), () => {
  test((test1 = "A_Login to resale succesfully"), () => {
    browser.logger.info('Starting test for "' + test1 + '"');
    LoginPage.LoginActions.login();
  });

  test("B_Logout of resale succesfully", () => {
    //TBD
  });
});

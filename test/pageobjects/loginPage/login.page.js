// login.page.js
var Page = require("../page");

const assert = require("assert");
var chai = require("chai"),
  expect = chai.expect,
  should = chai.should();

const HomePage = require("../../pageobjects/home.page");
const userData = require("../../data/user.data");

var LoginPage = Object.create(Page, {
  /**
   * define elements
   */
  username_Input: {
    get: function() {
      return browser.element('[name="j_username"]');
    }
  },
  password_Input: {
    get: function() {
      return browser.element('[name="j_password"]');
    }
  },
  submit_Button: {
    get: function() {
      return browser.element(".submitButton");
    }
  }
});

module.exports = LoginPage;

// login.page.js
var Page = require("./page");

const assert = require("assert");
var chai = require("chai"),
  expect = chai.expect,
  should = chai.should();

const HomePage = require("../pageobjects/home.page");
const userData = require("../data/user.data");

var DashboardPage = Object.create(Page, {
  /**
   * define elements
   */
  appPageNav_Div: {
    get: function() {
      return browser.element(".app-page-nav");
    }
  },

  /**
   * define or overwrite page methods
   */
  open: {
    value: function() {
      Page.open.call(this, "/resale/ui/dashboard");
    }
  },

  submit: {
    value: function() {
      this.form.submitForm();
    }
  }
});

module.exports = DashboardPage;

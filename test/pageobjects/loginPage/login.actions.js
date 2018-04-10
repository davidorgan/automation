// login.page.js
var Page = require("../page");

const assert = require("assert");
var chai = require("chai"),
  expect = chai.expect,
  should = chai.should();

const HomePage = require("../../pageobjects/home.page");
const userData = require("../../data/user.data");
const LoginPage = require("./login.page");

var LoginActions = Object.create(Page, {
  /**
   * define or overwrite page methods
   */
  open: {
    value: function() {
      Page.open.call(this, "/resale/login.do");
    }
  },

  submit: {
    value: function() {
      this.form.submitForm();
    }
  },

  //Goes to base url and logs in to resale
  login: {
    value: function() {
      LoginPage.open();
      LoginPage.username_Input.waitForVisible(HomePage.defaultWait);
      LoginPage.password_Input.waitForVisible(HomePage.defaultWait);
      LoginPage.submit_Button.waitForVisible(HomePage.defaultWait);
      browser.waitX(1);

      browser.logger.info("Resale opened as expected.");

      assert.equal(browser.getTitle(), "Login");

      browser.logger.info("Title matches expected");

      LoginPage.username_Input.setValue(userData.username);
      LoginPage.password_Input.setValue(userData.password);
      LoginPage.submit_Button.click();

      var title = browser.getTitle();
      browser.logger.info(title);

      HomePage.listingSwatch_Container.waitForVisible(HomePage.defaultWait);
      assert.equal(browser.getTitle(), "Qcue - Home");
    }
  }
});

module.exports = LoginActions;

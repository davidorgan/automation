// login.page.js
var Page = require("./page");

const assert = require("assert");
var chai = require("chai"),
  expect = chai.expect,
  should = chai.should();

const HomePage = require("../pageobjects/home.page");
const userData = require("../data/user.data");

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
  },

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
      this.open();
      this.username_Input.waitForVisible(3000);
      this.password_Input.waitForVisible(3000);
      this.submit_Button.waitForVisible(3000);
      browser.waitX(1);

      browser.logger.info("Resale opened as expected.");

      assert.equal(browser.getTitle(), "Login");

      browser.logger.info("Title matches expected");

      this.username_Input.setValue(userData.username);
      this.password_Input.setValue(userData.password);
      this.submit_Button.click();

      var title = browser.getTitle();
      browser.logger.info(title);

      HomePage.listingSwatch_Container.waitForVisible(3000);
      assert.equal(browser.getTitle(), "Qcue - Home");
    }
  }
});

module.exports = LoginPage;

// login.page.js
var Page = require("./page");

const assert = require("assert");
var chai = require("chai"),
  expect = chai.expect,
  should = chai.should();

const HomePage = require("../pageobjects/home.page");
const userData = require("../data/user.data");

var TempPage = Object.create(Page, {
  /**
   * define elements
   */
  eventTitle_Span: { get: function() { return browser.element('[translate="events.events"]'); } },

  /**
   * define or overwrite page methods
   */
  open: {
    value: function() {
      Page.open.call(this, "/resale/ui/foo");
    }
  },

  submit: {
    value: function() {
      this.form.submitForm();
    }
  }
});

module.exports = TempPage;

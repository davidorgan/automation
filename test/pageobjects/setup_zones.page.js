// login.page.js
var Page = require("./page");

const assert = require("assert");
var chai = require("chai"),
  expect = chai.expect,
  should = chai.should();

const HomePage = require("../pageobjects/home.page");
const userData = require("../data/user.data");

var ZonesPage = Object.create(Page, {
  /**
   * define elements
   */
  zonesTitle_Span: {
    get: function() {
      return browser.element('[translate="zones.venueMap"]');
    }
  },

  /**
   * define or overwrite page methods
   */
  open: {
    value: function() {
      Page.open.call(this, "/resale/ui/zones");
    }
  },

  submit: {
    value: function() {
      this.form.submitForm();
    }
  }
});

module.exports = ZonesPage;

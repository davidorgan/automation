// login.page.js
var Page = require("./page");

const assert = require("assert");
var chai = require("chai"),
  expect = chai.expect,
  should = chai.should();

const HomePage = require("../pageobjects/home.page");
const userData = require("../data/user.data");

var ReportsPage = Object.create(Page, {
  /**
   * define elements
   */
  reportsTitle_Span: { get: function() { return browser.element('[translate="reports.reports"]'); } },

  /**
   * define or overwrite page methods
   */
  open: {
    value: function() {
      Page.open.call(this, "/resale/ui/reports");
    }
  }
});

module.exports = ReportsPage;

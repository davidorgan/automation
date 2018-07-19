// login.page.js
var Page = require("./page");

const assert = require("assert");
var chai = require("chai"),
  expect = chai.expect,
  should = chai.should();

const HomePage = require("../pageobjects/home.page");
const userData = require("../data/user.data");

var UsersPage = Object.create(Page, {
  /**
   * define elements
   */
  usersTitle_Span: { get: function() { return browser.element('[translate="users.users"]'); } },

  /**
   * define or overwrite page methods
   */
  open: {
    value: function() {
      Page.open.call(this, "/resale/ui/users");
    }
  }
});

module.exports = UsersPage;

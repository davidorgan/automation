"use strict";
var Page = require("../page");
const AccountMenuPage = require("./accountMenu.page");

const assert = require("assert");
var chai = require("chai"),
  expect = chai.expect,
  should = chai.should();

var AccountMenuActions = Object.create(Page, {
  logout: {
    value: function() {
        AccountMenuPage.userMenu_Container.moveTo(0,0);
        AccountMenuPage.userMenuLogout_Link.click();
    }
  }
});

module.exports = AccountMenuActions;
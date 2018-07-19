"use strict";
var Page = require("../page");
const AccountMenuPage = require("./accountMenu.page");

const assert = require("assert");
var chai = require("chai"),
  expect = chai.expect,
  should = chai.should();

var AccountMenuActions = Object.create(Page, {
    hoverMenu: {
        value: function() {
            AccountMenuPage.userMenu_Container.moveToObject();
        }
    },
    logout: {
        value: function() {
            AccountMenuPage.userMenu_Container.moveToObject();
            AccountMenuPage.userMenuLogout_Link.click();
        }
    }
});

module.exports = AccountMenuActions;
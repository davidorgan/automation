"use strict";
// accountMenu.page.js
var Page = require("../page");
var versionNum = '4.8.0';

var AccountMenuPage = Object.create(Page, {
  /**
   * define elements
   */
  //User Menu Container
  userMenu_Container: { get: function() { return browser.element(".userMenu"); }},
    //User Menu Dropdown
    userMenu_Dropdown: {get: function() { return this.userMenu_Container.element(".dropdown-menu-with-hover"); }},
        //User Menu Account Link
        userMenuAccount_Link: {get: function() { return this.userMenu_Dropdown.element("a*=My Account"); }},
        //User Menu Notifications Link
        userMenuNotifications_Link: {get: function() { return this.userMenu_Dropdown.element("a*=Notifications"); }},
        //User Menu Logout Link
        userMenuLogout_Link: {get: function() { return this.userMenu_Dropdown.element("a*=Log Out"); }},
        //User Menu Version 
        userMenuVersion_Li: {get: function() { return this.userMenu_Dropdown.element("li*=Qcue "+ versionNum); }},
});

module.exports = AccountMenuPage;

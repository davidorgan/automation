/*jslint node: true */
"use strict";
const assert = require("assert");
var chai = require("chai");
var chaiWebdriver = require("chai-webdriverio").default;
chai.use(chaiWebdriver(browser));
var chai = require("chai"),
    expect = chai.expect,
    should = chai.should();

const Login = require("../pageobjects/loginPage"),
    LoginActions = Login.LoginActions,
    LoginPage = Login.LoginPage;
    
const HomePage = require("../pageobjects/home.page");
const EventListingsTable = require('../pageobjects/eventListingsTable'),
    EventListingsTableActions = EventListingsTable.EventListingsTableActions,
    EventListingsTablePage = EventListingsTable.EventListingsTablePage;

const userData = require("../data/user.data");
  
var testSuiteName;
var extendedWait = 5000;

suite((testSuiteName = "QAT-000_Events listings can be bulk shared/unshared"), () => {
    test("QAT-000_Events listings can be bulk shared/unshared", () => {
        // -------------------------------- //
        // *** Step 0 - Login to Resale *** //
        // -------------------------------- //
        browser.logger.info("QAT-409_Events listings can be shared/unshared");
        browser.logger.info("Step 0 - Login to Resale...");
        LoginActions.login() //Goes to base url and logs in to resale
        browser.logger.info("Step 0 - Login to Resale: PASSED");

        // ----------------------------------------------------- //
        // *** Step 1 -  Select all checkboxes for listings *** //
        // EXPECTED RESULT::-----------------------------------//
        // All listings are selected //
        // ------------------------------------------------- //

    });
});
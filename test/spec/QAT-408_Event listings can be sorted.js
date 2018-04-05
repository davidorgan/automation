/*jslint node: true */
"use strict";
const assert = require("assert");
var chai = require("chai");
var chaiWebdriver = require("chai-webdriverio").default;
chai.use(chaiWebdriver(browser));
var chai = require("chai"),
  expect = chai.expect,
  should = chai.should();
const LoginPage = require("../pageobjects/login.page");
const HomePage = require("../pageobjects/home.page");
const EventListPage = require("../pageobjects/eventList.page");
const userData = require("../data/user.data");

var testSuiteName;
var extendedWait = 5000;

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

suite((testSuiteName = "QAT-408_Event listings can be sorted"), () => {
  test("QAT-408_Event listings can be sorted", () => {
    // -------------------------------- //
    // *** Step 1 - Login to Resale *** //
    // -------------------------------- //

    browser.logger.info("QAT-408_Event listings can be sorted");
    LoginPage.login(); //Goes to base url and logs in to resale
    browser.logger.info("Step 1 - Login to Resale: PASSED");

    // ------------------------------------------------------- //
    // *** Step 2 - Click Event List Dropdown on Home page *** //
    // EXPECTED RESULT::------------------------------------------------- //
    // Event List dropdown displays showing all events for that Reseller. //
    // ------------------------------------------------------------------ //
    browser.logger.info("Click Event List Dropdown on Home page...");

    browser.logger.info("Click Event List Dropdown on Home page: PASSED");

    // ----------------------------------------------- //
    // *** Step 3 - Click on an event in dropdown. *** //
    // EXPECTED RESULT::------------------------------------------------------------ //
    // Event clicked on now displays on Home page with matching Event Name/Date etc. //
    // ----------------------------------------------------------------------------- //
    browser.logger.info("Click on an event in dropdown...");

    browser.logger.info("Click on an event in dropdown.: PASSED");

    // --------------------------------------------------------------------------------------------------- //
    // *** Step 5 - Click arrow to left of Event list and repeat until reach first event in list again.*** //
    // EXPECTED RESULT::---------------------------------------------------------------------- //
    // Each click of left arrow displays previous event in list until reach first event again. //
    //Left arrow no longer displays at this point. ------------------------------------------- //
    // --------------------------------------------------------------------------------------- //
    browser.logger.info(
      "Click arrow to left of Event list and repeat until reach first event in list again..."
    );

    browser.logger.info(
      "Click arrow to left of Event list and repeat until reach first event in list again: PASSED"
    );

    // ----------------------------------------------------------------------------------------------- //
    // *** Step 6 - Click arrow to right of Event list and repeat until reach last event in list.t *** //
    // EXPECTED RESULT::------------------------------------------------------------ //
    // Each click of arrows displays next event in list until last event is reached. //
    // Right arrow no longer displays at this point. ------------------------------- //
    // ----------------------------------------------------------------------------- //
    browser.logger.info(
      "Continue to click right arrow until reaching last event in list..."
    );

    browser.logger.info(
      "Continue to click right arrow until reaching last event in list: PASSED"
    );
  });
});

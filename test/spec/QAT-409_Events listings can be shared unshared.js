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

suite((testSuiteName = "QAT-409_Events listings can be shared/unshared"), () => {
    test("QAT-409_Events listings can be shared/unshared", () => {
        // -------------------------------- //
        // *** Step 0 - Login to Resale *** //
        // -------------------------------- //
        browser.logger.info("QAT-409_Events listings can be shared/unshared");
        browser.logger.info("Step 0 - Login to Resale...");
        LoginActions.login() //Goes to base url and logs in to resale
        browser.logger.info("Step 0 - Login to Resale: PASSED");

        // --------------------------------------------------------------- //
        // *** Step 1 -  Click '3 dot' grey icon beside event listing *** //
        // EXPECTED RESULT::---------------------------------------------------------- //
        // Icon changes from to now have cross over it and shows 'Unshared' on hover. //
        // ------------------------------------------------------------------------- //
        browser.logger.info("Step 1 - Click '3 dot' grey icon beside event listing...");

        HomePage.goToReseller('PrimeSport');
        browser.pause(2000);
        EventListingsTableActions.findEventWithSharedListings();

        EventListingsTablePage.listingsTable_Div.waitForVisible(extendedWait);
        EventListingsTablePage.listingHasReseller_Row.waitForVisible(extendedWait);

        EventListingsTable.EventListingsTablePage.listingSwatch_Container.waitForVisible(extendedWait);
        EventListingsTable.EventListingsTablePage.listingSwatch_Container.click(); //Click to put reseller listings at top
    

        //Number of shared listings before test
        var numShared = EventListingsTablePage.listingsTableSharedCol_Span.value.length;
    
        //Number of unshared listings before test
        var numUnshared = EventListingsTablePage.listingsTableUnSharedCol_Span.value.length;

        console.log('Shared before: ', numShared);
        console.log('Unshared before: ', numUnshared);

        EventListingsTablePage.listingsTableSharedCol_Span.waitForVisible(extendedWait);
        EventListingsTablePage.listingsTableSharedCol_Span.value[0].click();

        browser.pause(2000);
        var numSharedAfter = EventListingsTablePage.listingsTableSharedCol_Span.value.length;
        var numUnsharedAfter = EventListingsTablePage.listingsTableUnSharedCol_Span.value.length;

        console.log("Shared after: ", numSharedAfter);
        console.log("Unshared after: ", numUnsharedAfter);

        expect(numShared-1).to.be.eql(numSharedAfter);
        expect(numUnshared+1).to.be.eql(numUnsharedAfter);
        browser.logger.info("Step 1 - Click '3 dot' grey icon beside event listing: PASSED");
    });
});
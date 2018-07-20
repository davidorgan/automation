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
const ReviewPane = require("../pageobjects/reviewPane");
const EventListingsTable = require("../pageobjects/eventListingsTable"),
    EventListingsTablePage = EventListingsTable.EventListingsTablePage,
    EventListingsTableActions = EventListingsTable.EventListingsTableActions;
const EventListDropdown = require("../pageobjects/eventListingsTable"),
    EventListDropdownPage = EventListDropdown.EventListDropdownPage,
    EventListDropdownActions = EventListDropdown.EventListDropdownActions;
const HomePage = require("../pageobjects/home.page");
const userData = require("../data/user.data");

suite((testSuiteName = "QAT-41 - Review pane - Reject checked prices"), () => {
    test("QAT-41 - Review pane - Reject checked prices", () => {
        // -------------------------------- //
        // *** Step 0 - Login to Resale *** //
        // -------------------------------- //
        browser.logger.info("Starting test for QAT-41 - Review pane - Reject checked prices");
        LoginActions.login(); //Goes to base url and logs in to resale

        // -------------------------------------------------------------------------- //
        // *** Step 1 - Add multiple price changes from multiple events and zones *** //
        // -------------------------------------------------------------------------- //
        HomePage.goToReseller("PrimeSport"); //Function to go to named reseller

        EventListingsTablePage.listingSwatch_Container.waitForVisible(HomePage.defaultWait);
        EventListingsTablePage.listingSwatch_Container.click(); //Click to sort by your inventory at top
        EventListingsTablePage.listingHasReseller_Row.waitForVisible(HomePage.defaultWait);

        var numPriceChanges = 0;
        //Edit price for 3 listings on 3 different events and then find event with multiple listings for 4th edit
        for (var i = 0; i < 4; i++) {
            //Skip event if no listings available or listings is in another users cart
            if (i === 3) {
            //Find event with multitple listings
            EventListDropdownActions.findEventMultipleListings();
            } else {
            //Go to next valid event
            EventListDropdownActions.findEventValidListings();
            }  
            //Get detailed listings info for current reseller/event
            //beforeSubmitListings[i] = HomePage.getEventListingsInfo();
            //If more than 4 listings just edit the first 4
            let numListingsToEdit = 4;
            if (EventListingsTablePage.listingHasReseller_Row.value.length < 4) {
            numListingsToEdit = EventListingsTablePage.listingHasReseller_Row.value.length;
            }
    
            for (var j = 0; j < numListingsToEdit; j++) {
            rowNum = j + 1;
            //Function to edit all listings prices for event
            listingPriceResults = EventListingsTablePage.editPrice(10, rowNum); //returns object like { currentPriceRes: '$14900', newPriceRes: 159 }
            priceResults[numPriceChanges] = listingPriceResults; //Add edit price results obj to array of results
            numPriceChanges = numPriceChanges + 1;
            }
        }
    
        console.log(priceResults);
        ReviewPane.homePriceCartText_Span.waitForVisible(HomePage.defaultWait);
        browser.pause(1000);
        //Assert number of price changes matches number displayed in Review Pane cart.
        expect(priceResults.length.toString()).to.eql(ReviewPane.homePriceCartText_Span.getText());
    
        HomePage.priceCart_Icon.waitForVisible(HomePage.defaultWait);
        HomePage.priceCart_Icon.click();
    
        HomePage.expandAllEventsReviewPane();
        //HomePage.reviewPaneCaret1_I.click();
    
        HomePage.getReviewListingsInfo();
        //browser.logger.info("Next Line should have review pane events elements");
        //var eventsReviewPane = browser.elements('[ng-repeat="changeSet in filteredEvents = (changeSets | filter: reviewSearchFilter | orderBy: eventFilter)"]');
        //browser.logger.info(eventsReviewPane.value);
    
        HomePage.eventsReviewPane_Container.value.forEach(element => {
            browser.logger.info(element.value);
            browser.logger.info("Event header text should display here: ");
            browser.logger.info(element.element(".//div[1]/span[1]").getText());
        });
    
        //HomePage.newPricesinCart.waitForVisible(HomePage.defaultWait);
        //console.log(HomePage.newPricesinCart.value.length);
        
        for (var i = 0; i < eventsReviewPane.value.length; i++) { //NewPriceInCart elements doubled for each row
            //console.log('$'+ priceResults[i].newPriceRes +'00');
            //figure out better way to assert new prices are shown on review pane.
        }
    
        var afterEditListings = HomePage.getEventListingsInfo();
    });
  });
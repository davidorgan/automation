"use strict";
const assert = require("assert");
var chai = require("chai");
var chaiWebdriver = require("chai-webdriverio").default;
chai.use(chaiWebdriver(browser));
var chai = require("chai"),
  expect = chai.expect,
  should = chai.should();
const LoginPage = require("../pageobjects/loginPage");
const ReviewPane = require("../pageobjects/reviewPane");
const { listingSwatch_Container } = require("../pageobjects/eventListingsTable");
const HomePage = require("../pageobjects/home.page");
const userData = require("../data/user.data");

var testSuiteName;
var newPrice;
var currentPrice;
var newEditPrice;
var priceResults = [];
var listingPriceResults;
var beforeSubmitListings = [];
var rowNum;

suite((testSuiteName = "QAT-40 - Review pane - Submit checked prices"), () => {
  test("QAT-40 - Review pane - Submit checked prices", () => {
    // -------------------------------- //
    // *** Step 1 - Login to Resale *** //
    // -------------------------------- //

    browser.logger.info(
      "Starting test for QAT-40 - Review pane - Submit checked prices"
    );
    LoginPage.login(); //Goes to base url and logs in to resale

    // -------------------------------------------------------------------------- //
    // *** Step 2 - Add multiple price changes from multiple events and zones *** //
    // -------------------------------------------------------------------------- //
    HomePage.goToReseller("PrimeSport"); //Function to go to named reseller

    HomePage.listingSwatch_Container.waitForVisible(HomePage.defaultWait);
    HomePage.listingSwatch_Container.click(); //Click to sort by your inventory at top

    var numPriceChanges = 0;
    //Edit price for 3 listings on 3 different events and then find event with multiple listings for 4th edit
    for (var i = 0; i < 4; i++) {
      //Skip event if no listings available or listings is in another users cart
      if (i === 3) {
        //Find event with multitple listings
        HomePage.findEventMultipleListings();
      } else {
        //Go to next valid event
        HomePage.findEventValidListings();
      }

      //Get detailed listings info for current reseller/event
      //beforeSubmitListings[i] = HomePage.getEventListingsInfo();

      //If more than 4 listings just edit the first 4
      let numListingsToEdit = 4;
      if (HomePage.listingHasReseller_Row.value.length < 4) {
        numListingsToEdit = HomePage.listingHasReseller_Row.value.length;
      }

      for (var j = 0; j < numListingsToEdit; j++) {
        rowNum = j + 1;
        //Function to edit all listings prices for event
        listingPriceResults = HomePage.editPrice(10, rowNum); //returns object like { currentPriceRes: '$14900', newPriceRes: 159 }
        priceResults[numPriceChanges] = listingPriceResults; //Add edit price results obj to array of results
        numPriceChanges = numPriceChanges + 1;
      }
    }

    console.log(priceResults);
    HomePage.homePriceCartText_Span.waitForVisible(HomePage.defaultWait);
    browser.pause(1000);
    expect(priceResults.length.toString()).to.eql(
      HomePage.homePriceCartText_Span.getText()
    );

    HomePage.priceCart_Icon.waitForVisible(HomePage.defaultWait);
    HomePage.priceCart_Icon.click();

    // console.log("Prices Current Vs New: ");
    // console.log(priceResults);
    // console.log("Listing Info before submit: ");
    // console.log(beforeSubmitListings);

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
    for (
      var i = 0;
      i < eventsReviewPane.value.length;
      i++ //NewPriceInCart elements doubled for each row
    ) {
      //console.log('$'+ priceResults[i].newPriceRes +'00');
      //figure out better way to assert new prices are shown on review pane.
    }

    var afterEditListings = HomePage.getEventListingsInfo();
  });

  // test('Step 2 - Add multiple price changes from multiple events and zones', () => {
  //   browser.logger.info("Go to Test Reseller.");
  //   HomePage.goToReseller('Qcue'); //Function to go to named reseller
  //
  //   HomePage.listingSwatch_Container.waitForVisible(HomePage.defaultWait);
  //   HomePage.listingSwatch_Container.click(); //Click to sort by your inventory at top
  //
  //   //Edit price for 3 listings on 3 different events and then find event with multiple listings for 4th edit
  //   for(var i = 0; i < 4; i++){
  //     for(var j = 0; j < HomePage.listingHasReseller_Row.value.length; j++)
  //     {
  //       rowNum = j+1;
  //       //console.log('Number of loops: '+ rowNum);
  //       //Function to edit price; Defaults to first listing and defaults +5 to current price, enter int for custom price change.
  //       listingPriceResults = HomePage.editPrice(10,rowNum); //returns object like { currentPriceRes: '$14900', newPriceRes: 159 }
  //       priceResults[i+j] = listingPriceResults; //Add edit price results obj to array of results
  //       beforeSubmitListings[i+j] = HomePage.getEventListingsInfo();
  //     }
  //
  //     if(i == 2)
  //     {
  //       //Find event with multitple listings
  //       HomePage.findEventMultipleListings();
  //     }
  //     else{
  //       HomePage.nextEvent_Button.waitForVisible(HomePage.defaultWait);
  //       HomePage.nextEvent_Button.click();
  //     }
  //   }
  //
  //   HomePage.homePriceCartText_Span.waitForVisible(HomePage.defaultWait);
  //   expect(beforeSubmitListings.length.toString()).to.eql(HomePage.homePriceCartText_Span.getText());
  //
  //   HomePage.priceCart_Icon.waitForVisible(HomePage.defaultWait);
  //   HomePage.priceCart_Icon.click();
  //
  //   console.log("Prices Current Vs New: ");
  //   console.log(priceResults);
  //   console.log("Listing Info before submit: ");
  //   console.log(beforeSubmitListings);
  //
  //   HomePage.newPricesinCart.waitForVisible(HomePage.defaultWait);
  //   console.log(HomePage.newPricesinCart.value.length);
  //   for(var i = 0; i < HomePage.newPricesinCart.value.length; i++) //NewPriceInCart elements doubled for each row
  //   {
  //     console.log('$'+ priceResults[i].newPriceRes +'00');
  //     //figure out better way to assert new prices are shown on review pane.
  //   }
  //
  //   var afterEditListings = HomePage.getEventListingsInfo();
  // });

  // test('C_Edit Listing Price in Cart', () => {
  //   newEditPrice = '456'; //Set edited price
  //   HomePage.firstNewPriceInCart_Span.waitForVisible(3000);
  //   HomePage.firstNewPriceInCart_Span.click();
  //
  //   HomePage.pressKeys(newEditPrice);
  //   HomePage.pressEnter();
  //
  //   HomePage.firstNewPriceInCart_Span.waitForVisible(3000);
  //   assert.equal(HomePage.firstNewPriceInCart_Span.getText(), '$'+newEditPrice+'00');
  //   //browser.waitX(5);
  // });
  //
  // test('D_Reset Price in Cart', () => {
  //   HomePage.firstUndoPriceEditInCart_Span.waitForVisible(3000);
  //   HomePage.firstUndoPriceEditInCart_Span.click();
  //   assert.equal(HomePage.firstNewPriceInCart_Span.getText(), '$'+priceResults[0].newPriceRes+'00');
  //   expect()
  //   //browser.waitX(5);
  // });
  //
  // test('E_CheckAll Price in Cart', () => {
  //   expect(HomePage.submitCart_SelectorText).to.not.be.visible();
  //   expect(HomePage.rejectCart_SelectorText).to.not.be.visible();
  //
  //   HomePage.selectChangesetsAll_Checkbox.waitForVisible(3000);
  //   HomePage.selectChangesetsAll_Checkbox.click();
  //
  //   browser.waitX(2);
  //   expect(HomePage.submitCart_SelectorText).to.be.visible();
  //   expect(HomePage.submitCart_SelectorText).to.have.text('Submit (1)');
  //   expect(HomePage.rejectCart_SelectorText).to.be.visible();
  //   expect(HomePage.rejectCart_SelectorText).to.have.text('Reject (1)');
  //
  //   HomePage.selectChangesetsAll_Checkbox.waitForVisible(3000);
  //   HomePage.selectChangesetsAll_Checkbox.click();
  //
  //   browser.waitX(2);
  //   expect(HomePage.submitCart_SelectorText).to.not.be.visible();
  //   expect(HomePage.rejectCart_SelectorText).to.not.be.visible();
  //
  //   //browser.waitX(5);
  // });
  //
  // test('F_CheckZone Price in Cart', () => {
  //   expect(HomePage.submitCart_SelectorText).to.not.be.visible();
  //   expect(HomePage.rejectCart_SelectorText).to.not.be.visible();
  //
  //   HomePage.firstSelectZoneAll_Checkbox.waitForVisible(3000);
  //   HomePage.firstSelectZoneAll_Checkbox.click();
  //
  //   browser.waitX(2);
  //   expect(HomePage.submitCart_SelectorText).to.be.visible();
  //   expect(HomePage.submitCart_SelectorText).to.have.text('Submit (1)');
  //   expect(HomePage.rejectCart_SelectorText).to.be.visible();
  //   expect(HomePage.rejectCart_SelectorText).to.have.text('Reject (1)');
  //
  //   HomePage.firstSelectZoneAll_Checkbox.waitForVisible(3000);
  //   HomePage.firstSelectZoneAll_Checkbox.click();
  //
  //   browser.waitX(2);
  //   expect(HomePage.submitCart_SelectorText).to.not.be.visible();
  //   expect(HomePage.rejectCart_SelectorText).to.not.be.visible();
  //
  //   //browser.waitX(5);
  // });
  //
  // test('G_CheckSingle Price in Cart', () => {
  //   expect(HomePage.submitCart_SelectorText).to.not.be.visible();
  //   expect(HomePage.rejectCart_SelectorText).to.not.be.visible();
  //
  //   HomePage.firstSelectChangeSetInZone_Checkbox.waitForVisible(3000);
  //   HomePage.firstSelectChangeSetInZone_Checkbox.click();
  //
  //   browser.waitX(2);
  //   expect(HomePage.submitCart_SelectorText).to.be.visible();
  //   expect(HomePage.submitCart_SelectorText).to.have.text('Submit (1)');
  //   expect(HomePage.rejectCart_SelectorText).to.be.visible();
  //   expect(HomePage.rejectCart_SelectorText).to.have.text('Reject (1)');
  //
  //   HomePage.firstSelectChangeSetInZone_Checkbox.waitForVisible(3000);
  //   HomePage.firstSelectChangeSetInZone_Checkbox.click();
  //
  //   browser.waitX(2);
  //   expect(HomePage.submitCart_SelectorText).to.not.be.visible();
  //   expect(HomePage.rejectCart_SelectorText).to.not.be.visible();
  //
  //   //browser.waitX(5);
  // });
  //
  // test('H_Submit Price in Cart', () => {
  //   expect(HomePage.submitCart_SelectorText).to.not.be.visible();
  //   expect(HomePage.rejectCart_SelectorText).to.not.be.visible();
  //
  //   HomePage.firstSelectChangeSetInZone_Checkbox.waitForVisible(3000);
  //   HomePage.firstSelectChangeSetInZone_Checkbox.click();
  //
  //   HomePage.submitCart_Button.waitForVisible(3000);
  //   HomePage.submitCart_Button.click();
  //
  //   browser.waitX(5);
  //
  //   HomePage.firstListingEditPrice_Span.waitForVisible(3000);
  //   expect(HomePage.firstListingEditPrice_SelectorText).to.have.text('$'+priceResults.newPriceRes+'00');
  //   browser.waitX(5);
  // });
});

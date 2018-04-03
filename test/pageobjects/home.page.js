'use strict';
// home.page.js
var Page = require('./page');

const assert = require('assert');
var chai = require('chai')
  , expect = chai.expect
  , should = chai.should();

const userData = require('../data/user.data');
const LoginPage = require('../pageobjects/login.page');

var newPrice;
var currentPrice;
var priceChange;
var priceRowParam = 2;

var sectionValue;
var rowValue;
var quantityValue;
var costValue;
var priceValue;
var priceChangeValue;
var ROIValue;
var ageValue;

var param = 1;

var eventListings = {
  eventName: "",
  eventListing: {
    listingSection: "",
    listingRow: "",
    listingQuantity: "",
    listingCost: "",
    listingCurrent: "",
    listingNew: "",
    listingChange: ""
  }
};

var reviewPaneEvent = {
  eventName: "",
  eventListing: {
    listingSection: "",
    listingRow: "",
    listingQuantity: "",
    listingCost: "",
    listingCurrent: "",
    listingNew: "",
    listingChange: ""
  }
};


var HomePage = Object.create(Page, {
    /**
     * define elements
     */
    //Used as default for all wait for visible checks
    defaultWait: {get: function () { return 3000; }},

    listingSwatch_Container: { get: function () { return browser.element('//*[@id="mapPage"]/div[2]/div[3]/div[2]/ul/li[2]/div[1]/table/thead/tr/th[1]'); } },
    resellerList_Dropdown: {get: function () { return browser.element('.resellerMenu'); } },
    priceCart_Icon: {get: function () { return browser.element('.homePriceCart'); } },

    //Event info header area
    mapPageEvent_Div: {get: function () { return browser.element('.mapPageEvent'); } },
    nextEvent_Button: {get: function () { return this.mapPageEvent_Div.element('[ng-click="showNextEventInfo()"]'); } },
    prevEvent_Button: {get: function () { return this.mapPageEvent_Div.element('[ng-click="showPreviousEventInfo()"]'); } },
    eventHomeTitle_Span: {get: function () { return this.mapPageEvent_Div.element('.eventTitle'); } },
    eventHomeVenueTimeTitle_Span: {get: function () { return this.mapPageEvent_Div.element('.homeEventDetails'); } },
    eventHomeMonthDayTitle_Span: {get: function () { return this.mapPageEvent_Div.element('.eventMonthDay'); } },
    eventSelectionToggle_Li: {get: function () { return this.mapPageEvent_Div.element('.mapPageEventsSelectionToggle'); } },

    listingHasReseller_Row: {get: function () {return browser.elements('[iscurrentreseller="true"]'); } },
    listingNotReseller_Row: {get: function () {return browser.elements('[iscurrentreseller="false"]'); } },

    //Review pane:
    homePriceCartText_Span: {get: function () {return browser.element('.homePriceCartText'); }},
    navReviewPane_Div: {get: function () {return browser.element('.navReviewPane'); }},
    reviewPaneHeader_Div: {get: function () {return browser.element('.review-pane-header'); }},
    reviewPaneListingCount_Span: {get: function () {return browser.element('.listingCount'); }},
    reviewListingsTablePerEvent_Table: {get: function () {return browser.elements('.reviewListingsTable'); }},
    reviewPaneCarets_I: {get: function () {return browser.elements('[ng-show="!changeSet.showListings"]'); } },
    reviewPaneCaret1_I: {get: function () {return browser.element('/html/body/div[1]/div/div[3]/div/div/i[1]'); } },
    newPricesReviewPane_Span: {get: function () {return browser.elements('.newPrice'); } },

    eventsReviewPane_Container: {get: function () {return browser.elements('[ng-repeat="changeSet in filteredEvents = (changeSets | filter: reviewSearchFilter | orderBy: eventFilter)"]');} },
    eventsReviewPaneHeaders_Span: {get: function () {return this.eventsReviewPane_Container.elements('.//div/span'); } },

    reviewPaneListings_Table: {get: function () {return browser.elements('.listingsTable'); }},
    reviewPaneListings_Row: {get: function () {return this.reviewPaneListings_Table.elements('.//tbody/tr'); } },
    //Relative Paths ref
    // /html/body/div[1]/div/div[3]/div[1] - Event 1 Container
    // /html/body/div[1]/div/div[3]/div[1]/div[1] - Event 1 Header Container
    // /html/body/div[1]/div/div[3]/div[1]/div[1]/div - Event 1 Header Checkbox Container
    // /html/body/div[1]/div/div[3]/div[1]/div[1]/div/input - Event 1 Header Checkbox Input
    // /html/body/div[1]/div/div[3]/div[1]/div[1]/span - Event 1 Header Span (Event Date/Name/Qty text)

    // /html/body/div[1]/div/div[3]/div[1]/div[1]/span
    // /html/body/div[1]/div/div[3]/div[1]/div[1]/i[2] - Event 1 Header Caret (Collapse)
    // /html/body/div[1]/div/div[3]/div[1]/div/i[1] - Event 1 Header Caret (Expand)

    // /html/body/div[1]/div/div[3]/div[1]/div[2] - Event 1 Listings Container

    // /html/body/div[1]/div/div[3]/div[2] - Event 2 Container



    //Test Page Objects
    QcueReseller_Link: {get: function () { return browser.element('a*=Qcue'); }},
    PrimeSportReseller_Link: {get: function () { return browser.element('a*=PrimeSport'); }},
    testReseller_Link: {get: function () { return browser.element('a*=Test:Reseller'); }},
    firstListingEditPrice_Span: {get: function () { return browser.element('//*[@id="mapPage"]/div[2]/div[3]/div[2]/ul/li[2]/div[2]/table/tbody/tr['+ param +']/td[8]/div/span[1]'); }},

    firstListingEditPrice_SelectorText: {get: function () { return '//*[@id="mapPage"]/div[2]/div[3]/div[2]/ul/li[2]/div[2]/table/tbody/tr['+ param +']/td[8]/div/span[1]'; }},
    firstListingEditPrice_iLink: {get: function () { return browser.element('//*[@id="mapPage"]/div[2]/div[3]/div[2]/ul/li[2]/div[2]/table/tbody/tr['+ param +']/td[8]/div/span[3]/ul[1]/li[3]/i'); }},
    firstListingEditPrice_Input: {get: function () { return browser.element('//*[@id="mapPage"]/div[2]/div[3]/div[2]/ul/li[2]/div[2]/table/tbody/tr['+ param +']/td[8]/div/form/div/input'); }},

    firstNewPriceInCart_Span: {get: function () { return browser.element('/html/body/div[1]/div/div[3]/table/tbody/tr[2]/td/table/tbody/tr/td[6]/span[1]/span'); }},

    reviewPaneEvents_Container: {get: function () { return browser.element('.reviewPaneScrollHolder'); }},
    reviewPaneEvent_Header: {get: function () { return this.reviewPaneEvents_Container.elements('/div'); }},

    newPricesinCart: {get: function () { return browser.elements('[ng-if="!changeSet.updating"]'); }},

    firstNewPriceInCart_Input: {get: function () { return browser.element('/html/body/div[1]/div/div[3]/table/tbody/tr['+ param +']/td/table/tbody/tr/td[6]/span[1]'); }},
    firstUndoPriceEditInCart_Span: {get: function () { return browser.element('//*[@id="Layer_1"]'); }},

    selectChangesetsAll_Checkbox: {get: function () { return browser.element('.selectChangesetsAll'); }},
    firstSelectZoneAll_Checkbox: {get: function () { return browser.element('//*[@id="result0"]'); }},
    firstSelectChangeSetInZone_Checkbox: {get: function () { return browser.element('/html/body/div[1]/div/div[3]/table/tbody/tr[2]/td/table/tbody/tr/td[1]/div/span/input'); }},

    submitCart_SelectorText: {get: function () { return '/html/body/div[1]/div/div[5]/button[1]'; }},
    submitCart_Button: {get: function () { return browser.element('/html/body/div[1]/div/div[5]/button[1]'); }},
    rejectCart_SelectorText: {get: function () { return '/html/body/div[1]/div/div[5]/button[2]'; }},
    rejectCart_Button: {get: function () { return browser.element('/html/body/div[1]/div/div[5]/button[2]'); }},


    listingInOtherCart_Style: {get: function () { return browser.element('.homePageInOtherCart'); }},

    /**
     * define or overwrite page methods
     */
    open: { value: function() {
        Page.open.call(this, '/resale/ui/home');
    } },

    submit: { value: function() {
        this.form.submitForm();
    } },

    //Function to go to named reseller
    goToReseller: { value: function(resellerName) {
        browser.logger.info("Go to Test Reseller...");
        this.resellerList_Dropdown.waitForVisible(this.defaultWait);
        this.resellerList_Dropdown.click();

        if(resellerName === 'Qcue'){
          this.QcueReseller_Link.waitForVisible(this.defaultWait);
          this.QcueReseller_Link.click();
        }
        else if(resellerName === 'PrimeSport'){
          this.PrimeSportReseller_Link.waitForVisible(this.defaultWait);
          this.PrimeSportReseller_Link.click();
        }
        else if(resellerName === 'Arizona Diamondbacks'){
          browser.element('a*=Arizona Diamondbacks').waitForVisible(this.defaultWait);
          browser.element('a*=Arizona Diamondbacks').click();
        }
        else {
          this.testReseller_Link.waitForVisible(3000);
          this.testReseller_Link.click();
        }
    } },

    //Recursively skip empty events
    recursiveSkipEmptyEvent: { value: function() {
      if(!HomePage.listingHasReseller_Row.isExisting())
      {
          browser.logger.info('Skipping event with no listings...');
          //Go to next event
          HomePage.nextEvent_Button.waitForVisible(HomePage.defaultWait);
          HomePage.nextEvent_Button.click();

          //Run function again on next event
          this.recursiveSkipEmptyEvent();
      }
      return;
    } },

    //Recursively skip events with listings in another cart
    recursiveSkipOtherCartEvent: { value: function() {
      if(HomePage.listingInOtherCart_Style.isExisting())
      {
          browser.logger.info('Skipping event with listings changes in another cart...');
          //Go to next event
          HomePage.nextEvent_Button.waitForVisible(HomePage.defaultWait);
          HomePage.nextEvent_Button.click();

          //Run function again on next event
          this.recursiveSkipOtherCartEvent();
      }
      return;
    } },

    //Continue to skip events that aren't testable
    recursiveSkipUselessEvents: { value:  function() {
        if(HomePage.listingInOtherCart_Style.isExisting() || !HomePage.listingHasReseller_Row.isExisting()){
          this.recursiveSkipEmptyEvent();
          this.recursiveSkipOtherCartEvent();

          this.recursiveSkipUselessEvents();
        }
        return;
      }
    },

    //Get listing info for all active listings in current event
    getEventListingsInfo: { value: function() {
      browser.logger.info("Getting Event Listing info...");
        var allListings = [];
        function listingsObject() {
          this.listingSection =  sectionValue;
          this.listingRow =  rowValue;
          this.listingQuantity =  quantityValue;
          this.listingCost = costValue;
          this.listingPrice = priceValue;
          this.listingPriceChange = priceChangeValue;
          this.listingROI = ROIValue;
          this.listingAge = ageValue;
        };

        var listingsRowElements = this.listingHasReseller_Row;
        listingsRowElements.value.forEach((listing) => {
          sectionValue = listing.element('.//td[4]').getText();
          rowValue = listing.element('.//td[5]').getText();
          quantityValue = listing.element('.//td[6]').getText();
          costValue = listing.element('.//td[7]').getText();
          priceValue = listing.element('.//td[8]').getText();
          priceChangeValue = listing.element('.//td[9]').getText();
          ROIValue = listing.element('.//td[10]').getText();
          ageValue = listing.element('.//td[11]').getText();

          //console.log("Loop : " + sectionValue + ", " + rowValue + ", " + quantityValue + ", " + costValue + ", " + priceValue + ", " + priceChangeValue + ", " + ROIValue + ", " + ageValue);
          var currentListing = new listingsObject();
          currentListing = {
            listingSection: sectionValue,
            listingRow: rowValue,
            listingQuantity: quantityValue,
            listingCost: costValue,
            istingPrice: priceValue,
            listingPriceChange: priceChangeValue,
            listingROI: ROIValue,
            listingAge: ageValue
          };

          allListings.push(currentListing);
        });

        //console.log(allListings);

        return allListings;
    }},

    //Expand all events in review pane
    expandAllEventsReviewPane: { value: function(){
      browser.logger.info("Expanding all Events in Review Pane...");
      this.reviewPaneCarets_I.waitForVisible(this.defaultWait);
      for(var i = 0; i < this.reviewPaneCarets_I.value.length; i++)
      {
        browser.pause(2000);
        this.reviewPaneCarets_I.value[i].click();
      }
      console.log(this.reviewPaneCarets_I.value);
    }},

    //Get listing info for all rows in review pane
    getReviewListingsInfo: { value: function() {
      for(var int = 0; int < this.newPricesReviewPane_Span.value.length; int = int+2){
        browser.logger.info("New Listing Price Text: " + this.newPricesReviewPane_Span.value[int].getText());
      }
    }},

    //Function to edit price; Defaults to first listing and +5 to current price.
    editPrice: { value: function(priceChange = 5, listingRowNum = 1) {
      browser.logger.info("Editing listings prices for current event...");
        var priceChangesObj = {
          currentPriceRes: currentPrice,
          newPriceRes: newPrice
        };
        param = listingRowNum + 1;
        this.firstListingEditPrice_Span.waitForVisible(this.defaultWait);
        //Add option here later to choose which row to edit listing price for. Using listingRowNum

        currentPrice = HomePage.firstListingEditPrice_Span.getText();
        newPrice = currentPrice.slice(1, -2);
        newPrice = parseInt(newPrice, 10)
        newPrice = newPrice + priceChange;

        this.firstListingEditPrice_Span.waitForVisible(this.defaultWait);
        this.firstListingEditPrice_Span.moveToObject();

        this.firstListingEditPrice_iLink.waitForVisible(this.defaultWait);
        this.firstListingEditPrice_iLink.click();
        this.firstListingEditPrice_Input.setValue(newPrice);
        //browser.keys('\uE007');//This presses Enter on page to submit price change
        this.pressEnter();

        priceChangesObj.currentPriceRes = currentPrice;
        priceChangesObj.newPriceRes = newPrice;

        return priceChangesObj;
      }},

      //Find event with multiple listings on current resseller
      findEventMultipleListings: { value: function() {
        browser.logger.info("Finding Event with multiple listings...");

        //Go to next event before checking for event with multiple listings
        this.nextEvent_Button.waitForVisible(HomePage.defaultWait);
        this.nextEvent_Button.click();
        //Check number of listings on page
        var numListings = this.listingHasReseller_Row.value.length;
        //If number of listings < 2
        if(numListings < 2 || this.listingInOtherCart_Style.isExisting()){
          //Click next to go to next event and loop
          this.nextEvent_Button.waitForVisible(this.defaultWait);
          this.nextEvent_Button.click();

          this.findEventMultipleListings();
        }
      }},

      //Find event with valid listings on current resseller
      findEventValidListings: { value: function() {
        browser.logger.info("Finding Event with Valid listings...");

        //Go to next event before checking for event with valid listings
        this.nextEvent_Button.waitForVisible(this.defaultWait);
        this.nextEvent_Button.click();
        //Check number of listings on page
        var numListings = this.listingHasReseller_Row.value.length;
        //If number of listings < 2
        if(numListings < 1 || this.listingInOtherCart_Style.isExisting()){
          //Click next to go to next event and loop
          this.nextEvent_Button.waitForVisible(this.defaultWait);
          this.nextEvent_Button.click();

          this.findEventValidListings();
        }
      }},

      pressEnter: { value: function() {
          browser.keys('\uE007');
      } },

      pressKeys: { value: function(value) {
          for (var i = 0; i < value.length; i++) {
            browser.keys(value.charAt(i));
          }
      } },
});

module.exports = HomePage;

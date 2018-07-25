"use strict";
var Page = require("../page");

const assert = require("assert");
var chai = require("chai"),
  expect = chai.expect,
  should = chai.should();

const eventListDropdownPage = require('./eventList.page');
const EventListingsTablePage = require('../eventListingsTable/eventListingsTable.page')

var EventListActions = Object.create(Page, {
  assertEventsLoaded: {
    value: function() {
      if (!this.eachEventInDropdown_Li.value.length > 0 && !this.eachEventInDropdown_Li.waitForVisible(this.defaultWait) && !this.eachEventTitle_Span.waitForVisible(this.defaultWait)) {
        return false;
      }
      return true;
    }
  },
  //Find event with multiple listings on current resseller
  findEventMultipleListings: {
    value: function() {
      browser.logger.info("Finding Event with multiple listings...");

      //Go to next event before checking for event with multiple listings
      eventListDropdownPage.nextEvent_Button.waitForVisible(3000);
      eventListDropdownPage.nextEvent_Button.click();
      //Check number of listings on page
      var numListings = EventListingsTablePage.listingHasReseller_Row.value.length;
      //If number of listings < 2
      if (numListings < 2 || EventListingsTablePage.listingInOtherCart_Style.isExisting()) {
        //Click next to go to next event and loop
        eventListDropdownPage.nextEvent_Button.waitForVisible(this.defaultWait);
        eventListDropdownPage.nextEvent_Button.click();

        this.findEventMultipleListings();
      }
    }
  },
  //Find event with valid listings on current resseller
  findEventValidListings: {
    value: function() {
      browser.logger.info("Finding Event with Valid listings...");

      //Go to next event before checking for event with valid listings
      eventListDropdownPage.nextEvent_Button.waitForVisible(this.defaultWait);
      eventListDropdownPage.nextEvent_Button.click();
      //Check number of listings on page
      var numListings = EventListingsTablePage.listingHasReseller_Row.value.length;
      //If number of listings < 2
      if (numListings < 1 || EventListingsTablePage.listingInOtherCart_Style.isExisting()) {
        //Click next to go to next event and loop
        eventListDropdownPage.nextEvent_Button.waitForVisible(this.defaultWait);
        eventListDropdownPage.nextEvent_Button.click();

        this.findEventValidListings();
      }
    }
  }
});

module.exports = EventListActions;
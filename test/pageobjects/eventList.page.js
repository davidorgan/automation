"use strict";
// home.page.js
var Page = require("./page");

const assert = require("assert");
var chai = require("chai"),
  expect = chai.expect,
  should = chai.should();

const userData = require("../data/user.data");
const LoginPage = require("../pageobjects/login.page");

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

var EventListPage = Object.create(Page, {
  /**
   * define elements
   */
  //Used as default for all wait for visible checks
  defaultWait: {
    get: function() {
      return 3000;
    }
  },

  //Event info header area
  mapPageEvent_Div: {
    get: function() {
      return browser.element(".mapPageEvent");
    }
  },
  nextEvent_Button: {
    get: function() {
      return this.mapPageEvent_Div.element('[ng-click="showNextEventInfo()"]');
    }
  },
  prevEvent_Button: {
    get: function() {
      return this.mapPageEvent_Div.element(
        '[ng-click="showPreviousEventInfo()"]'
      );
    }
  },
  eventHomeTitle_Span: {
    get: function() {
      return this.mapPageEvent_Div.element(".eventTitle");
    }
  },
  eventHomeVenueTimeTitle_Span: {
    get: function() {
      return this.mapPageEvent_Div.element(".homeEventDetails");
    }
  },
  eventHomeMonthDayTitle_Span: {
    get: function() {
      return this.mapPageEvent_Div.element(".eventMonthDay");
    }
  },
  eventSelectionToggle_Li: {
    get: function() {
      return this.mapPageEvent_Div.element(".mapPageEventsSelectionToggle");
    }
  },
  eachEventInDropdown_Li: {
    get: function() {
      return browser.elements(".list-inline");
    }
  },
  eachEventTitle_Span: {
    get: function() {
      return browser.elements(".eventTitle");
    }
  },

  currentEvent_Container: {
    get: function() {
      return browser.element(".mapPageEvent");
    }
  },
  currentEvent_TitleArea_Span: {
    get: function() {
      return this.currentEvent_Container.element(".eventTitleArea");
    }
  },
  currentEventLeftArrow_Li: {
    get: function() {
      return this.currentEvent_Container.element(".fa-caret-left");
    }
  },
  currentEventRightArrow_Li: {
    get: function() {
      return this.currentEvent_Container.element(".fa-caret-right");
    }
  },

  eventDropdown_Container: {
    get: function() {
      return browser.element(".eventsSelectionDropDown");
    }
  },
  eachEventTitleArea_Span: {
    get: function() {
      return this.eventDropdown_Container.elements(".eventTitleArea");
    }
  },
  /**
   * define or overwrite page methods
   */
  open: {
    value: function() {
      Page.open.call(this, "/resale/ui/home");
    }
  },

  assertEventsLoaded: {
    value: function() {
      if (
        !this.eachEventInDropdown_Li.value.length > 0 &&
        !this.eachEventInDropdown_Li.waitForVisible(this.defaultWait) &&
        !this.eachEventTitle_Span.waitForVisible(this.defaultWait)
      ) {
        return false;
      }
      return true;
    }
  }
});

module.exports = EventListPage;

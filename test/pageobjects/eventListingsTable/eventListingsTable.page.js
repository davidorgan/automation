"use strict";
// home.page.js
var Page = require("../page");

const assert = require("assert");
var chai = require("chai"),
  expect = chai.expect,
  should = chai.should();

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

var EventListingsTablePage = Object.create(Page, {
  /**
   * define elements
   */

  //Listings Table

  //Listings Table Header
  listingsTableHeader_Tr: {
    get: function() {
      return browser.element(".homePageListingsHeader");
    }
  },
  // Elements inside listingsTableHeader_Tr //
      spinnyWaity_Span: {
        get: function() {
          return this.listingsTableHeader_Tr.element(
            ".spinner"
          );
        }
      },
      listingSwatch_Container: { 
        get: function() { 
          return this.listingsTableHeader_Tr.element(
            ".homePageListingHeaderSwatch"
          );
        }
      },

      //homePageListingHeaderShared
      listingsTableSharedHeader_Th: {
        get: function() {
          return this.listingsTableHeader_Tr.element(
            ".homePageListingHeaderShared"
          );
        }
      },
      listingsTableSectionHeader_Th: {
        get: function() {
          return this.listingsTableHeader_Tr.element(
            ".homePageListingHeaderSection"
          );
        }
      },
      //homePageListingHeaderRow
      listingsTableRowHeader_Th: {
        get: function() {
          return this.listingsTableHeader_Tr.element(".homePageListingHeaderRow");
        }
      },
      //homePageListingHeaderQuantity
      listingsTableQtyHeader_Th: {
        get: function() {
          return this.listingsTableHeader_Tr.element(
            ".homePageListingHeaderQuantity"
          );
        }
      },
      //homePageListingHeaderCost
      listingsTableCostHeader_Th: {
        get: function() {
          return this.listingsTableHeader_Tr.element(".homePageListingHeaderCost");
        }
      },
      //homePageListingHeaderPrice //price
      listingsTablePriceHeader_Th: {
        get: function() {
          return this.listingsTableHeader_Tr.element(".homePageListingHeaderPrice");
        }
      },
      //homePageListingHeaderChange
      listingsTablePriceChangeHeader_Th: {
        get: function() {
          return this.listingsTableHeader_Tr.element(
            ".homePageListingHeaderChange"
          );
        }
      },
      //homePageListingHeaderMargin //roi
      listingsTableROIHeader_Th: {
        get: function() {
          return this.listingsTableHeader_Tr.element(
            ".homePageListingHeaderMargin"
          );
        }
      },
      //homePageListingHeaderStale //age
      listingsTableAgeHeader_Th: {
        get: function() {
          return this.listingsTableHeader_Tr.element(".homePageListingHeaderStale");
        }
      },
  // ENDOF --> Elements inside listingsTableHeader_Tr //

  firstListingEditPrice_Span: {
    get: function() {
      return browser.element(
        '//*[@id="mapPage"]/div[2]/div[3]/div[2]/ul/li[2]/div[2]/table/tbody/tr[' +
          param +
          "]/td[8]/div/span[1]"
      );
    }
  },

  firstListingEditPrice_SelectorText: {
    get: function() {
      return (
        '//*[@id="mapPage"]/div[2]/div[3]/div[2]/ul/li[2]/div[2]/table/tbody/tr[' +
        param +
        "]/td[8]/div/span[1]"
      );
    }
  },
  firstListingEditPrice_iLink: {
    get: function() {
      return browser.element(
        '//*[@id="mapPage"]/div[2]/div[3]/div[2]/ul/li[2]/div[2]/table/tbody/tr[' +
          param +
          "]/td[8]/div/span[3]/ul[1]/li[3]/i"
      );
    }
  },
  firstListingEditPrice_Input: {
    get: function() {
      return browser.element(
        '//*[@id="mapPage"]/div[2]/div[3]/div[2]/ul/li[2]/div[2]/table/tbody/tr[' +
          param +
          "]/td[8]/div/form/div/input"
      );
    }
  },

  listingInOtherCart_Style: {
    get: function() {
      return browser.element(".homePageInOtherCart");
    }
  }
});

module.exports = EventListingsTablePage;

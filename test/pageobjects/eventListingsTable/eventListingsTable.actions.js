"use strict";
// home.page.js
var Page = require("../page");
const HomePage = require('../home.page');
const ListingsTablePage = require('./eventListingsTable.page');

const assert = require("assert");
var chai = require("chai"),
  expect = chai.expect,
  should = chai.should();

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

var EventListingsTableActions = Object.create(Page, {

  //Get listing info for all active listings in current event
  getEventListingsInfo: {
    value: function() {
      browser.logger.info("Getting Event Listing info...");
      var allListings = [];
      function listingsObject() {
        this.listingSection = sectionValue;
        this.listingRow = rowValue;
        this.listingQuantity = quantityValue;
        this.listingCost = costValue;
        this.listingPrice = priceValue;
        this.listingPriceChange = priceChangeValue;
        this.listingROI = ROIValue;
        this.listingAge = ageValue;
      }

      var listingsRowElements = HomePage.listingHasReseller_Row;
      listingsRowElements.value.forEach(listing => {
        sectionValue = listing.element(".//td[4]").getText();
        rowValue = listing.element(".//td[5]").getText();
        quantityValue = listing.element(".//td[6]").getText();
        costValue = listing.element(".//td[7]").getText();
        priceValue = listing.element(".//td[8]").getText();
        priceChangeValue = listing.element(".//td[9]").getText();
        ROIValue = listing.element(".//td[10]").getText();
        ageValue = listing.element(".//td[11]").getText();

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
    }
  },

  //Click to sort by row and return sorted values in array -- send path as param for each column header
  getRowValues: {
    value: function(path) {
      var currentListingRows = [];
      var listingsRowElements = HomePage.listingHasReseller_Row;
      listingsRowElements.value.forEach(listing => {
        var string = listing.element(path).getText();
        //Clean up values for easier sorting/comparing
        if (string.charAt(0) == "$") {
          string = string.substring(1);
        }
        if (string.charAt(string.length - 1) == "%") {
          string = string.slice(0, -1);
        }
        currentListingRows.push(string);
      });
      return currentListingRows;
    }
  },

  //Function to edit price; Defaults to first listing and +5 to current price.
  editPrice: {
    value: function(priceChange = 5, listingRowNum = 1) {
      browser.logger.info("Editing listings prices for current event...");
      var priceChangesObj = {
        currentPriceRes: currentPrice,
        newPriceRes: newPrice
      };
      param = listingRowNum + 1;
      this.firstListingEditPrice_Span.waitForVisible(HomePage.defaultWait);
      //Add option here later to choose which row to edit listing price for. Using listingRowNum

      currentPrice = HomePage.firstListingEditPrice_Span.getText();
      newPrice = currentPrice.slice(1, -2);
      newPrice = parseInt(newPrice, 10);
      newPrice = newPrice + priceChange;

      this.firstListingEditPrice_Span.waitForVisible(HomePage.defaultWait);
      this.firstListingEditPrice_Span.moveToObject();

      this.firstListingEditPrice_iLink.waitForVisible(HomePage.defaultWait);
      this.firstListingEditPrice_iLink.click();
      this.firstListingEditPrice_Input.setValue(newPrice);
      //browser.keys('\uE007');//This presses Enter on page to submit price change
      HomePage.pressEnter();

      priceChangesObj.currentPriceRes = currentPrice;
      priceChangesObj.newPriceRes = newPrice;

      return priceChangesObj;
    }
  },

});

module.exports = EventListingsTableActions;

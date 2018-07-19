"use strict";
var Page = require("../page");

const assert = require("assert");
var chai = require("chai"),
  expect = chai.expect,
  should = chai.should();

var ReviewPanePage = Object.create(Page, {
  /**
   * define elements
   **/
  homePriceCartText_Span: { get: function() { return browser.element(".homePriceCartText"); } },
  navReviewPane_Div: { get: function() { return browser.element(".navReviewPane"); } },
  reviewPaneHeader_Div: { get: function() { return browser.element(".review-pane-header"); } },
  reviewPaneListingCount_Span: { get: function() { return browser.element(".listingCount"); } },
  reviewListingsTablePerEvent_Table: { get: function() { return browser.elements(".reviewListingsTable"); } },
  reviewPaneCarets_I: { get: function() { return browser.elements('[ng-show="!changeSet.showListings"]'); } },
  reviewPaneCaret1_I: { get: function() { return browser.element("/html/body/div[1]/div/div[3]/div/div/i[1]"); } },
  newPricesReviewPane_Span: { get: function() { return browser.elements(".newPrice"); } },

  eventsReviewPane_Container: { get: function() { return browser.elements( '[ng-repeat="changeSet in filteredEvents = (changeSets | filter: reviewSearchFilter | orderBy: eventFilter)"]' ); } },
  eventsReviewPaneHeaders_Span: { get: function() { return this.eventsReviewPane_Container.elements(".//div/span"); } },

  reviewPaneListings_Table: { get: function() { return browser.elements(".listingsTable"); } },
  reviewPaneListings_Row: { get: function() { return this.reviewPaneListings_Table.elements(".//tbody/tr"); } },

  reviewPaneEvents_Container: { get: function() { return browser.element(".reviewPaneScrollHolder"); } },
  reviewPaneEvent_Header: { get: function() { return this.reviewPaneEvents_Container.elements("/div"); } },

  newPricesinCart: { get: function() { return browser.elements('[ng-if="!changeSet.updating"]'); } },

  firstNewPriceInCart_Input: { get: function() { return browser.element( "/html/body/div[1]/div/div[3]/table/tbody/tr[" + param + "]/td/table/tbody/tr/td[6]/span[1]" ); } },
  firstUndoPriceEditInCart_Span: { get: function() { return browser.element('//*[@id="Layer_1"]'); } },

  selectChangesetsAll_Checkbox: { get: function() { return browser.element(".selectChangesetsAll"); } },
  firstSelectZoneAll_Checkbox: { get: function() { return browser.element('//*[@id="result0"]'); } },
  firstSelectChangeSetInZone_Checkbox: { get: function() { return browser.element( "/html/body/div[1]/div/div[3]/table/tbody/tr[2]/td/table/tbody/tr/td[1]/div/span/input" ); } },

  submitCart_SelectorText: { get: function() { return "/html/body/div[1]/div/div[5]/button[1]"; } },
  submitCart_Button: { get: function() { return browser.element("/html/body/div[1]/div/div[5]/button[1]"); } },
  rejectCart_SelectorText: { get: function() { return "/html/body/div[1]/div/div[5]/button[2]"; } },
  rejectCart_Button: { get: function() { return browser.element("/html/body/div[1]/div/div[5]/button[2]"); } },

  listingInOtherCart_Style: { get: function() { return browser.element(".homePageInOtherCart"); } }
});

module.exports = ReviewPanePage;

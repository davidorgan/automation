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

  //Cart
  priceChangeCart_Frame: { get: function() { return browser.element('.homePriceCartFrame'); } },
    priceChangeCart_Span: { get: function() { return this.priceChangeCart_Frame.element('.homePriceCart'); } },
      priceChangeCartIcon_Span: { get: function() { return this.priceChangeCart_Span.element('.homePriceCartIcon'); } },
        priceChangeCartIconImage_I: { get: function() { return this.priceChangeCartIcon_Span.element('.fa-shopping-cart'); } },
        priceChangeCartIconText_Span: { get: function() { return this.priceChangeCartIcon_Span.element('.homePriceCartText'); } },


  //Review Pane Container
  reviewPane_Container: { get: function() { return browser.element('.navReviewPane'); } },
    reviewPaneHeader_Container: { get: function() { return this.reviewPane_Container.element('.review-pane-header'); } },
      reviewPaneHeaderLeft_Container: { get: function() { return this.reviewPaneHeader_Container.element('#headerLeft'); } },
        reviewPaneHeaderLeftText_Span: { get: function() { return this.reviewPaneHeaderLeft_Container.element('[translate="review.header"]'); } },
        reviewPaneHeaderLeftListingCount_Span: { get: function() { return this.reviewPaneHeaderLeft_Container.element('.listingCount'); } },
      reviewPaneHeaderClose_Container: { get: function() { return this.reviewPaneHeader_Container.element('#closeReviewPane'); } }, 

    //Review Pane Search Bar
      /* Unique IDs to be added */
    //Review Pane View/Sort by Header
      /* Unique IDs to be added */

    //Review Pane Sort Container 
    reviewPaneSort_Container: { get: function() { return this.reviewPane_Container.element('.reviewPaneSortContainer'); } },
      reviewPaneSortSelectAll_Checkbox: { get: function() { return this.reviewPaneSort_Container.element('.selectChangesetsAll'); } },
      reviewPaneSortZone_Container: { get: function() { return this.reviewPaneSort_Container.element('#reviewPaneZoneSort'); } },
      reviewPaneSortQty_Container: { get: function() { return this.reviewPaneSort_Container.element('#reviewPaneQtySort'); } },
      reviewPaneSortCost_Container: { get: function() { return this.reviewPaneSort_Container.element('#reviewPaneCostSort'); } },
      reviewPaneSortCurrent_Container: { get: function() { return this.reviewPaneSort_Container.element('#reviewPaneOldPriceSort'); } },
      reviewPaneSortNew_Container: { get: function() { return this.reviewPaneSort_Container.element('#reviewPaneNewPriceSort'); } },
      reviewPaneSortChange_Container: { get: function() { return this.reviewPaneSort_Container.element('#reviewPaneRoiSort'); } },

    //Review Pane Listing Changesets
    reviewPaneListings_Container: { get: function() { return this.reviewPane_Container.element('.reviewPaneScrollHolder'); } },
      reviewPaneListingsPerEvent_Container: { get: function() { return this.reviewPaneListings_Container.elements('.sortItems'); } },
        reviewPaneListingsCurrentEventHeader_Container: { get: function() { return this.reviewPaneListingsPerEvent_Container.element('.currentEventBlue'); } },
          reviewPaneListingsCurrentEventHeaderText_Span: { get: function() { return this.reviewPaneListingsCurrentEventHeader_Container.element('//span'); } },

        //All Listing containers for each event
        reviewPaneEventListings_Container: { get: function() { return this.reviewPaneListingsPerEvent_Container.elements('[ng-if="changeSet.showListings"]'); } },
          reviewPaneEventListingsRows_Tr: { get: function() { return this.reviewPaneEventListings_Container.elements('//tr'); } },
            reviewPaneEventListingsRowCheckbox_Checkbox: { get: function() { return this.reviewPaneEventListingsRows_Tr.element('[type="checkbox"]'); } },
  
});

module.exports = ReviewPanePage;

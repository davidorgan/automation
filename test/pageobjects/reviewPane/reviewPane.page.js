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

    //Review Pane View/Sort by Header

    //Review Pane Sort Container 
    reviewPaneSort_Container: { get: function() { return this.reviewPane_Container.element('.reviewPaneSortContainer-pane-header'); } },
      reviewPaneSortSelectAll_Checkbox: { get: function() { return this.reviewPaneSort_Container.element('.selectChangesetsAll'); } },
      reviewPaneSortZone_Container: { get: function() { return this.reviewPaneSort_Container.element('.selectChangesetsAll'); } },
});

module.exports = ReviewPanePage;

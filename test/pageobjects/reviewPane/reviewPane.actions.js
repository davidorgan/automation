"use strict";
var Page = require("../page");
const ReviewPanePage = require("./reviewPane.page");

const assert = require("assert");
var chai = require("chai"),
  expect = chai.expect,
  should = chai.should();

var ReviewPaneActions = Object.create(Page, {
  /**
   * define elements
   **/
  //Expand all events in review pane
  expandAllEventsReviewPane: {
    value: function() {
      browser.logger.info("Expanding all Events in Review Pane...");
      ReviewPanePage.reviewPaneCarets_I.waitForVisible(HomePage.defaultWait);
      for (var i = 0; i < ReviewPanePage.reviewPaneCarets_I.value.length; i++) {
        browser.pause(2000);
        ReviewPanePage.reviewPaneCarets_I.value[i].click();
      }
      console.log(ReviewPanePage.reviewPaneCarets_I.value);
    }
  },

  //Get listing info for all rows in review pane
  getReviewListingsInfo: {
    value: function() {
      for (
        var int = 0;
        int < ReviewPanePage.newPricesReviewPane_Span.value.length;
        int = int + 2
      ) {
        browser.logger.info(
          "New Listing Price Text: " +
            ReviewPanePage.newPricesReviewPane_Span.value[int].getText()
        );
      }
    }
  }
});

module.exports = ReviewPaneActions;

"use strict";
var Page = require("../page");

const assert = require("assert");
var chai = require("chai"),
  expect = chai.expect,
  should = chai.should();

var EventListActions = Object.create(Page, {
  assertEventsLoaded: {
    value: function() {
      if (!this.eachEventInDropdown_Li.value.length > 0 && !this.eachEventInDropdown_Li.waitForVisible(this.defaultWait) && !this.eachEventTitle_Span.waitForVisible(this.defaultWait)) {
        return false;
      }
      return true;
    }
  }
});

module.exports = EventListActions;
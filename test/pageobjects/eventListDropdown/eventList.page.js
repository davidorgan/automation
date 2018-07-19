"use strict";
var Page = require("../page");

const assert = require("assert");
var chai = require("chai"),
  expect = chai.expect,
  should = chai.should();

var EventListPage = Object.create(Page, {
  /**
   * define elements
   */
  //Event info header area
  mapPageEvent_Div: { get: function() { return browser.element(".mapPageEvent"); } },
  nextEvent_Button: { get: function() { return this.mapPageEvent_Div.element('[ng-click="showNextEventInfo()"]'); } },
  prevEvent_Button: { get: function() { return this.mapPageEvent_Div.element( '[ng-click="showPreviousEventInfo()"]' ); } },
  eventHomeTitle_Span: { get: function() { return this.mapPageEvent_Div.element(".eventTitle"); } },
  eventHomeVenueTimeTitle_Span: { get: function() { return this.mapPageEvent_Div.element(".homeEventDetails"); } },
  eventHomeMonthDayTitle_Span: { get: function() { return this.mapPageEvent_Div.element(".eventMonthDay"); } },
  eventSelectionToggle_Li: { get: function() { return this.mapPageEvent_Div.element(".mapPageEventsSelectionToggle"); } },
  eachEventInDropdown_Li: { get: function() { return browser.elements(".list-inline"); } },
  eachEventTitle_Span: { get: function() { return browser.elements(".eventTitle"); } },

  currentEvent_Container: { get: function() { return browser.element(".mapPageEvent"); } },
  currentEvent_TitleArea_Span: { get: function() { return this.currentEvent_Container.element(".eventTitleArea"); } },
  currentEventLeftArrow_Li: { get: function() { return this.currentEvent_Container.element(".fa-caret-left"); } },
  currentEventRightArrow_Li: { get: function() { return this.currentEvent_Container.element(".fa-caret-right"); } },

  eventDropdown_Container: { get: function() { return browser.element(".eventsSelectionDropDown"); } },
  eachEventTitleArea_Span: { get: function() { return this.eventDropdown_Container.elements(".eventTitleArea"); } }
});

module.exports = EventListPage;

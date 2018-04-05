// login.page.js
var Page = require("./page");

const assert = require("assert");
var chai = require("chai"),
  expect = chai.expect,
  should = chai.should();

const HomePage = require("../pageobjects/home.page");
const userData = require("../data/user.data");

var AdminPage = Object.create(Page, {
  /**
   * define elements
   */
  apiTitle_Span: {
    get: function() {
      return browser.element('[translate="api.api"]');
    }
  },
  dataFilesTitle_Span: {
    get: function() {
      return browser.element('[translate="data.dataFiles"]');
    }
  },
  //Deprecated: eventTypesTitle_Span: { get: function () { return browser.element('[translate="eventTypes.eventTypes"]'); } },
  globalEventsQuickFilterTitle_Span: {
    get: function() {
      return browser.element('[translate="globalEvents.quickFilter"]');
    }
  },
  jobsTitle_Span: {
    get: function() {
      return browser.element('[translate="venues.venues"]');
    }
  },
  metricsTitle_Span: {
    get: function() {
      return browser.element('[translate="metrics.type"]');
    }
  },
  pricingOptionsTitle_Span: {
    get: function() {
      return browser.element('[translate="options.pricing"]');
    }
  },
  performersTitle_Span: {
    get: function() {
      return browser.element('[translate="performers.performers"]');
    }
  },
  permissionsTitle_Span: {
    get: function() {
      return browser.element('[translate="permissions.permissions"]');
    }
  },
  posTitle_Span: {
    get: function() {
      return browser.element('[translate="pos.title"]');
    }
  },
  recentChangesTitle_Span: {
    get: function() {
      return browser.element("/html/body/div[3]/div/div/h3");
    }
  },
  organizationsTitle_Span: {
    get: function() {
      return browser.element('[translate="resellers.screen.RESELLERS"]');
    }
  },
  symmetryTitle_Span: {
    get: function() {
      return browser.element('[translate="symmetry.title"]');
    }
  },
  tagsTitle_Span: {
    get: function() {
      return browser.element('[translate="tags.tagTypes"]');
    }
  },
  venueConfigurationsTitle_Span: {
    get: function() {
      return browser.element(
        '[translate="venueConfigurations.venueConfigurations"]'
      );
    }
  },
  venueMapsTitle_Span: {
    get: function() {
      return browser.element('[translate="venueMaps.tags"]');
    }
  },
  venuesTitle_Span: {
    get: function() {
      return browser.element('[translate="venues.venues"]');
    }
  },

  /**
   * define or overwrite page methods
   */
  open: {
    value: function(subpage) {
      Page.open.call(this, "/resale/ui/admin/" + subpage);
    }
  },

  submit: {
    value: function() {
      this.form.submitForm();
    }
  }
});

module.exports = AdminPage;

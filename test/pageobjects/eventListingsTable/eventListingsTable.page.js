"use strict";
// eventListingsTable.page.js
var Page = require("../page");

var EventListingsTablePage = Object.create(Page, {
  /**
   * define elements
   */
  //Listings Table
  //Listings Table Header
  listingsTableHeader_Tr: { get: function() { return browser.element(".homePageListingsHeader"); }},
      // Elements inside listingsTableHeader_Tr //
      spinnyWaity_Span: { get: function() { return this.listingsTableHeader_Tr.element(".spinner");}},
      listingSwatch_Container: { get: function() { return this.listingsTableHeader_Tr.element(".homePageListingHeaderSwatch");}},
      listingsTableHeaderFilter_Span: { get: function() { return browser.element(".filter");}},
      listingsTableCheckboxHeader_Th: { get: function() { return this.listingsTableHeader_Tr.element(".homePageListingHeaderCheckbox");}},
      listingsTableSharedHeader_Th: { get: function() { return this.listingsTableHeader_Tr.element(".homePageListingHeaderShared");}},
      listingsTableSectionHeader_Th: { get: function() { return this.listingsTableHeader_Tr.element(".homePageListingHeaderSection");}},
      listingsTableRowHeader_Th: { get: function() { return this.listingsTableHeader_Tr.element(".homePageListingHeaderRow");}},
      listingsTableQtyHeader_Th: { get: function() { return this.listingsTableHeader_Tr.element(".homePageListingHeaderQuantity");}},
      listingsTableCostHeader_Th: { get: function() { return this.listingsTableHeader_Tr.element(".homePageListingHeaderCost");}},
      listingsTablePriceHeader_Th: { get: function() { return this.listingsTableHeader_Tr.element(".homePageListingHeaderPrice");}},
      listingsTablePriceChangeHeader_Th: { get: function() { return this.listingsTableHeader_Tr.element(".homePageListingHeaderChange");}},
      listingsTableROIHeader_Th: { get: function() { return this.listingsTableHeader_Tr.element(".homePageListingHeaderMargin");}},
      listingsTableAgeHeader_Th: { get: function() { return this.listingsTableHeader_Tr.element(".homePageListingHeaderStale");}},
      // ENDOF --> Elements inside listingsTableHeader_Tr //

  //Angular dynamic content area - used as root context menu
  angularContextMenu_Div: { get: function() { return browser.element(".angular-bootstrap-contextmenu"); }},
      // Elements inside angularContextMenu_Div //
      bulkUpdateDropdownMenu_Ul: { get: function() { return this.listingsTableHeader_Tr.element(".dropdown-menu");}},
        // Elements inside bulkUpdateDropdownMenu_Ul //
        bulkPriceChange_Link: { get: function() { return this.bulkUpdateDropdownMenu_Ul.element("a=Bulk Price Change"); }},
        bulkShare_Link: { get: function() { return this.bulkUpdateDropdownMenu_Ul.element("a=Share"); }},
        bulkUnshare_Link: { get: function() { return this.bulkUpdateDropdownMenu_Ul.element("a=Unshare"); }},
        // ENDOF --> Elements inside bulkUpdateDropdownMenu_Ul //
      // ENDOF --> Elements inside angularContextMenu_Div //

  //Listings Table:
  listingsTable_Div: { get: function() { return browser.element(".homePageListingsList");}},
    // Elements inside listingsTable_Div //
    listingsTableCheckboxCol_Span: { get: function() { return this.listingsTable_Div.elements('.listingCheckbox');}},
    listingsTableSharedCol_Span: { get: function() { return this.listingsTable_Div.elements('[ng-if="listing.shared"]');}},
    listingsTableUnSharedCol_Span: { get: function() { return this.listingsTable_Div.elements('[ng-if="!listing.shared"]');}},
    listingHasReseller_Row: { get: function() { return this.listingsTable_Div.elements('[iscurrentreseller="true"]');}},
    listingNotReseller_Row: { get: function() { return this.listingsTable_Div.elements('[iscurrentreseller="false"]');}}, 
    // ENDOF --> Elements inside listingsTable_Div //

  firstListingEditPrice_Span: { get: function() { return browser.element( '//*[@id="mapPage"]/div[2]/div[3]/div[2]/ul/li[2]/div[2]/table/tbody/tr[' + param + "]/td[8]/div/span[1]");}},

  firstListingEditPrice_SelectorText: { get: function() { return ('//*[@id="mapPage"]/div[2]/div[3]/div[2]/ul/li[2]/div[2]/table/tbody/tr[' + param + "]/td[8]/div/span[1]");}},
  firstListingEditPrice_iLink: { get: function() { return browser.element( '//*[@id="mapPage"]/div[2]/div[3]/div[2]/ul/li[2]/div[2]/table/tbody/tr[' + param + "]/td[8]/div/span[3]/ul[1]/li[3]/i" ); } },
  firstListingEditPrice_Input: { get: function() { return browser.element( '//*[@id="mapPage"]/div[2]/div[3]/div[2]/ul/li[2]/div[2]/table/tbody/tr[' + param + "]/td[8]/div/form/div/input" ); } },

  listingInOtherCart_Style: { get: function() { return browser.element(".homePageInOtherCart"); } } 

});

module.exports = EventListingsTablePage;

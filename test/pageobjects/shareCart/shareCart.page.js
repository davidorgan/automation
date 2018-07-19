"use strict";
// shareCart.page.js
var Page = require("../page");

var ShareCartPage = Object.create(Page, {
  /**
   * define elements
   */
  //Share cart Icon
  shareCart_Icon: { get: function() { return browser.element(".homeShareCart"); }},

  //Share Cart Modal
  shareCartModal_Div: { get: function() { return browser.element(".modal-content"); }},
    //Share Cart Header
    shareCartModalHeader_Div: { get: function() { return this.shareCartModal_Div.element(".modal-header"); }},
        //Shart Cart Title
        shareCartHeaderTitle_Header: { get: function() { return this.shareCartModalHeader_Div.element(".modal-title"); }},
    //Share Cart Body
    shareCartModalBody_Div: { get: function() { return this.shareCartModal_Div.element(".modal-body"); }},
        //Share Cart 'Select All' checkbox
            shareCartSelectAll_Checkbox: { get: function() { return this.shareCartModalBody_Div.element("//ui-grid-selection-row-header-buttons"); }},
        //Share Cart All Checkboxes
            shareCartSelectItems_Checkboxes: { get: function() { return this.shareCartModalBody_Div.elements(""); }},
        //All Listings info
            //Listing 'New Status'

    //Share Cart Footer
    shareCartModalFooter_Div: { get: function() { return this.shareCartModal_Div.element(".modal-footer"); }},
        //Submit All Listyings button

        //Cancel all Updates button

        // Remoxe X listings button

});

module.exports = ShareCartPage;

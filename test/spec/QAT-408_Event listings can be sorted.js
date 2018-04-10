/*jslint node: true */
"use strict";
const assert = require("assert");
var chai = require("chai");
var chaiWebdriver = require("chai-webdriverio").default;
chai.use(chaiWebdriver(browser));
var chai = require("chai"),
  expect = chai.expect,
  should = chai.should();
chai.use(require("chai-sorted"));
const LoginPage = require("../pageobjects/login.page");
const HomePage = require("../pageobjects/home.page");
const EventListingsTable = require('../pageobjects/eventListingsTable') 
const userData = require("../data/user.data");

var testSuiteName;
var extendedWait = 5000;

var secPath = ".//td[4]";
var rowPath = ".//td[5]";
var qtyPath = ".//td[6]";
var costPath = ".//td[7]";
var pricePath = ".//td[8]";
var changePath = ".//td[9]";
var roiPath = ".//td[10]";
var agePath = ".//td[11]";

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

suite((testSuiteName = "QAT-408_Event listings can be sorted"), () => {
  test("QAT-408_Event listings can be sorted", () => {
    // -------------------------------- //
    // *** Step 1 - Login to Resale *** //
    // -------------------------------- //

    browser.logger.info("QAT-408_Event listings can be sorted");
    LoginPage.login(); //Goes to base url and logs in to resale
    browser.logger.info("Step 1 - Login to Resale: PASSED");

    // ------------------------------------------------------- //
    // *** Step 2 - Click Section above event listings  //
    // (Once for ascending order, twice for descending) to Sort table by Section. *** //
    // EXPECTED RESULT::------------------------------------------------- //
    // First click of Section displays listings in ascending order based on value in Section column.
    // Second click displays listing descending order. //
    // ------------------------------------------------------------------ //
    browser.logger.info("Click Sec to Sort by section...");
    HomePage.goToReseller("PrimeSport"); //Function to go to named reseller

    HomePage.findEventValidListings();
    //Wait until listings load
    EventListingsTable.listingHasReseller_Row.waitForVisible(extendedWait);
    EventListingsTable.listingSwatch_Container.waitForVisible(extendedWait);
    EventListingsTable.listingSwatch_Container.click(); //Click to put reseller listings at top

    //Check expected table headers are present to sort by
    expect(EventListingsTable.listingsTableSectionHeader_Th.getText()).to.eql("Sec");
    expect(EventListingsTable.listingsTableRowHeader_Th.getText()).to.eql("Row");
    expect(EventListingsTable.listingsTableQtyHeader_Th.getText()).to.eql("Qty");
    expect(EventListingsTable.listingsTableCostHeader_Th.getText()).to.eql("Cost");
    expect(EventListingsTable.listingsTablePriceHeader_Th.getText()).to.eql("Price");
    expect(EventListingsTable.listingsTablePriceChangeHeader_Th.getText()).to.eql("Change");
    expect(EventListingsTable.listingsTableROIHeader_Th.getText()).to.eql("ROI");
    expect(EventListingsTable.listingsTableAgeHeader_Th.getText()).to.eql("Age");

    //Click Sec to sort by sections in ascending order
    HomePage.listingsTableSectionHeader_Th.click();
    var currentListingSections = HomePage.getRowValues(secPath);
    expect(currentListingSections).to.be.sorted();   

    //Click again to sort by descending order
    HomePage.listingsTableSectionHeader_Th.click();
    var currentListingSections = HomePage.getRowValues(secPath);
    expect(currentListingSections).to.be.sorted({descending: true});

    browser.logger.info("Click Sec to Sort by section: PASSED");

    // ----------------------------------------------- //
    // *** Step 3 - Click Row above event listings //
    // (Once for ascending order, twice for descending) to Sort table by row. *** //
    // EXPECTED RESULT::--------------------------------------------------------------------- //
    // First click of Row displays listings in ascending order based on value in Row column.
    // Second click displays listing descending order. //
    // ----------------------------------------------------------------------------------- //
    browser.logger.info("Click Row to Sort by row...");

    var currentListingRows = HomePage.getRowValues(rowPath);

    //Sort existing values to consider string length (asc)
    currentListingRows.sort(function(a, b) {
      return a.length - b.length || a.localeCompare(b)
    });

    //Click Sec to sort by sections in ascending order
    HomePage.listingsTableRowHeader_Th.click();
    var sortAscListingRows = HomePage.getRowValues(rowPath);
    expect(sortAscListingRows).to.be.eql(currentListingRows);

    //Sort existing values to consider string length (desc)
    var newCurrentRows = sortAscListingRows.sort(function(a, b) {
      return b.length - a.length || b.localeCompare(a)
    });

    //Click again to sort by descending order
    HomePage.listingsTableRowHeader_Th.click();
    var sortDescListingRows = HomePage.getRowValues(rowPath);
    expect(sortDescListingRows).to.be.eql(newCurrentRows);

    browser.logger.info("Click Row to Sort by row: PASSED");

   // ----------------------------------------------- //
    // *** Step 4 - Click Qty above event listings //
    // (Once for ascending order, twice for descending) to Sort table by quantity. *** //
    // EXPECTED RESULT::--------------------------------------------------------------------- //
    // First click of Qty displays listings in ascending order based on value in Qty column.
    // Second click displays listing descending order. //
    // ----------------------------------------------------------------------------------- //
    browser.logger.info("Click Qty to Sort by quantity......");

    //Click Qty to sort by quantity in ascending order
    HomePage.listingsTableQtyHeader_Th.click();
    var currentListingSections = HomePage.getRowValues(qtyPath);
    expect(currentListingSections).to.be.sorted();

    //Click again to sort by descending order
    HomePage.listingsTableQtyHeader_Th.click();
    var currentListingSections = HomePage.getRowValues(qtyPath);
    expect(currentListingSections).to.be.sorted({descending: true});

    browser.logger.info("Click Qty to Sort by quantity: PASSED");

    // ----------------------------------------------------------------------------------------------- //
    // *** Step 6 - Click arrow to right of Event list and repeat until reach last event in list.t *** //
    // EXPECTED RESULT::------------------------------------------------------------ //
    // Each click of arrows displays next event in list until last event is reached. //
    // Right arrow no longer displays at this point. ------------------------------- //
    // ----------------------------------------------------------------------------- //
    browser.logger.info("Click Cost to Sort by cost......");

    //Click Qty to sort by quantity in ascending order
    HomePage.listingsTableCostHeader_Th.click();
    var currentListingSections = HomePage.getRowValues(costPath);
    expect(currentListingSections).to.be.sorted();

    //Click again to sort by descending order
    HomePage.listingsTableCostHeader_Th.click();
    var currentListingSections = HomePage.getRowValues(costPath);
    expect(currentListingSections).to.be.sorted({descending: true});

    browser.logger.info("Click Cost to Sort by cost: PASSED");


    //
    browser.logger.info("Click Price to Sort by price......");

    //Click Qty to sort by quantity in ascending order
    HomePage.listingsTablePriceHeader_Th.click();    
    var currentListingSections = HomePage.getRowValues(pricePath);   
    expect(currentListingSections).to.be.sorted();

    //Click again to sort by descending order
    HomePage.listingsTablePriceHeader_Th.click();
    var currentListingSections = HomePage.getRowValues(pricePath);
    expect(currentListingSections).to.be.sorted({descending: true});

    browser.logger.info("Click Price to Sort by price: PASSED");

    //
    browser.logger.info("Click Change to Sort by price change......");

    //Click Change to sort by price change % in ascending order
    HomePage.listingsTablePriceChangeHeader_Th.click();  
    var currentListingSections = HomePage.getRowValues(changePath);   
    expect(currentListingSections).to.be.sorted();

    //Click again to sort by descending order
    HomePage.listingsTablePriceChangeHeader_Th.click();
    var currentListingSections = HomePage.getRowValues(changePath);
    expect(currentListingSections).to.be.sorted({descending: true});

    browser.logger.info("Click Change to Sort by price change: PASSED");

    //
    browser.logger.info("Click ROI to Sort by ROI......");

    var currentListings = HomePage.getRowValues(roiPath); 
    var listingsAsc = currentListings.sort(function(a, b){return a - b});

    //Click Change to sort by price change % in ascending order
    HomePage.listingsTableROIHeader_Th.click();  
    var currentListingSections = HomePage.getRowValues(roiPath);   
    expect(currentListingSections).to.be.eql(listingsAsc);

    var listingsDesc = currentListings.sort(function(a, b){return b - a});

    //Click again to sort by descending order
    HomePage.listingsTableROIHeader_Th.click();
    var currentListingSections = HomePage.getRowValues(roiPath);
    expect(currentListingSections).to.be.eql(listingsDesc);

    browser.logger.info("Click ROI to Sort by ROI: PASSED");
  });
});
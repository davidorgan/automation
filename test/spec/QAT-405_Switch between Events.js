/*jslint node: true */
'use strict';
const assert = require('assert');
var chai = require('chai');
var chaiWebdriver = require('chai-webdriverio').default;
chai.use(chaiWebdriver(browser));
var chai = require('chai')
  , expect = chai.expect
  , should = chai.should();
const LoginPage = require('../pageobjects/login.page');
const HomePage = require('../pageobjects/home.page');
const EventListPage = require('../pageobjects/eventList.page');
const userData = require('../data/user.data');

var testSuiteName;
var extendedWait = 5000;

function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}


suite(testSuiteName = 'QAT-405_Switch between Events', () => {

  test('QAT-405_Switch between Events', () => {
      // -------------------------------- //
     // *** Step 1 - Login to Resale *** //
    // -------------------------------- //

    browser.logger.info('Starting test for QAT-405_Switch between Events');
    LoginPage.login(); //Goes to base url and logs in to resale
    browser.logger.info('Step 1 - Login to Resale: PASSED');

        // ------------------------------------------------------- //
       // *** Step 2 - Click Event List Dropdown on Home page *** //
      // EXPECTED RESULT::------------------------------------------------- //
     // Event List dropdown displays showing all events for that Reseller. //
    // ------------------------------------------------------------------ //
    browser.logger.info('Click Event List Dropdown on Home page...');
    HomePage.goToReseller('PrimeSport'); //Function to go to named reseller

    //Wait until listings load
    HomePage.listingHasReseller_Row.waitForVisible(extendedWait);

    EventListPage.mapPageEvent_Div.waitForVisible(extendedWait);
    EventListPage.eventSelectionToggle_Li.waitForVisible(extendedWait);
    EventListPage.eventSelectionToggle_Li.click();

    expect(EventListPage.assertEventsLoaded()).to.be.true;

    browser.logger.info('Click Event List Dropdown on Home page: PASSED');

        // ----------------------------------------------- //
       // *** Step 3 - Click on an event in dropdown. *** //
      // EXPECTED RESULT::------------------------------------------------------------ //
     // Event clicked on now displays on Home page with matching Event Name/Date etc. //
    // ----------------------------------------------------------------------------- //
    browser.logger.info('Click on an event in dropdown...');

    //Select random event from available events listed
    var randomEventRowNum = randomIntFromInterval(0, 6); //Rows index 0-6, So row is in view
    var eventText = EventListPage.eachEventTitleArea_Span.value[randomEventRowNum].getText();
    var allVisibleEventsText = [];

    //Save event text to compare later
    for (var i = 0; i <= 6; i++){
      allVisibleEventsText[i] = EventListPage.eachEventTitleArea_Span.value[i].getText();
    }

    console.log("All events text");
    console.log(allVisibleEventsText);

    EventListPage.eachEventTitleArea_Span.value[randomEventRowNum].waitForVisible(extendedWait);
    EventListPage.eachEventTitleArea_Span.value[randomEventRowNum].click();

    browser.pause(2000);

    //Wait for eventlistings dropdown to no longer be visible
    EventListPage.eventDropdown_Container.waitForVisible(HomePage.defaultWait, true);
    //Wait until listings load
    HomePage.listingHasReseller_Row.waitForVisible(extendedWait);
    var currentEventTitle = EventListPage.currentEvent_TitleArea_Span.getText();
    expect(eventText).to.be.eql(currentEventTitle);

    browser.logger.info('Click on an event in dropdown.: PASSED');

         // --------------------------------------------------------------------------------------------------- //
        // *** Step 5 - Click arrow to left of Event list and repeat until reach first event in list again.*** //
       // EXPECTED RESULT::---------------------------------------------------------------------- //
      // Each click of left arrow displays previous event in list until reach first event again. //
     //Left arrow no longer displays at this point. ------------------------------------------- //
    // --------------------------------------------------------------------------------------- //
    browser.logger.info('Click arrow to left of Event list and repeat until reach first event in list again...');

    for(var j = randomEventRowNum-1; j >=0; j--){
      EventListPage.currentEventLeftArrow_Li.waitForVisible(extendedWait);
      EventListPage.currentEventLeftArrow_Li.click();

      //Wait until listings load
      HomePage.listingHasReseller_Row.waitForVisible(extendedWait);

      currentEventTitle = EventListPage.currentEvent_TitleArea_Span.getText();
      expect(currentEventTitle).to.be.eql(allVisibleEventsText[j]);
    }

    expect(EventListPage.currentEventLeftArrow_Li).to.not.be.visible;


    browser.logger.info('Click arrow to left of Event list and repeat until reach first event in list again: PASSED');


         // ----------------------------------------------------------------------------------------------- //
        // *** Step 6 - Click arrow to right of Event list and repeat until reach last event in list.t *** //
       // EXPECTED RESULT::------------------------------------------------------------ //
      // Each click of arrows displays next event in list until last event is reached. //
     // Right arrow no longer displays at this point. ------------------------------- //
    // ----------------------------------------------------------------------------- //
    browser.logger.info('Continue to click right arrow until reaching last event in list...');

    for(var k = 1; k <= 6; k++){
      EventListPage.currentEventRightArrow_Li.waitForVisible(extendedWait);
      EventListPage.currentEventRightArrow_Li.click();

      //Wait until listings load
      HomePage.listingHasReseller_Row.waitForVisible(extendedWait);

      currentEventTitle = EventListPage.currentEvent_TitleArea_Span.getText();
      expect(currentEventTitle).to.be.eql(allVisibleEventsText[k]);
    }

    //Cannot test until able to use scroll
    //expect(EventListPage.currentEventRightArrow_Li).to.not.be.visible;

    browser.logger.info('Continue to click right arrow until reaching last event in list: PASSED');

  });

})

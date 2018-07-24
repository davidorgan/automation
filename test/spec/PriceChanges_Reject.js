'use strict'
const assert = require('assert');
var chai = require('chai');
var chaiWebdriver = require('chai-webdriverio').default;
chai.use(chaiWebdriver(browser));
var chai = require('chai')
  , expect = chai.expect
  , should = chai.should();
const Login = require("../pageobjects/loginPage"),
  LoginActions = Login.LoginActions,
  LoginPage = Login.LoginPage;
const HomePage = require('../pageobjects/home.page');
const userData = require('../data/user.data');


var testSuiteName;
var test1;
var newPrice;
var currentPrice;
var priceResults ;

suite(testSuiteName = 'Price Change - Reject - Test Suite', () => {

  test(test1 = 'A_Reject Price in Cart', () => {
    browser.logger.info('Starting test for "'+ test1 +'"');
    LoginPage.login(); //Goes to base url and logs in to resale

    HomePage.goToReseller('Qcue'); //Function to go to named reseller
    priceResults = HomePage.editPrice(-10); //Function to edit price; Defaults to first listing and defaults +5 to current price, enter int for custom price change.


    expect(HomePage.submitCart_SelectorText).to.not.be.visible();
    expect(HomePage.rejectCart_SelectorText).to.not.be.visible();

    HomePage.firstSelectChangeSetInZone_Checkbox.waitForVisible(3000);
    HomePage.firstSelectChangeSetInZone_Checkbox.click();

    HomePage.rejectCart_Button.waitForVisible(3000);
    HomePage.rejectCart_Button.click();

    browser.waitX(5);

    HomePage.firstListingEditPrice_Span.waitForVisible(3000);
    expect(HomePage.firstListingEditPrice_SelectorText).to.have.text(priceResults.currentPriceRes);
    //browser.waitX(5);

  });

})

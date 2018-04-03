'use strict'
const assert = require('assert');
var chai = require('chai');
var chaiWebdriver = require('chai-webdriverio').default;
chai.use(chaiWebdriver(browser));
var chai = require('chai')
  , expect = chai.expect
  , should = chai.should();
var LoginPage = require('../pageobjects/login.page');
var HomePage = require('../pageobjects/home.page');
var userData = require('../data/user.data');

var EventPage = require('../pageobjects/setup_events.page');
var StrategiesPage = require('../pageobjects/setup_strategies.page');
var UsersPage = require('../pageobjects/setup_users.page');
var ZonesPage = require('../pageobjects/setup_zones.page');

var DashboardPage = require('../pageobjects/reporting_dashboard.page');
var HistoryPage = require('../pageobjects/reporting_history.page');
var ReportsPage = require('../pageobjects/reporting_reports.page');

var AdminPage = require('../pageobjects/admin.page');

var testSuiteName = 'Page Load Suite';
var test1 = 'Resale Login: loads';
var pageLoadWaitTime = 5000;

suite(testSuiteName, () => {
  browser.logger.info('Starting test for suite "'+ testSuiteName +'"');
  test('A_Qcue - Home Loads', () =>{
    LoginPage.login()
  })

  test('B_Qcue - Setup - Events: Loads', () =>{
    EventPage.open();
    EventPage.eventTitle_Span.waitForVisible(pageLoadWaitTime);
    expect(browser.getTitle()).to.equal('Qcue - Setup - Events');
  })

  test('C_Qcue - Setup - Strategies page loads', () =>{
    StrategiesPage.open();
    StrategiesPage.strategyTitle_Span.waitForVisible(pageLoadWaitTime);
    expect(browser.getTitle()).to.equal('Qcue - Setup - Strategies');
  })

  test('D_Qcue - Setup - Users page loads', () =>{
    UsersPage.open();
    UsersPage.usersTitle_Span.waitForVisible(pageLoadWaitTime);
    expect(browser.getTitle()).to.equal('Qcue - Setup - Users');
  })

  test('E_Qcue - Setup - Zones page loads', () =>{
    ZonesPage.open();
    ZonesPage.zonesTitle_Span.waitForVisible(pageLoadWaitTime);
    expect(browser.getTitle()).to.equal('Qcue - Setup - Zones');
  })

  test('F_Qcue - Reporting - Dashboard page loads', () =>{
    DashboardPage.open();
    DashboardPage.appPageNav_Div.waitForVisible(pageLoadWaitTime);
    expect(browser.getTitle()).to.equal('Qcue - Reporting - Dashboard');
  })

  test('G_Qcue - Reporting - History page loads', () =>{
    HistoryPage.open();
    HistoryPage.historyTitle_Span.waitForVisible(pageLoadWaitTime);
    expect(browser.getTitle()).to.equal('Qcue - Reporting - History');
  })

  test('H_Qcue - Reporting - Reports page loads', () =>{
    ReportsPage.open();
    ReportsPage.reportsTitle_Span.waitForVisible(pageLoadWaitTime);
    expect(browser.getTitle()).to.equal('Qcue - Reporting - Reports');
  })

  test('I_Qcue - Admin - API page loads', () =>{
    AdminPage.open('api');
    AdminPage.apiTitle_Span.waitForVisible(pageLoadWaitTime);
    expect(browser.getTitle()).to.equal('Qcue - Admin - API');
  })

  test('J_Qcue - Admin - Data page loads', () =>{
    AdminPage.open('data');
    AdminPage.dataFilesTitle_Span.waitForVisible(pageLoadWaitTime);
    expect(browser.getTitle()).to.equal('Qcue - Admin - Data');
  })

//Depcrecated: Page no longer exists, now part of global events
  // test('K_Qcue - Admin - Event Types page loads', () =>{
  //   AdminPage.open('eventTypes')
  //   AdminPage.eventTypesTitle_Span.waitForVisible(pageLoadWaitTime);
  //   expect(browser.getTitle()).to.equal('Qcue - Admin - Event Types');
  // })

  test('L_Qcue - Admin - Global Events page loads', () =>{
    AdminPage.open('globalEvents');
    AdminPage.globalEventsQuickFilterTitle_Span.waitForVisible(pageLoadWaitTime);
    expect(browser.getTitle()).to.equal('Qcue - Admin - Global Events');
  })

  test('M_Qcue - Admin - Jobs page loads', () =>{
    AdminPage.open('jobs');
    AdminPage.jobsTitle_Span.waitForVisible(pageLoadWaitTime);
    expect(browser.getTitle()).to.equal('Qcue - Admin - Jobs');
  })

  test('N_Qcue - Admin - Metrics page loads', () =>{
    AdminPage.open('metrics')
    AdminPage.metricsTitle_Span.waitForVisible(pageLoadWaitTime);
    expect(browser.getTitle()).to.equal('Qcue - Admin - Metrics');
  })

  test('O_Qcue - Admin - Options page loads', () =>{
    AdminPage.open('options');
    AdminPage.pricingOptionsTitle_Span.waitForVisible(pageLoadWaitTime);
    expect(browser.getTitle()).to.equal('Qcue - Admin - Options');
  })

  test('P_Qcue - Admin - Performers page loads', () =>{
    AdminPage.open('performers');
    AdminPage.performersTitle_Span.waitForVisible(pageLoadWaitTime);
    expect(browser.getTitle()).to.equal('Qcue - Admin - Performers');
  })

  test('Q_Qcue - Admin - Permissions page loads', () =>{
    AdminPage.open('permissions');
    AdminPage.permissionsTitle_Span.waitForVisible(pageLoadWaitTime);
    expect(browser.getTitle()).to.equal('Qcue - Admin - Permissions');
  })

  test('R_Qcue - Admin - POS Accounts page loads', () =>{
    AdminPage.open('posCredentials');
    AdminPage.posTitle_Span.waitForVisible(pageLoadWaitTime);
    expect(browser.getTitle()).to.equal('Qcue - Admin - POS Credentials');
  })

  test('S_Qcue - Admin - Recent Changes page loads', () =>{
    AdminPage.open('changelog');
    AdminPage.recentChangesTitle_Span.waitForVisible(pageLoadWaitTime);
    expect(AdminPage.recentChangesTitle_Span.getText()).to.equal('Recent Changes');
  })

  test('T_Qcue - Admin - Organizations page loads', () =>{
    AdminPage.open('resellers');
    AdminPage.organizationsTitle_Span.waitForVisible(pageLoadWaitTime);
    expect(browser.getTitle()).to.equal('Qcue - Admin - Organizations');
  })

  test('U_Qcue - Admin - Symmetry page loads', () =>{
    AdminPage.open('symmetry');
    AdminPage.symmetryTitle_Span.waitForVisible(pageLoadWaitTime);
    expect(browser.getTitle()).to.equal('Qcue - Admin - Symmetry');
  })

  test('V_Qcue - Admin - Tags page loads', () =>{
    AdminPage.open('tags');
    AdminPage.tagsTitle_Span.waitForVisible(pageLoadWaitTime);
    expect(browser.getTitle()).to.equal('Qcue - Admin - Tags');
  })

  test('W_Qcue - Admin - Venue Configurations page loads', () =>{
    AdminPage.open('venueConfigurations');
    AdminPage.venueConfigurationsTitle_Span.waitForVisible(pageLoadWaitTime);
    expect(browser.getTitle()).to.equal('Qcue - Admin - Venue Configurations');
  })

  test('X_Qcue - Admin - Venues page loads', () =>{
    AdminPage.open('venues');
    AdminPage.venuesTitle_Span.waitForVisible(pageLoadWaitTime);
    expect(browser.getTitle()).to.equal('Qcue - Admin - Venues');
  })

  test('Y_Qcue - Admin - Venue Maps page loads', () =>{
    AdminPage.open('venueMaps');
    AdminPage.venueMapsTitle_Span.waitForVisible(pageLoadWaitTime);
    expect(browser.getTitle()).to.equal('Qcue - Admin - Venue Maps');

  })

  test('Z_Qcue - My Account page loads', () =>{
    browser.url('/resale/ui/myAccount');
    browser.waitX(2);
    assert.equal(browser.getTitle(),'Qcue - My Account');
  })

  test('ZA_Qcue - Notifications page loads', () =>{
    browser.url('/resale/ui/notifications');
    browser.waitX(2);
    assert.equal(browser.getTitle(),'Qcue - Notifications');
  })

})

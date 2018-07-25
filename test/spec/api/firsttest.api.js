'use strict'
const assert = require('assert');
// Require and configure the assertion library
const chai = require("chai");
const should = chai.should();
const expect = chai.expect();
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
var chaiWebdriver = require('chai-webdriverio').default;
chai.use(chaiWebdriver(browser));

//const LoginPage = require('../pageobjects/login.page');
//const HomePage = require('../pageobjects/home.page');
//const userData = require('../data/user.data');

suite.skip('API Test Suite', () => {

  test('A_Test an API call', () => {
    chai.request('https://google.com')
      .get('/')
      .end(function(err, res){
        assert.equal(res.status, 200, "[message]");
        done();
      });
  });

})

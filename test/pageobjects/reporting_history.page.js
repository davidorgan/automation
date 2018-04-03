// login.page.js
var Page = require('./page')

const assert = require('assert');
var chai = require('chai')
  , expect = chai.expect
  , should = chai.should();

const HomePage = require('../pageobjects/home.page');
const userData = require('../data/user.data');

var HistoryPage = Object.create(Page, {
    /**
     * define elements
     */
    historyTitle_Span: { get: function () { return browser.element('[translate="history.history"]'); } },


    /**
     * define or overwrite page methods
     */
    open: { value: function() {
        Page.open.call(this, '/resale/ui/history');
    } },

    submit: { value: function() {
        this.form.submitForm();
    } },
});

module.exports = HistoryPage;

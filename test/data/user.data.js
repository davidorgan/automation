// user.data.js
var Data = require("./data");

var userData = Object.create(Data, {
  /**
   * define elements
   */
  username: {
    get: function() {
      return "dorgan@example.com";
    }
  },
  password: {
    get: function() {
      return "Zimmer!!04";
    }
  },
  qaURL: {
    get: function() {
      return "http://branch.vpc.qcue.com/resale";
    }
  },
  devURL: {
    get: function() {
      return "https://dev-resale.vpc.qcue.com/resale";
    }
  }
});

module.exports = userData;

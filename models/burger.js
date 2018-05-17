var orm = require("../config/orm.js");

// Inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.
const burger = {
  selectAll: function(cb) {
    orm.selectAll('burger', function(res) {
      cb(res);
    });
  },
  insertOne: function(cols, vals, cb){
    orm.insertOne('burger', cols, vals, function(res) {
      cb(res);
    });
  },
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne('burger', objColVals, condition, function(res) {
      cb(res); 
    });
  }
};

module.exports = burger;

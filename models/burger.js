var orm = require("../config/orm.js");

var burger = {
    all: function () {
        orm.selectAll("burgers", function (res) {
            res
        });
    },

    insert: function (tableCol, ColValue) {
        orm.InsertOne("burgers", tableCol, ColValue, function (res) {
            res;
        });
    },

    update: function (tableCol, newVal, ColValue) {
        orm.updateOne("burgers", tableCol, newVal, ColValue, function (res) {
            res;
        });
    }
};

module.exports = burger;

var connection = require("./connection.js");

var orm = {
    selectAll: function (table) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    InsertOne: function (table, tableCol, ColValue) {
        var queryString = "INSERT INTO ?? (??, ??, ??) VALUES (??, ??, ??)";
        console.log(queryString);
        connection.query(queryString, [table, tableCol, ColValue], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    updateOne: function (table, tableCol, newVal, ColValue) {
        var queryString = "UPDATE ?? SET ?? = ?? WHERE ?? = ??";
        connection.query(queryString, [table, tableCol, newVal, tableCol, ColValue], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    }
};

module.exports = orm;

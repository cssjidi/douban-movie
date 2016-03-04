var mysql = require('mysql');
var config = require('../config');

var conection = mysql.createConnection({
    host:config.db_host,
    user:config.db_user,
    password:config.db_pass,
    database:config.db_name
});

module.exports = conection;
const mysql = require("mysql2");
const mysqlConfig = require("../config/mysqlConfig");

const con = mysql.createConnection(mysqlConfig);

module.exports = con;

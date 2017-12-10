var mysql = require("mysql");

mysql://b9e28e3df8d24d:f004ae51@us-cdbr-iron-east-05.cleardb.net/heroku_83af1219e198553?reconnect=true
var connection = mysql.createConnection({
  host: "us-cdbr-iron-east-05.cleardb.net",
  user: "b9e28e3df8d24d",
  password: "f004ae51",
  database: "heroku_83af1219e198553"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
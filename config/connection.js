var mysql = require("mysql");

var connection = mysql.createConnection("mysql://b6b066533a7665:0eaeab45@us-cdbr-iron-east-05.cleardb.net/heroku_3d889581badb7b0?reconnect=true");

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;


  
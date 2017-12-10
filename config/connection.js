var mysql = require("mysql");

if ("mysql://b85a4c8e1e61b0:94746cc4@us-cdbr-iron-east-05.cleardb.net/heroku_91110c526ec69ad?reconnect=true") {
  var connection = mysql.createConnection("mysql://b85a4c8e1e61b0:94746cc4@us-cdbr-iron-east-05.cleardb.net/heroku_91110c526ec69ad?reconnect=true");
}
else
{
  var connection = mysql.createConnection(
    {
      driver: "mysql",
      charset: "utf8",
      collation: "utf8_unicode_ci",
      prefix: "",
      strict: false,
      host: "us-cdbr-iron-east-05.cleardb.net",
      user: "b85a4c8e1e61b0",
      password: "94746cc4",
      database: "heroku_91110c526ec69ad"
    }
  );
};

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;

// var mysql = require('mysql');

// require('dotenv').config();

// if (process.env.CLEARDB_DATABASE_URL) {
//     var connection = mysql.createConnection(process.env.CLEARDB_DATABASE_URL);
// }
// else
// {
//     var connection = mysql.createConnection({
//         host: 'localhost',
//         user: 'root',
//         password: process.env.password,
//         database: 'burgers_db'
//     });
// };
// connection.connect(function (err) {
//     if (err) {
//         console.error('error connecting: ' + err.stack);
//         return;
//     }
//     console.log('connected as id ' + connection.threadId);
// });
// module.exports = connection;
  
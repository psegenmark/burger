var mysql = require("mysql");

if ("mysql://b9e28e3df8d24d:f004ae51@us-cdbr-iron-east-05.cleardb.net/heroku_83af1219e198553?reconnect=true") {
  var connection = mysql.createConnection("mysql://b9e28e3df8d24d:f004ae51@us-cdbr-iron-east-05.cleardb.net/heroku_83af1219e198553?reconnect=true");
}
else
{
  var connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'root',
      database: 'burgers_db'
  });
};

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;

//   {
//   driver: "mysql",
//   charset: "utf8",
//   collation: "utf8_unicode_ci",
//   prefix: "",
//   strict: false,
//   host: "us-cdbr-iron-east-05.cleardb.net",
//   user: "b9e28e3df8d24d",
//   password: "f004ae51",
//   database: "heroku_83af1219e198553"
// }
const mysql = require("mysql");

// connection
const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: ""
});

// Connection
conn.connect(function(err) {
  // check for errors
  if (err) throw err;
  // else do database things
  console.log("Connection complete");

  // create database
  // eslint-disable-next-line no-shadow
//   conn.query("CREATE DATABASE nodeSQL", function(err, result) { if (err) throw err; console.log(`database created!${result}`)});
  });


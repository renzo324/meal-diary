import mysql from 'mysql';

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    passworg: "",
    database: ""
})

conn.connect(function(err){
    if (err) throw err;
    console.log("Connected To The Database");
});
const mysql = require('mysql');
const dbpassword = process.env['PASSWORD']
const express = require('express');
var bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

const conn = mysql.createConnection({
  host: "mysql1-p2.ezhostingserver.com",
  database: "CITdemo",
  user: "elms",
  password: dbpassword,
});

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/create.html');
})

app.post('/submit', function(req, res) {
  const sql = 'SELECT * FROM Users WHERE email = ?';
  const inputRequest = 'INSERT INTO Users (Username, Password, Email) values (?,?,?)';
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;
  conn.query(sql, email, function(err, result) {
    if (err) {
      console.log(err);
    } else {
      if (result.length == 0) {
        conn.query(inputRequest, [username, password, email], function(err, result) {
          if (err) {
            console.log(err);
          } else {
            var message = username + " your account was successfully created"
            res.send(message);
          }
        });
      } else {
        res.send(email + " already exists");
      }
    }
  });

})

app.get('/retrieve', function(req, res) {
  res.sendFile(__dirname + '/retrieval.html');
})

app.post('/retrieve', function(req, res) {
  const sql = 'SELECT * FROM Users WHERE email = ?';
  const email = req.body.email;
  conn.query(sql, email, function(err, result) {
    if (err) {
      console.log(err);
    } else {
      if (result.length == 0) {
        res.send(email + " doesn't exist");
      } else {
        // console.log(result)
        res.send("Here's your old password : " + result[0].password);
      }
    }
  });
})


app.get('/admin', function(req, res) {
  // Bonus adding an admin page which shows each and every users and their info
  const sql = 'SELECT * FROM Users';
  const email = req.body.email;
  conn.query(sql, email, function(err, result) {
    if (err) {
      console.log(err);
    } else {
      adminContent = "<!DOCTYPE html>\n<html>\n<head>\n<title>Admin Page</title>\n</head>\n<body>\n<h1>Admin Page</h1>\n<table>\n<tr>\n<th>Username</th>\n<th>Email</th>\n<th>Password</th></tr>";
      for (let index = 0; index < result.length; index++) {
       adminContent += "<tr><td>" + result[index].username + "</td><td>"+  result[index].email + "</td><td>" +result[index].password + "</td></tr>"   
      }
      adminContent += "<table>\n</body>\n</html>";

      res.send(adminContent);
    }
  });
})
app.listen(8090);
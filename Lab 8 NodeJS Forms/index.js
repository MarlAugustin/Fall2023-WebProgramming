const express = require('express');
var bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
const fs = require('fs')

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/home.html');
})

app.post('/submit', function(req, res) {
  // The try catch block is used to check if the file exists. If it exists verify is the written email is already in the file
  // If the file does not exist, create it and write the email in emails.txt
  try{
    const readData = fs.readFileSync("emails.txt");
    emailExists = false;
    readData.toString().split("\n").forEach(function(line) {
      //This loop exists to verifiy if the email is already in the file
      if(line === req.body.email) {
        emailExists = true;
      }
    })

    if(emailExists == false)
    {
      fs.appendFile('emails.txt', "\n" + req.body.email, function(err) {
        if (err) throw err;
      });
    }
  }catch (err){
    if (err.code === 'ENOENT') {
      fs.writeFile('emails.txt', req.body.email, function(err) {
        if (err) throw err;
      });
    }
  }

  res.sendFile(__dirname + '/home.html');
})

app.get('/admin', function(req, res) {
  // This function is used to read all the content of the file emails.txt and display it in a list
  const readData = fs.readFileSync("emails.txt");
  adminContent = "<!DOCTYPE html>\n<html>\n<head>\n<title>Admin Page</title>\n</head>\n<body>\n<h1>Admin Page</h1>\n<ul>";
  readData.toString().split("\n").forEach(function(line) {
    adminContent += "<li>" + line + "</li>";
  })
  adminContent += "</ul>\n</body>\n</html>";

  res.send(adminContent);

})

app.listen(8090);

const http = require('http');
const express = require('express');
const path = require('path');
const app = express();

const port = 3000;
const host = "localhost";

app.use(express.static('public'));

app.get("/", (req, res) => {
  res.statusCode = 200;
  res.sendFile(path.resolve(__dirname, 'public/index.html'));
});

app.get("/contact", (req, res) => {
    res.statusCode = 200;
    res.sendFile(path.resolve(__dirname, 'public/contact.html'));
  });

app.listen(port, host , (err) => {
   console.log(`Server is running at port: ${port}`);
});
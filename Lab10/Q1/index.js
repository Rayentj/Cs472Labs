const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

// Serve image at /image
app.get('/image', (req, res) => {
  const imgPath = path.join(process.cwd(), 'diagram.png');
  fs.readFile(imgPath, (err, data) => {
    if (err) {
      return res.status(500).send('Internal Server Error');
    }
    res.setHeader('Content-Type', 'image/jpeg');
    res.end(data);
  });
});

// Serve PDF at /pdf
app.get('/pdf', (req, res) => {
  const pdfPath = path.join(process.cwd(), 'Lab5_Part1.pdf');
  fs.readFile(pdfPath, (err, data) => {
    if (err) {
      return res.status(500).send('Internal Server Error');
    }
    res.setHeader('Content-Type', 'application/pdf');
    res.end(data);
  });
});

// Serve text file at /about
app.get('/about', (req, res) => {
  const aboutPath = path.join(process.cwd(), 'input.txt');
  fs.readFile(aboutPath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Internal Server Error');
    }
    res.setHeader('Content-Type', 'text/plain');
    res.end(data);
  });
});

// Home route
app.get(['/home', '/'], (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.end('Welcome to my website');
});

// 404 Not Found route
app.use((req, res) => {
  res.status(404).send('Not Found');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

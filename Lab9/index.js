import http from 'http';
import fs from 'fs';
import path from 'path';

const server = http.createServer((req, res) => {
  const { method, url } = req;

  if (method === 'GET') {
    if (url === '/image') {
      const imgPath = path.join(process.cwd(), 'diagram.png');
      fs.readFile(imgPath, (err, data) => {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Internal Server Error');
        } else {
          res.writeHead(200, { 'Content-Type': 'image/jpeg' });
          res.end(data);
        }
      });
    } else if (url === '/pdf') {
      const pdfPath = path.join(process.cwd(), 'Lab5_Part1.pdf');
      fs.readFile(pdfPath, (err, data) => {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Internal Server Error');
        } else {
          res.writeHead(200, { 'Content-Type': 'application/pdf' });
          res.end(data);
        }
      });
    } else if (url === '/about') {
      const aboutPath = path.join(process.cwd(), 'input.txt');
      fs.readFile(aboutPath, 'utf8', (err, data) => {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Internal Server Error');
        } else {
          res.writeHead(200, { 'Content-Type': 'text/plain' });
          res.end(data);
        }
      });
    } else if (url === '/home' || url === '/') {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Welcome to my website');
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not Found');
    }
  } else {
    res.writeHead(405, { 'Content-Type': 'text/plain' });
    res.end('Method Not Allowed');
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

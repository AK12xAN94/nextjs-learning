import { createServer } from 'http';
import { readFile } from 'fs';
import { extname as _extname } from 'path';

const server = createServer((req, res) => {
  let filePath = '.' + req.url;
  if (filePath === './') filePath = './01-React基本使用.html';
  
  const extname = _extname(filePath);
  let contentType = 'text/html';
  switch (extname) {
    case '.js': contentType = 'text/javascript'; break;
    case '.css': contentType = 'text/css'; break;
  }
  
  readFile(filePath, (error, content) => {
    if (error) {
      res.writeHead(404);
      res.end('File not found');
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(8080, '127.0.0.1', () => {
  console.log('Server running at http://127.0.0.1:8080/');
});

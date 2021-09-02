var http = require('http');
const blogs = require('../src/data/blogs.json');

var hostname  = '127.0.0.1';
var port      = 3001;

var app = http.createServer(function(req, res) {
            res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
            res.setHeader('Content-Type', 'application/json');
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader( 'Access-Control-Allow-Methods', 'OPTIONS, POST, GET');
            res.setHeader('Access-Control-Max-Age', 2592000);
            if (req.method === 'GET' && req.url === '/api/blogs') {
                res.end(
                    JSON.stringify(blogs)
                  );
                return;
            }

            res.end(
              JSON.stringify('Hello, you are using API server')
            );
          });

app.listen(port, hostname);
const http = require('http');
const fs = require('fs')
const url = require('url');
var querystring = require('querystring');

const server = http.createServer(function(req, res) {
  const page = url.parse(req.url).pathname;
  var params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == '/') {
    fs.readFile('indexA.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/indexB') {
    fs.readFile('indexB.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/indexC') {
    fs.readFile('indexC.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }else if (page == '/api') {
    if('profile' in params){
      if(params['profile']== 'dreads'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        var objToJson = {
          hairType: "dreads",
          name: "derek",
          status: "Rasta",
          favoriteFood: "Popcorn"
        }
        res.end(JSON.stringify(objToJson));
      }//student = leon
      else if(params['profile'] != 'dreads'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        var objToJson = {
          hairType: "unknown",
          name: "unknown",
          status: "unkown",
          favoriteFood: "unknown"
        }
        res.end(JSON.stringify(objToJson));
      }//student != leon
    }//student if
  }//else if
  else if (page == '/css/styleA.css'){
    fs.readFile('css/styleA.css', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/css'});
      res.write(data);
      res.end();
    });
  }else if (page == '/css/styleB.css'){
    fs.readFile('css/styleB.css', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/css'});
      res.write(data);
      res.end();
    });
  }else if (page == '/css/styleC.css'){
    fs.readFile('css/styleC.css', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/css'});
      res.write(data);
      res.end();
    });
  }else if (page == '/js/mainA.js'){
    fs.readFile('js/mainA.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }else if (page == '/js/mainB.js'){
    fs.readFile('js/mainB.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }else if (page == '/js/mainC.js'){
    fs.readFile('js/mainC.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }else if (page == '/js/mainD.js'){
    fs.readFile('js/mainD.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }else{
      res.write("404");
      res.end();
    };
  });

server.listen(8000);

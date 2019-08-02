const express = require('express');
const http = require('http');
const bodyParser =  require('body-parser');
const morgan = require('morgan');
const app = express();

app.use(bodyParser.json());
app.use(morgan('dev'));
const abRouter = require('./abRouter');
app.use('/profession', abRouter);

app.use('/', (req, res, next)=>{
  res.statusCode = 200;
  res.setHeader('content-type', 'text/html');
  res.end('<html><body><h1>welcome</html></body></h1>');
})
const server = http.createServer(app);
server.listen(3000);

const mongo = require('mongodb').MongoClient;
const express = require('express');
const abRouter = express.Router();
const bodyParser = require('body-parser');

abRouter.use(bodyParser.json());
const url = 'mongodb://localhost:27017';

abRouter.route('/')
.all((req, res, next)=>{
  res.statusCode = 200;
  res.setHeader('content-type', 'text/html');
  next();
})
.get((req, res, next)=>{
  mongo.connect(url, (err, client)=>{
    if(err)
    {
      console.log(err);
      return;
    }
    else
    {
      console.log('connected!!');
    }
    const db = client.db('EgnifyDB');
    const collection = db.collection('backendBD');

    collection.find({}).toArray((err, items)=>{
      console.log(items);
      res.json(items)
    })
  })
})
.post((req, res, next)=>{
  mongo.connect(url, (err, client)=>{
    if(err)
    {
      console.log(err);
      return;
    }
    else {
      console.log('connected!!');
    }
    const db = client.db('EgnifyDB');
    const collection = db.collection('backendBD');
    const req_data = {
      name : req.body.name,
      job: req.body.job
    }
    const result = collection.insertOne(req_data);
    collection.find({}).toArray((err, items)=>{
      console.log(items);
      res.json(items);
    })
  })
})


module.exports = abRouter;

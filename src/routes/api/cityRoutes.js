const router = require("express").Router();
const City = require("../../models/city.js");
//const MongoClient = require('mongodb').MongoClient;
const  MongoClient  = require('mongodb').MongoClient;
const uri = "mongodb+srv://Bijan:Spideyc9@cluster0.fy5xl.mongodb.net/Travelsite?retryWrites=true&w=majority";
 MongoClient.connect(uri, function(err, db) {
     if (err) throw err;
     var dbo = db.db("UScities");
     dbo.collection("USAcities").findOne({}, function(err, result) {
         if (err) throw err;
         console.log(result);
         db.close();
     })
 })
//const { MongoClient } = require('mongodb');
//const uri = "mongodb+srv://<louskyze>:<Spideyc9>@cluster0.fy5xl.mongodb.net/Travelsite?retryWrites=true&w=majority";
//const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
//client.connect(err => {
  //const collection = client.db("UScities").collection("USAcities");
  //collection.find({City:'Chicago'}, {_id:0,GeocodeID: 1, Lat:1, Lon:1})

  //client.close();
//});
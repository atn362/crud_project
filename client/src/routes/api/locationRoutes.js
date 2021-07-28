const router = require("express").Router();
const Location = require("../../models/location.js");
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
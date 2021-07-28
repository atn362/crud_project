const router = require("express").Router();
const City = require("../../models/city.js");
var MongoClient = require('mongodb').MongoClient;

// MongoClient.connect(process.env.ATLAS_URI, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("mydb");
//     dbo.collection("cities").findOne({}, function(err, result) {
//         if (err) throw err;
//         console.log(result.name);
//         db.close();
//     })
// })
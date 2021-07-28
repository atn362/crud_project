var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://Bijan:Spideyc9@cluster0.fy5xl.mongodb.net/Travelsite?retryWrites=true&w=majority";
data=[]
function mongoquery(userinput){MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("UScities");
  dbo.collection("Locations").find({concat: userinput}).toArray(function(err, result) {
    if (err) throw err;
    for (var i=0;i<result.length;i++)
    {data.push(result[i].name)};
    console.log(data)
    db.close()
  });
})}
mongoquery('Chicago,IL')
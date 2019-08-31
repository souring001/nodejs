var MongoClient = require('mongodb').MongoClient,
    settings = require('./settings');
MongoClient.connect("mongodb://"+settings.host+"/"+settings.db, function(err, db){
    if(err) { return console.dir(err); }
    console.log("connected to db");
    db.collection("users", function(err, collection){
        if(err) { return console.dir(err); }
        var docs = [
            {name: "tsuduki", score: 40},
            {name: "gotoh", score: 80},
            {name: "ishibashi", score: 60}
        ];
        collection.insert(docs, function(err, result){
            if(err) { return console.dir(err); }
            console.dir(result);
        });
    });
});

var MongoClient = require('mongodb').MongoClient,
    settings = require('./settings');
MongoClient.connect("mongodb://"+settings.host+"/"+settings.db, function(err, client){
    if(err) { return console.dir(err); }
    console.log("connected to db");
    const db = client.db(settings.db);
    db.collection("users", function(err, collection){
        if(err) { return console.dir(err); }
        var docs = [
            {name: "tsuduki", score: 40},
            {name: "gotoh", score: 80},
            {name: "ishibashi", score: 60}
        ];
        // collection.insert(docs, function(err, result){
        //     if(err) { return console.dir(err); }
        //     console.dir(result);
        // });

        // collection.find({name: "gotoh"}).toArray(function(err, items){
        //     console.log(items);
        // });

        var stream = collection.find({name: "gotoh"}).stream();
        stream.on("data", function(item){
            console.log(item);
        });
        stream.on("end", function(){
            console.log("finished.");
        });
    });
});

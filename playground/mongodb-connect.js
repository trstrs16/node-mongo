const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/node-dev', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // Insert new doc into Users (name, age, location)
  db.collection('Users').insertOne({
    name: 'Andrew2',
    age: 25,
    location: 'Philadelphia',
    task: 'OK'
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert user', err);
    }

    console.log(result.ops);
  });

  // db.close();
  var coll = db.collection('Users');
  coll.find().toArray(function(err, docs) {
       console.log(docs.length);
       for ( var i = 0; i < docs.length; i++){
         console.log(JSON.stringify(docs[i]));
       }
       db.close();
     });

});

const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (calback) => {
  MongoClient.connect(
    "mongodb+srv://austiniqer:austiniqer@cluster0.hqlbq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  ).then(client => {
     console.log('mongodb connected!')
     _db = client.db()
     calback()
  }).catch(err => {
    console.log(err)
    throw err;
  })
};

const getDB = () => {
  if(_db){
    return _db;
  }
  throw "No Database Found";
}

exports.mongoConnect = mongoConnect;
exports.getDB = getDB;

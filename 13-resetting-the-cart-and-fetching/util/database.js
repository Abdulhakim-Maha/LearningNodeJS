const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient

let _db;

const mongoConnect = (calback) => {
  MongoClient.connect(
    "mongodb+srv://austiniqer:austiniqer@cluster0.hqlbq.mongodb.net/shop?retryWrites=true&w=majority"
  )
    .then((client) => {
      console.log("Connected!");
      _db = client.db()
      calback()
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if(_db){
    return _db;
  }else{
    throw 'No database found!'
  }
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
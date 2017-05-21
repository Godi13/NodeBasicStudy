const MongoClient = require('mongodb').MongoClient

function _connectDB(cb) {
  const url = 'mongodb://localhost:27017/test'
  MongoClient.connect(url, (err, db) => {
    if (err) {
      cb(err, null)
      return
    }
    cb(err, db)
  })
}

exports.insertOne = function(collectionName, json, cb) {
  _connectDB(function(err, db) {
    db.collection(collectionName).insertOne(json, function(err, result) {
      cb(err, result)
      db.close()
    })
  })
}

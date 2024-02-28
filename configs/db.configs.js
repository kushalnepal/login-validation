const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const conxnURL = '';
const dbName = '';
const Oid = mongodb.ObjectID;

module.exports = {
    MongoClient: MongoClient,
    conxnURL: conxnURL,
    dbName: dbName,
    Oid: Oid
}
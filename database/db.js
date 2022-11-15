const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

const dbName = "bitfumes-nodejs";

async function connect() {
  await client.connect();
  console.log(`connected to database..💾`);
  const db = client.db(dbName);
  return db;
}

module.exports = connect;

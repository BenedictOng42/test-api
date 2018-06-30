import mongodb from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const DB_NAME = 'library';

let connection;

/**
 * The URI to connect to MongoDB
 * Reminder, add your own shard and shard source
 *
 */
const uri = `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_KEY}`
 + `@testdb-shard-00-00-${process.env.MONGO_SHARD}.mongodb.net:27017,testdb-shard-00-01-${process.env.MONGO_SHARD}.mongodb.net:27017,testdb-shard-00-02-${process.env.MONGO_SHARD}.mongodb.net:27017/`
 + `${DB_NAME}?ssl=true&replicaSet=TestDB-shard-0&authSource=admin`;

/**
 *  Create a connection
 */
const createConnection = () => new Promise((resolve, reject) => {
  // Connection MongoDB
  mongodb.MongoClient.connect(uri, (err, db) => {
    if (err) {
      console.log(`Experienced error: ${err}`);
      reject(err);
    } else {
      console.log('Connected to Database');
      resolve(db.db(DB_NAME));
    }
  });
});

const connect = () => {
  if (!connection) {
    console.log('Creating Connection');
    connection = createConnection();
  }
  return connection;
};

export default connect;

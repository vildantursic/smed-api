import mongoose from 'mongoose';

const options = {
  useMongoClient: true,
  autoIndex: true,
  reconnectTries: Number.MAX_VALUE,
  reconnectInterval: 500,
  poolSize: 10,
  bufferMaxEntries: 0
};

mongoose.connect('mongodb://localhost/smed', options);

const db = mongoose.connection;
export default db;

const mongoose = require('mongoose');

const databaseConfig = require('../../config/database');

const connect = async () => {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(databaseConfig.uri, databaseConfig.options);
  }
};

const truncate = async () => {
  if (mongoose.connection.readyState !== 0) {
    const { collections } = mongoose.connection;

    const promises = Object.keys(collections).map(collection =>
      mongoose.connection.collection(collection).deleteMany({})
    );

    await Promise.all(promises);
  }
};

const disconnect = async () => {
  if (mongoose.connection.readyState !== 0) {
    await mongoose.disconnect();
  }
};

module.exports = {
  connect,
  truncate,
  disconnect,
};

const mongoose = require('mongoose');

const connect = async () => {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(
      process.env.NODE_ENV === 'test' ? global.__DB_URL__ : process.env.DB_URL,
      {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
      }
    );
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

module.exports = {
  uri: process.env.NODE_ENV === 'test' ? global.__DB_URL__ : process.env.DB_URL,
  options: {
  	useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  },
};

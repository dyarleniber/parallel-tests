module.exports = {
  uri: process.env.DB_URL,
  options: {
  	useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  },
};
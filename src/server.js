const app = require('./app');

const serverConfig = require('./config/server');

app.listen(serverConfig.port);

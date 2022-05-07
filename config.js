const config = require('./package.json').projectConfig

module.exports = {
    mongoConfig:{
        connectionUrl: config.mongoConnectionUrl,
        database: 'neTTaxi_db',
        collections: {
            USERS: 'users'
        },
    },
    serverConfig:{
        ip: config.serverIp,
        port: config.serverPort
    }
}

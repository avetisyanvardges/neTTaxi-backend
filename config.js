const mongoConnectionUrl= "mongodb+srv://neTTaxi:7nlrTCjcJOSDXO4K@cluster0.wzefh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const serverIp= "localhost"
const serverPort= 3000

export const mongoConfig={
        connectionUrl: mongoConnectionUrl,
        database: 'neTTaxi_db',
        collections: {
            CLIENT: 'client_users',
            DRIVER: 'driver_users'
        },
    }
export const serverConfig = {
        ip: serverIp,
        port: serverPort
    }

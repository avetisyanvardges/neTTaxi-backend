import {MongoClient} from "mongodb";
import {mongoConfig} from "../config.js";

class MongoDB{
    static connectToMongoDB = () => {
        MongoClient.connect(mongoConfig.connectionUrl)
            .then(connection => {
                console.log("MongoDB connected")
                this.db = connection.db(mongoConfig.database)
            })
            .catch(error => console.log(`MongoDB not connected : ${error}`))
    }
}

MongoDB.db = null

export default MongoDB


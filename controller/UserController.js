import MongoDB from "../services/mongodb.service.js";
import jwt from 'jsonwebtoken'
import {mongoConfig} from "../config.js";

const admin = require("firebase-admin");

const serviceAccount = require("serviceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});


const JWT_SECRET='12356874526487lrtfnjimmnhgbyvtfrhgtfrd'

class UserController {

    static login = async (req, res, next) => {

        try {
            const {phone_number} = req.body
            const user = await admin.auth().getUserByPhoneNumber(phone_number)
            console.log(user,777)
            // const token = jwt.sign({userId: user._id}, JWT_SECRET);

            res.json({
                status: 'ok',
                user,
                token,
            });
        } catch (e) {
            next(e);
        }
    };

    static profile = async (req, res, next) => {
        try {
            const {userId} = req;
            let user = await Users.find({_id: userId});

            res.json({
                status: 'ok', user
            })
        } catch (e) {
            next(e)
        }
    }
}

export default UserController;

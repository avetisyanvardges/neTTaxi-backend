import jwt from 'jsonwebtoken'
import HttpErrors from 'http-errors'


const EXCLUDE = [];
const {JWT_SECRET} = process.env

function authorization(req, res, next) {
    try {
        const {originalUrl, method} = req;
        const {authorization = ''} = req.headers;

        if (method === 'OPTIONS' || EXCLUDE.includes(originalUrl.replace(/\?.*/, ''))) {
            next();
            return;
        }
        let userId;
        try {
            const data = jwt.verify(authorization.replace('Bearer ', ''), JWT_SECRET)
            userId = data.userId;

        } catch (e) {
            //
        }

        if (!userId) {
            throw HttpErrors(401);
        }
        req.userId = userId;
        next();
    } catch (e) {
        next(e);
    }
}

module.exports = authorization;

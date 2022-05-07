function cors(req, res, next) {
    try {
        const { origin } = req.headers;

        const allowOrigins = ['https://tripery.xyz', 'http://localhost:3001', 'http://localhost:3000',];

        if (allowOrigins.includes(origin)) {
            res.setHeader('Access-Control-Allow-Origin', origin);
            res.setHeader('Access-Control-Allow-Headers', 'Authorization,Content-Type');
            res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS,DELETE,PUT');
        }

        next();
    } catch (e) {
        next(e);
    }
}

module.exports = cors;

const jwt = require('jsonwebtoken');

let verificationToken = (req, res, next) => {

    let token = req.body.token;

    jwt.verify(token, process.env.SEED, function (err, decoded) {

        if (err) {
            return res.status(401).json({
                ok: false,
                message: 'Login to continue',
                err
            });
        }

        req.user = decoded.user
        next()
    });
}

module.exports = {
    verificationToken
}
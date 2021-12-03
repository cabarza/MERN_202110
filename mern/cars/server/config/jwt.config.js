const jwt = require('jsonwebtoken');
const secret = "Este es el secreto de los automóviles";

module.exports.secret = secret;

module.exports.authenticate = (req, res, next) => {
    jwt.verify(req.cookies.usertoken, secret, (err, payload) => {
        if(err) {
            res.status(401).json({messaje: "forbidden", error: true})
        } else {
            next();
        }
    })
}
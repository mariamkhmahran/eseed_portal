var mongoose = require('mongoose');
var users = mongoose.model('User');
var config = require('../config/config');

module.exports.logIn = function (req, res, next) {
    console.log( req.body);
    users.findOne({ username: req.body.name }, function (err, the_user) {
        if (err) {
        return next(err);
        }
        if( the_user.password === req.body.password){
            return res.status(200).json({
            data: the_user,
            err: null,
            msg: 'Log In Is Successful!'
            });
        } else {
            return res.status(403).json({
                data: null,
                err: 'wrong password',
                msg: null
            });
        }
        
    });
}
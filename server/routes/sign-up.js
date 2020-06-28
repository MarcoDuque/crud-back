
const express = require('express');
const bcrypt = require('bcryptjs');

const User = require('../models/user.models');
const { fieldsValidateSignUp } = require('../middlewares/authentication');

const app = express();

app.post('/signUp', fieldsValidateSignUp, (req, res) => {

    let body = req.body;

    let user = new User({
        name: body.name,
        email: body.email,
        password: bcrypt.hashSync(body.password, 12)
    });

    user.save((err, userDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            user: userDB
        });
    });

})

module.exports = app;
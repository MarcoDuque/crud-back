require('../keys');

const express = require('express')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/user.models');
const { fieldsValidateSignIn } = require('../middlewares/authentication')

const app = express()

app.post('/signIn', fieldsValidateSignIn, (req, res) => {

    let body = req.body

    User.findOne({ email: body.email }, (err, userDB) => {

        if (err) {
            return res.status(500).json({
                ok: false,
                err
            })
        }

        if (!userDB) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'Usuario o contraseña incorrecta'
                }
            })
        }

        let result = bcrypt.compareSync(body.password, userDB.password)

        if (!result) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'Usuario o contraseña incorrecta'
                }
            });
        }

        let token = jwt.sign({
            user: userDB
        }, process.env.SEED, { expiresIn: process.env.END_TOKEN });

        res.json({
            ok: true,
            message: 'Login successfully',
            user: userDB,
            token
        })

    })
})

module.exports = app
let fieldsValidateSignUp = (req, res, next) => {

    let body = req.body;

    if (!body.name || !body.email || !body.password) {
        return res.json({
            ok: false,
            err: {
                messege: 'Please complete all the fields'
            }
        })
    } next();

}

let fieldsValidateSignIn = (req, res, next) => {

    let body = req.body;

    if (!body.email || !body.password) {
        return res.json({
            ok: false,
            err: {
                messege: 'Please complete all the fields'
            }
        })
    } next();

}


module.exports = {
    fieldsValidateSignUp,
    fieldsValidateSignIn
};
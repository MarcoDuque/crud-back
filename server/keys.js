// Puerto           
const PORT = '3000';

// End token
process.env.END_TOKEN = 60 * 60 * 24 * 30;

// SEED semilla de autenticacion
process.env.SEED = process.env.SEED || 'tokeUser';

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

module.exports={
    MONGOURI: "mongodb+srv://marco:CW5QzwApUspteUFl@cluster0-d6vjv.mongodb.net/test?retryWrites=true&w=majority",
    PORT
}
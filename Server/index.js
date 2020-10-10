require('dotenv').config();
require('dotenv').config();
let express = require('express');
let app = express();
let massive = require('massive');
let ctrl = require('./controller');
const session = require('express-session');
const axios = require('axios');

const {CONNECTION_STRING, SESSION_SECRET, SERVER_PORT} = process.env;

app.use(express.static(`${__dirname}/../build`));
app.use(express.json());

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {maxAge: 1000 * 60 * 60 * 24}
}));


// app.get('/', (req, res) => res.status(200).send("We're In !"));
massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(db => {
    app.set('db', db);
    console.log('Database Connected!')
})
.catch(err => console.log(err));
app.listen(SERVER_PORT, () => console.log(`Port running on: ${SERVER_PORT}`));
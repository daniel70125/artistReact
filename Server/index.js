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


app.get('/session', (req, res) => {
    req.session.user = {}
    res.status(200).send(req.session)
});
app.get('/items', async (req, res) => {
    const db = req.app.get('db');
    const allArt = await db.getAllArt();
    res.status(200).send(allArt)
})
app.get('/items/drawings', async (req, res) => {
    const db = req.app.get('db');
    const drawings = await db.getDrawings();
    res.status(200).send(drawings)
})
app.get('/items/portraits', async (req, res) => {
    const db = req.app.get('db');
    const portraits = await db.getPortraits();
    res.status(200).send(portraits)
})
app.get('/item/:id', async (req, res) => {
    const {id} = req.params;

    const db = req.app.get('db');
    const art = await db.getDrawing(id);
    res.status(200).send(art);
    
})
massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(db => {
    app.set('db', db);
    console.log('Database Connected!')
})
.catch(err => console.log(err));
app.listen(SERVER_PORT, () => console.log(`Port running on: ${SERVER_PORT}`));
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
app.get('/items', (req, res) => {
    let obj = [
        {
            name: "Daniel",
            img: "https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        },
        {
            name: "thomas",
            img: "https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        },
        {
            name: "Stacy",
            img: "https://images.wallpapersden.com/image/download/small-memory_58461_3840x2160.jpg"
        }
    ]
    res.status(200).send(obj)
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
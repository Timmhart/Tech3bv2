const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const slug = require('slug');
const app = express();
const dotenv = require('dotenv').config();
const { MongoClient } = require('mongodb');
const port = process.env.PORT || 4000;

let db = null;
// function connectDB
async function connectDB () {
    // get URI from .env file
    const uri = process.env.DB_URI
    // make connection to database
    const options = { useUnifiedTopology: true};
    const client = new MongoClient(uri, options);
    await client.connect();
    db = await client.db(process.env.DB_NAME);
};

connectDB()
.then(() => {
    // if succesfull connection is made, show a message
    console.log('We have a connection to Mongo!');
})
.catch( error => {
    console.log(error);
});

app.use(bodyParser.urlencoded({ extended: false}));
app.use(express.static('public'));
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.render('index', {title: 'feature'});
});

app.get('/add', (req, res) => {
    res.render('addStats', {title: 'feature'});
});

app.post('/add', (req, res) => {
    const id = slug(req.body.name);
    const player = {id: id, name: req.body.name, kd: req.body.kd, wins: req.body.wins, score: req.body.score, aname: req.body.aname};
    db.collection('players').insertOne(player, function(err, result){
        console.log('New player inserted');
    })
    res.render('playerdetails', {title: 'feature', player});
});

app.get('/add/players', async (req, res) => {
    let players = {}
    // look for all the players in the database and sort them by name in an array
    players = await db.collection('players').find({}, {sort: {name: 1, kd: -1}}).toArray();
    res.render('players', {
        title: 'feature', players
    });
});

app.get('/add/players/:playerId', async (req, res) => {
    player = await db.collection('players').findOne({ name: req.params.playerId});
    res.render('playersdetails', {title: 'Player details', player});
});




app.use(function (req, res, next) {
    res.status(404).render('404', {
        title: 'Feature Project Tech'
    });
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});
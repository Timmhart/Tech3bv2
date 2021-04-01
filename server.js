const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const slug = require('slug');
const app = express();
const dotenv = require('dotenv').config();
const { MongoClient } = require('mongodb');
const port = 3000;

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
    res.render('index', {
        title: 'feature'
    });
});


app.use(function (req, res, next) {
    res.status(404).render('404', {
        title: 'Feature Project Tech'
    });
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});
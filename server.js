const express = require('express');
const ejs = require('ejs');
const app = express();
const dotenv = require('dotenv').config();
const port = 3000;

console.log(process.env.TESTVAR);

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
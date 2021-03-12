const express = require('express');
const ejs = require('ejs');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', {
        spelernaam: 'Killerty333', kd: '1.87', wins: '98', score: '1233'
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
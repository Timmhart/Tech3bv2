const express = require('express');
const ejs = require('ejs');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send('hello world');
});

app.get('/login', (req, res) => {
    res.render('login')
})

app.use(function (req, res, next) {
    res.status(404).send("Sorry can't find that!")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});
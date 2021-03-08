const express = require('express');
const ejs = require('ejs');
const app = express();
const port = 3000;


// app.use('/css', express.static(__dirname + 'public/css'));
// app.use('/js', express.static(__dirname + 'public/js'));
// app.use('/images', express.static(__dirname + 'public/images'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});


app.use(function (req, res, next) {
    res.status(404).send("Sorry can't find that!")
})

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});
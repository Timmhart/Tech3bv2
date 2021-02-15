const express = require('express');
// const exphbs = require('express-handlebars');
const app = express();
// const port = 3000;

// app.use('/static', express.static('public'));

// app.engine('handlebars', exphbs());
// app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.send('hello world');
});

app.listen(3000, () => {
    console.log('Express web app on localhost:3000');
});
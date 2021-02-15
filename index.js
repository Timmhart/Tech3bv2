const express = require('express');
const app = express();
const port = 8000;

app.use('/static', express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello World!')
});
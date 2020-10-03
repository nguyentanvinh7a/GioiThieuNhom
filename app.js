const express = require('express');
const app = express();
const port = 3000;
var path = require('path');

app.get('/', function(req, res) {
    res.redirect('/default.html');
});

app.use(express.static(path.join(__dirname, 'VDV')));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});
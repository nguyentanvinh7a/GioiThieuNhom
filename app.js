const express = require('express');
const app = express();
var path = require('path');

app.get('/', function(req, res) {
    res.redirect('/default.html');
});

app.use(express.static(path.join(__dirname, 'VDV')));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${PORT}`);
});
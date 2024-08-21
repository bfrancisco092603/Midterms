const multer = require('multer');
const express = require('express');
const app = express();

//Serving Static Files
app.use(express.static('public'));

//Serving Static File index.htm
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/' + index.html);
});

//create 4 more routes - about, blog, upload, contact\
app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/' + about.html);
});

//Server listener option 2
const port = process.env.PORT || 3010;
app.listen(port, () => {
    console.log('Listening at port ${port}');
});
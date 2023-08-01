// create web server
// create a route for /comments
// send back some dummy data

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

const comments = require('./comments.json');

app.get('/comments', (req, res) => {
    res.json(comments);
});

app.post('/comments', (req, res) => {
    comments.push(req.body);
    res.json({
        success: true,
        message: 'Thanks for your comment'
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

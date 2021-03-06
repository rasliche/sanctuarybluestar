const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

console.log("hello");
console.log("Bro!");

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

app.get('/status', (req, res) => {
    res.send({
        message: 'hello World'
    });
});

app.post('/register', (req, res) => {
    res.send({
        message: `You were registered using the email ${req.body.email}!`
    });
});

app.listen(process.env.PORT || 8081);

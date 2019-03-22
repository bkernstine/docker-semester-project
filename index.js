const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

const blabs = [];

app.get('/items', (req, res) => {
    res.send(blabs);
});

app.post('/blabs', (req, res) => {
    const newBlab = {
        id : blabs.length + 1,
        postTime : new Date(),
        author : {
            email : "benk7@vt.edu",
            name : "Ben"
        },
        message : "example"
    }

    blabs.push(newBlab);
    res.send(`Thanks for the ${req.body.name}`);
});

app.delete('/blabs/{id}', (req,res)) =>


app.listen(8080, () => {
    console.log('Listening on port 3000');
});
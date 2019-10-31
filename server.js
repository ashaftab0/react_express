const express = require('express');
const app = express();
const cardDetails = [];

app.use(express.json());

app.get('/getAll', function (req, res) {
    try {
        const data = res.json(cardDetails)
        res.send(data)
    } catch (e) {
        res.status(500).send()
    }
})

app.post('/add', function (req, res) {
    const data = req.body;
        cardDetails.push(data);
        res.json(req.body)

    try {
        res.status(201).send(data)
    } catch (e) {
        res.status(400).send()
    }
});

app.listen(5000);

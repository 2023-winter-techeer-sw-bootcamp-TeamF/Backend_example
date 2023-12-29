const express = require('express')
const app = express()

app.get('/search/:dummuData', function (req, res) {
    const data = '윤기';
    res.send(data.includes(req.params.dummuData));
});

app.listen(3000)


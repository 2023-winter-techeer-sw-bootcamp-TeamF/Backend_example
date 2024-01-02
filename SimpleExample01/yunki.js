const data = ['윤기', '민기', '동헌', '한나'];

const express = require('express')
const app = express()


app.get('/search', function (req, res) {
    let result = false
    data.forEach( name => {
        if(name === req.query.dummydata)
            result = true;
    });
    res.send(result);
});

app.listen(3000)


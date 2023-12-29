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
    console.log("data : " + data.length + ", dum : " + req.query.dummydata.length)
});

app.listen(3000)


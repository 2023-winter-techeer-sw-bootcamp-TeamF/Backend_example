const data = '윤기';

const express = require('express')
const app = express()


app.get('/search', function (req, res) {
    // const result = data.indexOf(req.query.dummydata);
    
    // if(result != -1)
    //     res.send(true);
    // else
    //     res.send(false);
    res.send(data.includes(req.query.dummydata));
});

app.listen(3000)


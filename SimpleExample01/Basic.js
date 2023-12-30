const express = require('express');
const app = express();
const name = ['동헌','윤기','민기','한나'];

app.get('/search', function (req, res) {  
    let result = 'false' 
    name.forEach(name =>{
        if (req.query.name == name){
            result = 'True'
        }

    })
    
    res.send(result);
});

app.listen(3000);
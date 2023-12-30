const data = ['윤기','한나','민기','동헌'];
const express = require('express');
const app = express();

app.get('/search', function (req, res) {
    let name = req.query.name;

    // name이 data 배열에 존재하는지 확인
    if (data.includes(name)) {
        res.send('True');
    } else {
        res.send('False');
    }
})

app.listen(3000, () => {
    console.log('서버가 3000번 포트에서 실행 중입니다');
});

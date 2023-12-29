const express = require('express');
const app = express();

const dummyData = { '동헌': ['동헌'] };

// 라우트 설정
app.get('/search', (req, res) => {
    const name = req.query.name;

    // dummyData 객체에 name 키가 존재하고, 해당 배열에 name이 포함되어 있는지 확인
    const exists = dummyData[name] ? dummyData[name].includes(name) : false;
    
    // 결과 반환
    res.send(exists ? 'true' : 'false');
});

// port:3000 리스닝
app.listen(3000, () => {
    console.log('Server Running Port(3000)')
})
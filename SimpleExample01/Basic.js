const express = require('express');
const app = express();

/**
 * @param 이름 : Key
 * @Param ['동헌', '윤기'] : Value
 */
const dummyData = { 
    '이름': ['동헌', '윤기']
};

// 라우트 설정
app.get('/search', (req, res) => {
    
    const name = req.query.name;

    // '이름' 키의 값에 name이 포함되어 있는지 확인
    const exists = dummyData['이름'].includes(name);
    
    // 결과 반환
    res.send(exists ? 'true' : 'false');
});

// port:3000 리스닝
app.listen(3000, () => {
    console.log('Server Running Port(3000)')
})
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// MySQL 데이터베이스 설정
const connection = mysql.createConnection({
    host: process.env.DBHOST || 'database',
    port: 3306, // 포트 번호 별도 지정
    user: 'mysql_user',
    password: 'mysql_password',
    database: 'visitlog',
    charset: 'utf8mb4'
});

// 루트 경로
app.get('/', (req, res) => {
  res.send('Backend Server');
});

// 방문 기록 조회
app.get('/visits', (req, res) => {
  connection.query('SELECT * FROM visits', (error, results, fields) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ error: 'Failed to retrieve visits' });
    }

    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.status(200).json({ visits: results });
  });
});

// 방문 기록 추가
app.post('/visits', (req, res) => {
  try {
    const visitorName = req.body.name;
    if (!visitorName) {
      return res.status(400).json({ error: 'Visitor name is required' });
    }

    const sqlQuery = 'INSERT INTO visits (visitor_name) VALUES (?)';
    connection.query(sqlQuery, [visitorName], (error, results, fields) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ error: 'Failed to add visitor' });
      }

      res.status(200).json({ message: 'Visitor added successfully' });
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: e.message });
  }
});


// 서버 시작
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});

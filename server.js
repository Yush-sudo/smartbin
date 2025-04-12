const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname));
app.use(express.json());

const dummyUser = { username: 'admin', password: 'admin123' };
const dummyStats = { dry: 35, wet: 40, metal: 25 };

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === dummyUser.username && password === dummyUser.password) {
    res.json({ success: true, stats: dummyStats });
  } else {
    res.json({ success: false });
  }
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});

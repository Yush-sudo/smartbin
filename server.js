import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(__dirname));
app.use(express.json());

const dummyUser = { username: 'admin', password: 'admin123' };
const dummyStats = { dry: 80, wet: 100, metal: 30 }; // wet bin is full

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === dummyUser.username && password === dummyUser.password) {
    res.json({ success: true, stats: dummyStats });
  } else {
    res.json({ success: false });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

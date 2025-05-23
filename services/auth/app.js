const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

const users = [
  { id: 1, username: 'admin', role: 'admin' },
  { id: 2, username: 'user', role: 'user' }
];

app.get('/auth/users', (req, res) => {
  res.json(users);
});

app.get('/auth/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).send('User not found');
  res.json(user);
});

app.listen(PORT, () => {
  console.log(`Auth service running on port ${PORT}`);
});

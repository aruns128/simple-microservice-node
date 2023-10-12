// user-service.js
const express = require('express');
const app = express();
const port = 3001;

app.use(express.json());

const users = [];

app.post('/user', (req, res) => {
  const { username, email } = req.body;
  console.log(username, email)
  users.push({ username, email });
  res.json({ message: 'User created' });
});

app.get('/users', (req, res) => {
  res.json(users);
});

app.listen(port, () => {
  console.log(`User service is running on port ${port}`);
});

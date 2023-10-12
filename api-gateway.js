// api-gateway.js
const express = require('express');
const axios = require('axios');
const app = express();
const cors = require('cors');
const port = 3000;

app.use(express.json());

app.use(cors());

const userServiceUrl = 'http://localhost:3001';
const productServiceUrl = 'http://localhost:3002';

app.post('/user', async (req, res) => {
  try {
    const response = await axios.post(`${userServiceUrl}/user`, req.body);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'User creation failed' });
  }
});

app.get('/users', async (req, res) => {
  console.log("called users")
  try {
    const response = await axios.get(`${userServiceUrl}/users`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'User retrieval failed' });
  }
});

app.post('/product', async (req, res) => {
  try {
    const response = await axios.post(`${productServiceUrl}/product`, req.body);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Product creation failed' });
  }
});

app.get('/products', async (req, res) => {
  try {
    const response = await axios.get(`${productServiceUrl}/products`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Product retrieval failed' });
  }
});

app.listen(port, () => {
  console.log(`API Gateway is running on port ${port}`);
});

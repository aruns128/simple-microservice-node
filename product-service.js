// product-service.js
const express = require('express');
const app = express();
const port = 3002;

app.use(express.json());

const products = [];

app.post('/product', (req, res) => {
  const { name, price } = req.body;
  products.push({ name, price });
  res.json({ message: 'Product created' });
});

app.get('/products', (req, res) => {
  res.json(products);
});

app.listen(port, () => {
  console.log(`Product service is running on port ${port}`);
});

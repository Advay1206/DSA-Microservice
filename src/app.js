const express = require('express');
const validParenthesesRoute = require('./routes/validParentheses');
const lruCacheRoute = require('./routes/lruCache');

const app = express();
app.use(express.json());

// Routes
app.use('/valid-parentheses', validParenthesesRoute);
app.use('/lru-cache', lruCacheRoute);

app.get('/', (req, res) => {
  res.json({ message: "DSA Microservice API is running 🚀" });
});

module.exports = app;

const express = require('express');
const LRUCache = require('../utils/LRUCache');
const router = express.Router();

router.post('/', (req, res) => {
  const { capacity, operations } = req.body;

  if (!capacity || !operations) {
    return res.status(400).json({ error: "Please provide capacity and operations" });
  }

  const cache = new LRUCache(capacity);
  const results = [];

  for (let op of operations) {
    const [command, key, value] = op;
    if (command === "put") {
      cache.put(key, value);
      results.push(null);
    } else if (command === "get") {
      results.push(cache.get(key));
    }
  }

  return res.json({ results });
});

module.exports = router;

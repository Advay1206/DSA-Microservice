const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const s = req.body.s || "";
  const stack = [];
  const map = { ')':'(', ']':'[', '}':'{' };

  for (let ch of s) {
    if (['(', '[', '{'].includes(ch)) {
      stack.push(ch);
    } else if (map[ch]) {
      if (stack.pop() !== map[ch]) return res.json({ valid: false });
    }
  }
  return res.json({ valid: stack.length === 0 });
});

module.exports = router;

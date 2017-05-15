const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  res.render('hello', {
    title : 'Home Page',
    test : "Hey Isabel!",
  })
});

module.exports = router;
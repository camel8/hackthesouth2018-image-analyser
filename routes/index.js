const express = require('express');

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  res.render('index', {
    title: 'The n00bs',
  });
});

module.exports = router;

const express = require('express');
const multer = require('multer');

const upload = multer({
  storage: multer.memoryStorage(),
});

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  res.render('index', {
    title: 'The n00bs',
  });
});

router.post('/extractText', upload.single('datafile'), (req, res) => {
  if (!req.file) {
    return res.send('failed');
  }

  return res.send(req.file);
});

module.exports = router;

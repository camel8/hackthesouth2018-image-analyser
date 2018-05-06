const express = require('express');
const multer = require('multer');
const path = require('path');
const vision = require('@google-cloud/vision');

const upload = multer({
  storage: multer.memoryStorage(),
});

const client = new vision.ImageAnnotatorClient({
  keyFilename: path.join(__dirname, '../Tester-eaa940c28ba9.json'),
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

  client.documentTextDetection(req.file.buffer).then((response) => {
    console.log(response);
  }).catch((err) => {
    console.error(err);
  });

  return res.send(req.file);
});

module.exports = router;

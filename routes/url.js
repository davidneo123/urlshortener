const express = require('express');
const validUrl = require('valid-url');
const shortid = require('shortid');

const router = express.Router();

const Url = require('../models/urlModel');

const baseUrl = 'http://localhost:5000';

router.post('/shorten', async (req, res) => {
  console.log(req.body);
  const { longUrl } = req.body;
  if (!validUrl.isUri(baseUrl)) {
    return res.status(401).json('invalid base URL')
  }
  const urlCode = shortid.generate();
  if (validUrl.isUri(longUrl)) {
    try {
      let url = await Url.findOne({
        longUrl
      });
      if (url) {
        res.json(url);
      } else {
        const shortUrl = baseUrl + '/' + urlCode;
        url = new Url({
          longUrl,
          shortUrl,
          urlCode,
          date: new Date()
        });
        await url.save();
        res.json(url);
      }
    } catch (err) {
      console.error(err)
      res.status(500).json('Internal server error');
    }
  } else {
    res.status(401).json('Invalid long url');
  }
});

module.exports = router;
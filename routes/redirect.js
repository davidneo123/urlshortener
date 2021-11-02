const express = require('express');
const router = express.Router();
const Url = require('../models/urlModel');

router.get('/:code', async (req, res) => {
  try {
    const url = await Url.findOne({
      urlCode: req.params.code
    });
    if (url) {
      return res.redirect(url.longUrl);
    } else {
      return res.status(401).json('no url found')
    }
  } catch (err) {
    console.error(err);
    res.status(500).json('Internal Server error');

  }
})

module.exports = router;

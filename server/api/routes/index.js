var express = require('express');
var router = express.Router();
 
/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({msg: 'works, yeye!'})
});

router.post('/display/text', function (req, res, next) {
    let text = req.body.text
    // TODO: Arduino.displayText(text)
    // TODO: Arduino.displayImage(img)
})


module.exports = router;
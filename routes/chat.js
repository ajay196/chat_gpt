var express = require('express');
var router = express.Router();
const {chatController} = require('../controller/chatController')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
 
router.post('/chat', chatController)
module.exports = router;

const express = require('express');
const router = express.Router();

const blogController = require('../Controllers/blogcontroller');


router.post('/addblog', blogController.addblog);
router.get('/getall', blogController.getall);
router.post('/getid', blogController.getid);

module.exports = router;

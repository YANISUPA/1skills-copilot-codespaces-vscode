// create web servver
===============================================*/

import module
const express = require('express');
const router = express.Router();
const commentcontroller = require('../controllers/comments');

hendle request
router.post('/add', commentcontroller.add);
router.get('/list/:id', commentcontroller.list);
router.get('/list', commentcontroller.list);
router.put('/update/:id', commentcontroller.update);
router.delete('/delete/:id', commentcontroller.delete);

export
module.exports = router;router.post('/addcomment', commentcontroller.addcomment);
router.get('/getcomment', commentcontroller.getcomment);
router.get('/getcomment/:id', commentcontroller.getcommentbyid);

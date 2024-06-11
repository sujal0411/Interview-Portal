var express = require('express');
var router = express.Router();
var USERC = require("../controller/user");

/* GET users listing. */
router.post('/Register', USERC.UserCreate);
router.post('/Signin', USERC.UserLogin);
router.get('/', USERC.Sequre,USERC.ViewUser);
router.patch('/:id',USERC.Sequre, USERC.UpdateUser);


module.exports = router;

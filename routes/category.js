var express = require('express');
var router = express.Router();
var CATEGORYc = require("../controller/category");
var USERC = require("../controller/user");

/* GET users listing. */
router.post('/CreateCategory',USERC.Sequre, CATEGORYc.CreateCategory);
router.get('/', USERC.Sequre,CATEGORYc.ViewCategory);
router.patch('/:id',USERC.Sequre, CATEGORYc.UpdateCategory);
router.delete('/:id',USERC.Sequre, CATEGORYc.DeleteCategory);


module.exports = router;

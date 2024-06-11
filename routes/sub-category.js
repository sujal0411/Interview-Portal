var express = require('express');
var router = express.Router();
var SUBCATEGORYC = require("../controller/sub-category");
var USERC = require("../controller/user");
/* GET users listing. */
router.post('/SubcategoryAdd', USERC.Sequre,SUBCATEGORYC.SubcategoryAdd);
router.get('/', USERC.Sequre,SUBCATEGORYC.ViewSubcategory);
router.patch('/:id',USERC.Sequre, SUBCATEGORYC.UpdateSubcategory);
router.delete('/:id', USERC.Sequre,SUBCATEGORYC.DeleteSubcategory);

module.exports = router;

var express = require('express');
var router = express.Router();
let AQC = require("../controller/ansqus");
let USERC = require("../controller/user")

/* GET users listing. */
router.post('/QaCreate', USERC.Sequre,AQC.QaCreate);
router.get('/',USERC.Sequre, AQC.QaView);
router.patch('/:id', USERC.Sequre,AQC.QaUpdate);
router.delete('/:id', USERC.Sequre,AQC.QaDelete);


module.exports = router;

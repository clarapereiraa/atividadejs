const router = require('express').Router();

const controllersNumber = require('../controllers/controllersNumber');

// Rota POST para '/teacher'
router.post('/teacher/', controllersNumber.postTeacher);
router.get('/teacher/', controllersNumber.getTeacher);
module.exports = router

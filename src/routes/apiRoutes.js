const router = require('express').Router();

const teacherControllers = require('../controllers/teacherControllers');

// Rota POST para '/teacher'
router.post('/teacher/', teacherControllers.postTeacher);
router.get('/teacher/', teacherControllers.getTeacher);
module.exports = router

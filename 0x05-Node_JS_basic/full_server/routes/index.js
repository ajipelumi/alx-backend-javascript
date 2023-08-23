import express from 'express';
import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

const router = express.Router();

// Create a GET / route
router.get('/', AppController.getHomepage);

// Create a GET /students route
router.get('/students', StudentsController.getAllStudents);

// Create a GET /students/:major route
router.get('/students/:major', StudentsController.getAllStudentsByMajor);

export default router;

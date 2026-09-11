import express from 'express';
import { getTasks, createTask, updateTask, deleteTask } from '../controllers/taskController.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();

router.get('/tasks', auth, getTasks);
router.post('/tasks', auth, createTask);
router.put('/tasks/:id', auth, updateTask);
router.delete('/tasks/:id', auth, deleteTask);

export default router;

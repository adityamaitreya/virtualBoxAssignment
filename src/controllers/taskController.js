import { tasks } from '../models/db.js';

export const getTasks = (req, res) => {
  const userTasks = tasks.filter(t => t.userId === req.userId);
  res.json(userTasks);
};

export const createTask = (req, res) => {
  const { title, description } = req.body;
  
  if (!title || !description) {
    return res.status(400).json({ error: 'Title and description required' });
  }
  
  const task = {
    id: Date.now().toString(),
    userId: req.userId,
    title,
    description,
    createdAt: new Date().toISOString()
  };
  
  tasks.push(task);
  res.json(task);
};

export const updateTask = (req, res) => {
  const task = tasks.find(t => t.id === req.params.id && t.userId === req.userId);
  
  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }
  
  const { title, description } = req.body;
  if (title) task.title = title;
  if (description) task.description = description;
  
  res.json(task);
};

export const deleteTask = (req, res) => {
  const index = tasks.findIndex(t => t.id === req.params.id && t.userId === req.userId);
  
  if (index === -1) {
    return res.status(404).json({ error: 'Task not found' });
  }
  
  tasks.splice(index, 1);
  res.json({ message: 'Task deleted' });
};

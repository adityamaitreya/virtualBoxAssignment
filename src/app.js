import express from 'express';
import authRoutes from './routes/authRoutes.js';
import taskRoutes from './routes/taskRoutes.js';

const app = express();

app.use(express.json());
app.use(express.static('public'));

app.use('/api', authRoutes);
app.use('/api', taskRoutes);

export default app;

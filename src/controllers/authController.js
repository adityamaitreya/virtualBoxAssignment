import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { users } from '../models/db.js';
import { SECRET } from '../middleware/auth.js';

export const register = async (req, res) => {
  const { email, password } = req.body;
  
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password required' });
  }
  
  if (!email.includes('@')) {
    return res.status(400).json({ error: 'Invalid email format' });
  }
  
  if (users.find(u => u.email === email)) {
    return res.status(400).json({ error: 'User already exists' });
  }
  
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = { 
    id: Date.now().toString(), 
    email, 
    password: hashedPassword 
  };
  users.push(user);
  
  res.json({ message: 'Registration successful' });
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  
  const user = users.find(u => u.email === email);
  if (!user) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
  
  const valid = await bcrypt.compare(password, user.password);
  if (!valid) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
  
  const token = jwt.sign({ id: user.id }, SECRET);
  res.json({ token });
};

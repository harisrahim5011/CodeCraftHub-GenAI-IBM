import { Request, Response } from 'express';
import { registerUser, authenticateUser } from '../services/user.service';

export const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    const user = await registerUser(name, email, password);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await authenticateUser(email, password);
    res.status(200).json(user);
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
};

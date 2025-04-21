import { Request, Response, NextFunction } from 'express';  // Importing types from express for request, response, and next

/**
 * Middleware to check if the user is authorized.
 * 
 * This middleware checks if the request has an 'Authorization' header with a token.
 * - If the token is not present, the middleware sends a 401 Unauthorized response.
 * - If the token is present, it proceeds to the next middleware or route handler.
 */
export const requireAuth = (req: Request, res: Response, next: NextFunction) => {
  // Extract the token from the 'Authorization' header
  const token = req.headers.authorization;

  // If no token is provided, return a 401 Unauthorized response
  if (!token) return res.status(401).json({ error: 'Unauthorized' });

  // Token validation logic would go here.
  // This is where you would validate the token (e.g., JWT verification).
  // Example: jwt.verify(token, SECRET_KEY, (err, decoded) => { ... });

  // If the token is valid, continue to the next middleware or route handler
  next();
};

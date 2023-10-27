import express from 'express';
import isAuthenticated from '../authentication/authMiddleware.js';

const router = express.Router();

// Protected route that requires authentication
router.get('/dashboard', isAuthenticated, (req, res) => {
    res.send(`Welcome, ${req.user.name}!`);
});

export default router;
// loginRouter.js
import express from 'express';
import passport from '../authentication/passport.js';

const router = express.Router();

// Handle login form submission
router.post('/', passport.authenticate('local'), (req, res) => {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    res.json({ message: 'Login successful', user: req.user });
});

export default router;

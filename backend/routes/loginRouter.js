// loginRouter.js
import express from 'express';
import passport from '../authentication/passport.js';

const router = express.Router();

// Handle login form submission
router.post('/', passport.authenticate('local'), (req, res) => {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.

    // Assuming you have the user's role in req.user.role
    const { role } = req.user;

    // Provide the full URL, including the domain and port, in the redirectTo property
    // const redirectTo = `${process.env.FRONTEND_BASE_URL}/dashboard/${role}`;
    const redirectTo = `http://localhost:5173/dashboard/${role}`;

    res.json({ message: 'Login successful', redirectTo, user: req.user });
});

export default router;

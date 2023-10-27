import express from 'express';
// import passport from 'passport';
import bcrypt from 'bcrypt';
import { User } from '../models/userModel.js';

const router = express.Router();

// // Registration form
// router.get('/register', (req, res) => {
//     res.render('registerForm'); // You may use a template engine like EJS or send a JSON response for an API
// });

// Route for create a new user
router.post('/', async (req, res) => {
    try {
        if (!req.body.name || !req.body.address || !req.body.email || !req.body.phone || !req.body.secretKey || !req.body.password) {
            return res.status(400).send({
                message: "Send all required fields: name, address, email, phone, secretKey, password",
            });
        }

        const { name, address, email, phone, secretKey, password } = req.body;

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = {
            name,
            address,
            email,
            phone,
            secretKey,
            password: hashedPassword, // Save the hashed password to the database
        };

        const user = await User.create(newUser);

        return res.status(201).send(user);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});
export default router;

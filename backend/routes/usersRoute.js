import express from 'express';
import { User } from "../models/userModel.js";

const router = express.Router();

// Route for get all users from database
router.get('/', async (req, res) => {
    try {
        const users = await User.find({});

        return res.status(200).json({
            count: users.length,
            data: users,
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

// Route for get all users from database by id
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);

        if(!user) {
            return res.status(404).send({ message: 'User not found' });
        }

        return res.status(200).json(user);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

// Route for update a user
router.put('/:id', async (req, res) => {
    try {
        if (!req.body.name || !req.body.address || !req.body.email || !req.body.phone) {
            return res.status(400).send({
                message: "Send all required fields: name, address, email, phone",
            });
        }

        const { id } = req.params;

        const result = await User.findByIdAndUpdate(id, req.body);

        if (!result) {
            return res.status(404).json({ message: 'User not found' });
        }

        return res.status(200).send({ message: 'User updated successfully' });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

// Route for delete a user
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const result = await User.findByIdAndDelete(id);

        if(!result) {
            return res.status(404).send({ message: 'User not found' });
        }

        return res.status(200).send({ message: 'User deleted successfully' });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});


export default router;
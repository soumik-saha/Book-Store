import express from "express";
import { PORT, mongoDBURL } from "./config/config.js";
import mongoose from "mongoose";
// import { Book } from "./models/bookModel.js";
import booksRoute from './routes/booksRoute.js';
import usersRoute from './routes/usersRoute.js';
import cors from 'cors';
import flash from 'express-flash';
import session from 'express-session';
import passport from './authentication/passport.js';
import registrationRouter from './routes/registrationRouter.js';
import loginRouter from './routes/loginRouter.js';
// import { User } from "./models/userModel.js";
import isAuthenticated from './authentication/authMiddleware.js';
import protectedRoutes from './routes/protectedRoutes.js';

const app = express();

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS policy
// Option 1: Allow all origins with default of cors(*)
app.use(cors());
// Option 2: Allow Custom Origins
// app.use(
//     cors({
//         origin: 'http://localhost:3000/',
//         methods: ['GET', 'POST', 'PUT', 'DELETE'],
//         allowedHeaders: ['Content-Type'],
//     })
// );

// Middlewares for passport.js
app.use(session({ secret: 'your-secret-key', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.get("/", (req, res) => {
    console.log(req);
    return res.status(234).send("Welcome to BOOKSHOP AUTOMATION SYSTEM");
});

app.use('/books', booksRoute);
app.use('/users', usersRoute);
app.use('/register', registrationRouter);
app.use('/login', loginRouter);
app.use('/protected', protectedRoutes);

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log("App connected to database");
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`);
        });
    })
    .catch((err) => {
        console.log(err);
    });

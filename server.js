// Import statements
import express from 'express';
import mongoose from 'mongoose';
import session from 'express-session';
import cors from 'cors';
import bcrypt from 'bcrypt';
import MongoStore from 'connect-mongo';
import dotenv from 'dotenv/config'; // Considered best practice to import as 'dotenv/config'
import connectDB from './config/database.js';
import router from './routes/index.js'; 
import './config/database.js'; 

// Initialize express app
const app = express();
const PORT = process.env.PORT || 3000;

// Static files
app.use(express.static('front-end'));

// CORS configuration
const corsOptions = {
    origin: '*', 
    credentials: true 
};
app.use(cors(corsOptions));

// Body Parser Middleware
app.use(express.json());

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Session configuration
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
        mongoUrl: process.env.MONGO_URI, 
        collectionName: 'sessions'
    }),
    cookie: {
        secure: false,
        maxAge: 1000 * 60 * 60 * 24 // 1 day
    }
}));

// API routes
app.use('/api', router);

// Redirect root to /api/cars
app.get('/', (req, res) => {
    res.redirect('/api/cars');
});

// Start server and connect to DB
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
connectDB();

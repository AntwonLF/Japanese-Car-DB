// Import statements
import express from 'express';
import mongoose from 'mongoose';
import session from 'express-session';
import cors from 'cors';
import router from './routes/index.js'; 
import 'dotenv/config.js';
import connectDB from './config/database.js';
import bcrypt from 'bcrypt';
import MongoStore from 'connect-mongo';

// Initialize express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for serving static files
app.use(express.static('front-end'));

// CORS configuration
const corsOptions = {
    origin: '*', 
    credentials: true 
};

// Middleware for parsing JSON
app.use(express.json());

// Error handling middleware
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
        mongoUrl: 'mongodb+srv://Test1234:Test1234@cluster0.16dhpdw.mongodb.net/Japanes-Car-API?retryWrites=true&w=majority',
        collectionName: 'sessions'
    }),
    cookie: { 
        secure: false,
        maxAge: 1000 * 60 * 60 * 24 // 24 hours
    }
}));

// Routing configuration
app.use('/api', cors(corsOptions), router);

// Root route redirect
app.get('/', (req, res) => {
    res.redirect('/api/cars');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// Connect to database
connectDB();

import express from 'express';
import mongoose from 'mongoose';
import session from 'express-session';
import router  from './routes/express.js'; 
import './config/database.js'; 
import 'dotenv/config.js';
import connectDB from './config/database.js';


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Session configuration
app.use(session({
    secret: 'your secret key',
    resave: false,
    saveUninitialized: false,
}));

// Use the routes
app.use('/api', router);


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

connectDB();
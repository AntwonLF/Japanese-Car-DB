import express from 'express';
import mongoose from 'mongoose';
import session from 'express-session';
import cors from 'cors';
import router  from './routes/express.js'; 
import './config/database.js'; 
import 'dotenv/config.js';
import connectDB from './config/database.js';
import bcrypt from 'bcrypt'
import MongoStore from 'connect-mongo';



const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('front-end'));
app.use(cors({
    origin: 'http://127.0.0.1:5501',
    credentials: true
}));
app.use(express.json());
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
    maxAge: 1000 * 60 * 60 * 24
    }
}));

// Use the routes
app.use('/api', router);
app.get('/', (req, res) => {
    res.redirect('/api/cars');
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


connectDB();
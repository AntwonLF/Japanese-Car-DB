import 'dotenv/config.js';
import mongoose from 'mongoose';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import Car  from '../models/Car.js'; 

const __dirname = path.dirname(fileURLToPath(import.meta.url));


// Connection to DB
const start = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URI);
        console.log('Connected to MongoDB');

        // Read the JSON file
        const data = fs.readFileSync(path.join(__dirname, '..', 'data', 'car.json'), 'utf-8');
        const cars = JSON.parse(data);

        // Insert data into the database
        await Car.insertMany(cars);
        console.log('Database has been seeded with car data');

        // Close the database connection
        mongoose.connection.close();
    } catch (error) {
        console.error('Error seeding the database:', error);
        process.exit(1);
    }
};

start();

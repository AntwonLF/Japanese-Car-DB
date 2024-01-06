import mongoose from 'mongoose';
import 'dotenv/config';

const DB_CONNECTION_SUCCESS = `Connected to MongoDB at `;
const DB_CONNECTION_ERROR = 'Database connection error: ';
const DB_ERROR = 'MongoDB error: ';

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URI);
        const db = mongoose.connection;
        console.log(`${DB_CONNECTION_SUCCESS}${db.host}:${db.port}`);
    } catch (error) {
        console.error(`${DB_CONNECTION_ERROR}`, error);
        process.exit(1); 
    }
};

mongoose.connection.on('error', err => {
    console.error(`${DB_ERROR}`, err);
});

export default connectDB;

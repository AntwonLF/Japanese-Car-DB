import mongoose from 'mongoose';
import 'dotenv/config';

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URI);
        const db = mongoose.connection;
        console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`);
    } catch (error) {
        console.error('Database connection error:', error);
        process.exit(1);
    }
};

mongoose.connection.on('error', err => {
    console.error('MongoDB error:', err);
});

export default connectDB;

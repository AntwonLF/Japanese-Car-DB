import mongoose from 'mongoose'
import Car from '../models/Car.js'

const Schema = mongoose.Schema

const userSchema = new Schema({
    email: String, 
    password: String,
    profileName: { 
        type: String, 
        unique: true, 
        required: true, 
        maxLength: 15 
    },
    avatar: {
        type: String,
        required: true
    },
    userCar: [Car.schema],
    likedCars: [Car.schema],
   
});

const User = mongoose.model('User', userSchema)

export default User
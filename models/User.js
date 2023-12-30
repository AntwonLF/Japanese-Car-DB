import mongoose from "mongoose"
import Car from '../models/Car'


const userSchema = new mongoose.Schema({
    email: String,
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
    password: String 
});

const User = mongoose.model('User', userSchema)

export {
    User
}
import mongoose from 'mongoose'
import bcrypt from 'bcrypt';
import Car from '../models/Car.js'

const Schema = mongoose.Schema

const userSchema = new Schema({
    email: String, 
    password: String,
    // profileName: { 
    //     type: String, 
    //     unique: true, 
    //     required: true, 
    //     maxLength: 15 
    // },
    // avatar: {
    //     type: String,
    //     required: true
    // },
    userCar: [Car.schema],
    likedCars: [Car.schema],
   
});

userSchema.methods.comparePassword = function(candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model('User', userSchema)

export default User
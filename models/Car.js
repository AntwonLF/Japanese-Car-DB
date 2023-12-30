import mongoose from "mongoose"

const Schema = mongoose.Schema

const carSchema = new mongoose.Schema({
    make: String,
    model: String,
    year: Number,
    picture: String 
})

const Car = mongoose.model('Car', carSchema)

export {
    Car
}
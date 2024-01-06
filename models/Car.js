import mongoose from 'mongoose'

const Schema = mongoose.Schema

const carSchema = new Schema({
    make: String,
    model: String,
    year: Number,
    picture: String,
    likes: {
        type: Number,
        default: 0
    }
})

const Car = mongoose.model('Car', carSchema)

export default Car
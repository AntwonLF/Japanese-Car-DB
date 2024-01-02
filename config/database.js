import mongoose from 'mongoose'

const db = mongoose.connection

mongoose.connect('mongodb+srv://Test1234:Test1234@cluster0.16dhpdw.mongodb.net/Japanese-car-API?retryWrites=true&w=majority')

db.on('connected', () => {
console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`)
})
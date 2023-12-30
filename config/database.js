import mogoose from 'mongoose'

const db = mongoose.connection

mogoose.connect(process.env.DATABASE_URI)

db.on('connected', () => {
console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`)
})
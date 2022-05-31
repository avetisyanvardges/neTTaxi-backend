import mongoose from 'mongoose'

const User = new mongoose.Schema({
    phone_number: {type:String, required: true},
    verify_code: {type: String, required: true}
})

export default mongoose.model('User', User)

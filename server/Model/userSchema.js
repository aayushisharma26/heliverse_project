import mongoose from '../mongoose.js'; 
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['Principal', 'Teacher', 'Student'],
        required: true
    }
});

const User = mongoose.model('User', userSchema);
export default User;

// mongoose.js
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/Heliverse', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('Connection failed', err));

export default mongoose;

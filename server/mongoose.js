import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/Heliverse' 
)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('Connection failed', err));

export default mongoose;

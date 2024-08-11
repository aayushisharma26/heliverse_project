import express from 'express';
import mongoose from './mongoose.js';
import userRoutes from './Routes/userRoutes.js';

const app = express();
app.use(express.json());

app.use('/api', userRoutes); 

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

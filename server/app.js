import express from 'express';
import mongoose from './mongoose.js';
import userRoutes from './Routes/userRoutes.js';
import classroomRoutes from './Routes/classroomRoutes.js';
import cors from 'cors'; 
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors({
    origin: 'http://localhost:5173', 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true 
}));

app.use(express.json());

app.use('/api/users', userRoutes); 
app.use('/api/classrooms', classroomRoutes); 

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

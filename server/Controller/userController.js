import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '..//Model/userSchema.js'; 

const register = async (req, res) => {
    const { name, password, email,role } = req.body;

    try {
        const existingUser = await User.findOne({ name });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            name,
            email,
            password: hashedPassword,
            role
        });

        await newUser.save();
        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
};

// Login user
const login = async (req, res) => {
    const { name, password } = req.body;

    try {
        const user = await User.findOne({ name });
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign({ id: user._id, role: user.role }, 'secret', { expiresIn: '1h' });

        res.status(200).json({ token, user: { name: user.name, role: user.role } });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
};


const getUserStatus = async (req, res) => {
    try {
        const users = await User.find({}); // Use `await` to wait for the query to complete
        res.status(200).json(users); // Send the retrieved users as a JSON response
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" }); // Handle any potential errors
    }
};

export { register,login,getUserStatus }; 

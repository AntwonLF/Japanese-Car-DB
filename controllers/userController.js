import User from '../models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';



export const registerUser = async (req, res) => {
    try {
        const { password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ ..req.body, password: hashedPassword });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user || !await bcrypt.compare(password, user.password)) {
            return res.status(401).json({ message: 'Invalid credentails' });
        }
        const token = jwt.sign({ id: user._id }, SECRET_KEY, { expiresIn: '1h' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
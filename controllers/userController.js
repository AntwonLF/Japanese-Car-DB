import User from '../models/User';
import Car from '../models/Car'
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



// Icebox Goals


// function to create a user profile
export const createUserProfile = async (req, res) => {
 try {
    const newUser = new User(req.body);
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
 } catch (error) {
    res.status(400).json({ message: error.message });
   }
};

// Function to add a car to a user's profile
export const addCarToUserProfile = async (req, res) =>  { 
   try {
    const user = await User.findById(req.params.userId);
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    const newcar = new Car(req.body);
    const savedCar = await newcar.save();
    user.userCar.push(savedCar);
    await user.save();
    res.status(201).json(user);
   } catch (error) {
    res.status(400).json({ message: error.message });
   }
};

// Function to update a car in a user's profile
export const updateCarInUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        const car = await Car.findByIdAndUpdate(req.params.carId, req.body, { new: true });
        // Find and update the car in the user's profile
        const carIndex = user.userCar.findIndex(c => c._id.toString() === req.params.carId);
        if (carIndex > -1) {
            user.userCar[carIndex] = car;
            await user.save();
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: 'Car not found in user profile' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Function to like a car and add to user's liked cars
export const likeCar = async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        const car = await Car.findById (req.params.carId);
        if(!user || !car) {
            return res.status(404).json({ message: 'User or Car not found' });
        }
        user.likedCars.push(car);
        await user.save();
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const unlikeCar = async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        user.likedCars = users.likedCars.filter(car => car._id.toString() !== req.params.carId);
        await user.save();
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

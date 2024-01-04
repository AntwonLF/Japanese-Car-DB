import bcrypt from 'bcrypt';
import User from '../models/User.js';
import Car from '../models/Car.js';




 const registerUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        //check if email already exists
        const existingUser = await User.findOne ({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already in use." });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ ...req.body, password: hashedPassword });
        const savedUser = await newUser.save();

        res.status(201).json({ message: "User registered successfully", user: savedUser });
    } catch (error) {
        if (error.code === 11000) {
            return res.status(400).json({ message: 'Email already in use' });
        }
        res.status(500).json({ message: 'Server error' });
    }
};

 const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({ message: 'Invalid credentails' });
        }
            
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        
        // Instead of creating a JWT token, initialize a session
        req.session.userId = user._id;
        res.json({ message: 'Login successful', userId: user._id });

    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// const logoutUser = (req, res) => {
//     req.session.destroy(err => {
//         if (err) {
//             return res.status(500).json({ message: 'Error occurred during logout' });
//         }
//         res.json({ message: 'Logout successful' });
//     });
// };





// Icebox Goals


// Function to add a car to a user's profile
 const addCarToUserProfile = async (req, res) =>  { 
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
const updateCarInUserProfile = async (req, res) => {
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
 const likeCar = async (req, res) => {
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


// Function to unlike a car and remove from user's liked cars
const unlikeCar = async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        user.likedCars = user.likedCars.filter(car => car._id.toString() !== req.params.carId);
        await user.save();
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export {
    registerUser,
    loginUser,
    // logoutUser,
    addCarToUserProfile,
    updateCarInUserProfile,
    likeCar,
    unlikeCar
}

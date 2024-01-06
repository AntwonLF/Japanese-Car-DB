import { Router } from 'express';
import { getAllCars, createCar, getCarById } from '../controllers/carController.js';
import { registerUser, loginUser, logoutUser, getUserById, addCarToUserProfile, updateCarInUserProfile, likeCar, unlikeCar } from '../controllers/userController.js';

const router = Router();

// Car-related routes
router.get('/cars', getAllCars); // Get all cars
router.get('/cars/:id', getCarById); // Get a specific car by ID
router.post('/cars', createCar); // Create a new car

// User authentication routes
router.post('/users/register', registerUser); // Register a new user
router.post('/users/login', loginUser); // Login a user
router.post('/users/logout', logoutUser); // Logout a user
router.get('/users/:id', getUserById); // Get a specific user by ID


// User profile and interactions routes
router.post('/users/:userId/cars', addCarToUserProfile); // Add a car to a user's profile
router.put('/users/:userId/cars/:carId', updateCarInUserProfile); // Update a car in a user's profile
router.post('/users/:userId/like/:carId', likeCar); // Like a car
router.post('/users/:userId/unlike/:carId', unlikeCar); // Unlike a car

export default router;

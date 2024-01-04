import { Router } from 'express';
import bcrypt from 'bcrypt';
import { getAllCars, createCar, getCarById, updateCar, deleteCar } from '../controllers/carController.js';
import { registerUser, loginUser, addCarToUserProfile, updateCarInUserProfile, likeCar, unlikeCar } from '../controllers/userController.js';



const router = Router();

// Car routes
router.get('/cars', getAllCars);
router.get('/cars/:id', getCarById);

router.post('/cars', createCar);
router.put('/cars/:id', updateCar);
router.delete('/cars/:id', deleteCar);

// User routes
router.post('/users/register', registerUser);
router.post('/users/login', loginUser);

// User profile routes
router.post('/users/:userId/cars', addCarToUserProfile)
router.put('/users/:userId/cars/:carId', updateCarInUserProfile);
router.post('/users/:userId/like/:carId', likeCar);
router.post('/users/:userId/unlike/:carid', unlikeCar);

export default router
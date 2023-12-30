import express from 'express';
import { getAllCars, createCar, getCarById, updateCar, deleteCar } from '../controllers/carController';
import { registerUser, loginUser } from '../controllers/userController';


const router = express.Router();

// Car routes
router.get('/cars', getAllCars);
router.post('/cars', createCar);
router.get('/cars/:id', getCarById);
router.put('/cars/:id', updateCar);
router.delete('/cars/:id', deleteCar);

// User routes
router.post('/users/register', registerUser);
router.post('/users/login', loginUser);

export{
    router
}
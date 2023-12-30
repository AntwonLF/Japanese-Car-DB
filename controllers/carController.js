import Car from '../models/Car'

export const getAllCars = async (req, res) => {
    try {
        const cars = await Car.find();
        res.status(200). json(cars);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const getCarById = async (req, res) => {
    try {
        const car = await Car.findById(req.params.id);
        if (!car) {
            return res.status(404).json({ message: 'Car not found' });
        }
        res.status(200).json(car);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createCar = async (req, res) => {
    const newCar = new Car(req. body);
    try {
        const savedCar = await newCar.save();
        res.status(201).json(savedCar);
    } catch (error) {
        res.status(400).json({ messsage: error.message })
    }
};

export const updateCar = async (req, res) => {
    try {
        const updateCar = await Car.findIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedCar);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteCar = async (req, res) => {
    try {
        const deletedCar = await Car.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedCar);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
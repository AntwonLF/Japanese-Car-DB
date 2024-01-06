import Car from '../models/Car.js'

 const getAllCars = async (req, res) => {
    try {
        const cars = await Car.find();
        res.status(200). json(cars);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


 const getCarById = async (req, res) => {
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

 const createCar = async (req, res) => {
    const newCar = new Car(req. body);
    try {
        const savedCar = await newCar.save();
        res.status(201).json(savedCar);
    } catch (error) {
        res.status(400).json({ messsage: error.message })
    }
};




export {
    getAllCars,
    getCarById,
    createCar,
}
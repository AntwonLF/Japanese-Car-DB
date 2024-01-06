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
        const carId = req.params.id;
        if (!mongoose.Types.ObjectId.isValid(carId)) {
            return res.status(400).json({ message: 'Invalid Car ID' });
        }

        const car = await Car.findById(carId);
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
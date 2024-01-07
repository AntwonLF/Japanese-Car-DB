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

const updateCar = async (req, res) => {
    try {
        const { make, model, year } = req.params;
        const updateData = req.body;

        // Find the car by make, model, and year
        const car = await Car.findOne({ make, model, year });

        if (!car) {
            return res.status(404).json({ message: 'Car not found' });
        }

        // Update the car with new data
        const updatedCar = await Car.findByIdAndUpdate(car._id, updateData, { new: true });
        res.status(200).json(updatedCar);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteCar = async (req, res) => {
    try {
        const { make, model, year } = req.params;
        
        const car = await Car.findOne({ make, model, year });

        if (!car) {
            return res.status(404).json({ message: 'Car not found' });
        }
        await Car.findByIdAndDelete(car._id);
        res.status(200).json({ message: 'Car deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};




export {
    getAllCars,
    getCarById,
    createCar,
    updateCar,
    deleteCar
}
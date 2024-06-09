const Dog = require('../models/dog.model.js')

const getDogs = async (req, res) => {
    try {
        const dog = await Dog.find({})
        res.status(200).json(dog);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


const getDog = async (req, res) => {
    try {
        const { id } = req.params;
        const dog = await Dog.findById(id);
        res.status(200).json(dog);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getDogByName = async (req, res) => {
    try {
        const { name } = req.params;
        const dog = await Dog.findOne({ name: name });
        if (!dog) {
            return res.status(404).json({ message: "dog not found" });
        }
        res.status(200).json(dog);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


const createDog = async (req, res) => {
    try {
        const dog = await Dog.create(req.body)
        res.status(200).json(dog);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const updateDog = async (req, res) => {
    try {
        const { id } = req.params;
        const dog = await Dog.findByIdAndUpdate(id, req.body);

        if (!dog) {
            res.status(404).json({ message: "dog not found" });
        }

        const updatedDog = await Dog.findById(id);
        res.status(200).json(updatedDog);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


const deleteDog = async (req, res) => {
    try {
        const { id } = req.params;
        const dog = await Dog.findByIdAndDelete(id, req.body);

        if (!dog) {
            res.status(404).json({ message: "dog not found" });
        }

        res.status(200).json({ message: "dog deleted succesfully" });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}



module.exports = {
    getDogs,
    getDog,
    getDogByName,
    createDog,
    updateDog,
    deleteDog
}
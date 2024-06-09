const Bird = require('../models/bird.model.js')

const getBirds = async (req, res) => {
    try {
        const bird = await Bird.find({})
        res.status(200).json(bird);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


const getBird = async (req, res) => {
    try {
        const { id } = req.params;
        const bird = await Bird.findById(id);
        res.status(200).json(bird);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getBirdByName = async (req, res) => {
    try {
        const { name } = req.params;
        const bird = await Bird.findOne({ name: name });
        if (!bird) {
            return res.status(404).json({ message: "bird not found" });
        }
        res.status(200).json(bird);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


const createBird = async (req, res) => {
    try {
        const bird = await Bird.create(req.body)
        res.status(200).json(bird);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const updateBird = async (req, res) => {
    try {
        const { id } = req.params;
        const bird = await Bird.findByIdAndUpdate(id, req.body);

        if (!bird) {
            res.status(404).json({ message: "Bird not found" });
        }

        const updatedBird = await Bird.findById(id);
        res.status(200).json(updatedBird);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


const deleteBird = async (req, res) => {
    try {
        const { id } = req.params;
        const bird = await Bird.findByIdAndDelete(id, req.body);

        if (!bird) {
            res.status(404).json({ message: "bird not found" });
        }

        res.status(200).json({ message: "bird deleted succesfully" });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}



module.exports = {
    getBirds,
    getBird,
    getBirdByName,
    createBird,
    updateBird,
    deleteBird
}
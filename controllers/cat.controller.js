const Cat = require('../models/cat.model.js')

const getCats = async (req, res) => {
    try {
        const cat = await Cat.find({})
        res.status(200).json(cat);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


const getCat = async (req, res) => {
    try {
        const { id } = req.params;
        const cat = await Cat.findById(id);
        res.status(200).json(cat);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getCatByName = async (req, res) => {
    try {
        const { name } = req.params;
        const cat = await Cat.findOne({ name: name });
        if (!cat) {
            return res.status(404).json({ message: "cat not found" });
        }
        res.status(200).json(cat);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


const createCat = async (req, res) => {
    try {
        const cat = await Cat.create(req.body)
        res.status(200).json(cat);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const updateCat = async (req, res) => {
    try {
        const { id } = req.params;
        const cat = await Cat.findByIdAndUpdate(id, req.body);

        if (!cat) {
            res.status(404).json({ message: "cat not found" });
        }

        const updatedCat = await Cat.findById(id);
        res.status(200).json(updatedCat);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


const deleteCat = async (req, res) => {
    try {
        const { id } = req.params;
        const cat = await Cat.findByIdAndDelete(id, req.body);

        if (!cat) {
            res.status(404).json({ message: "cat not found" });
        }

        res.status(200).json({ message: "cat deleted succesfully" });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}



module.exports = {
    getCats,
    getCat,
    getCatByName,
    createCat,
    updateCat,
    deleteCat
}
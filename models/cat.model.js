
const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');

const CatSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter Cat name: "],
        },

        origin: {
            type: String,
            required: true,
        },

        temperament: {
            type: String,
            required: true,
        },

        colors: {
            type: [String],
            required: false,
        },


        description: {
            type: String,
            required: false,
        },

        image: {
            type: String,
            required: false,
        },

    },
    {
        timestamps: true   //created at, updated at fields
    }
);

const Cat = mongoose.model("Cat", CatSchema);
module.exports = Cat

const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');

const BirdSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter Bird name: "],
        },

        species: {
            type: String,
            required: true,
        },

        family: {
            type: String,
            required: true,
        },

        habitat: {
            type: String,
            required: false,
        },

        place_of_found: {
            type: String,
            required: false,
        },

        diet: {
            type: String,
            required: false,
        },

        description: {
            type: String,
            required: false,
        },


        weight_kg: {
            type: Number,
            required: false,
        },

        height_cm: {
            type: Number,
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

const Bird = mongoose.model("Bird", BirdSchema);
module.exports = Bird

const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');

const DogSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter Dog name: "],
        },

        breed_group: {
            type: String,
            required: true,
        },

        size: {
            type: String,
            required: true,
        },

        lifespan: {
            type: String,
            required: false,
        },


        origin: {
            type: String,
            required: false,
        },

        temperament: {
            type: String,
            required: false,
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

const Dog = mongoose.model("Dog", DogSchema);
module.exports = Dog
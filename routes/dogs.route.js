const express = require('express');
const Dog = require('../models/dog.model.js');
const router = express.Router();
const {  getDogs, getDog, getDogByName, createDog, updateDog, deleteDog } = require('../controllers/dog.controller.js');
const { get } = require('mongoose');

//get dog
router.get('/', getDogs);
router.get('/:id', getDog);
router.get('/name/:name', getDogByName);

//add dog
router.post('/', createDog);

//update a dog
router.put('/:id', updateDog);

//delete a dog
router.delete('/:id', deleteDog);


module.exports = router;
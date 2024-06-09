const express = require('express');
const Cat = require('../models/cat.model.js');
const router = express.Router();
const {     getCats, getCat, getCatByName, createCat, updateCat, deleteCat } = require('../controllers/cat.controller.js');
const { get } = require('mongoose');

//get cats
router.get('/', getCats);
router.get('/:id', getCat);
router.get('/name/:name', getCatByName);

//add cats
router.post('/', createCat);

//update a cat
router.put('/:id', updateCat);

//delete a cat
router.delete('/:id', deleteCat);


module.exports = router;
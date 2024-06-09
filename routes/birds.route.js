const express = require('express');
const Bird = require('../models/bird.model.js');
const router = express.Router();
const { getBirds, getBird, getBirdByName, createBird, updateBird, deleteBird } = require('../controllers/bird.controller.js');
const { get } = require('mongoose');

//get bird
router.get('/', getBirds);
router.get('/:id', getBird);
router.get('/name/:name', getBirdByName);

//add bird
router.post('/', createBird);

//update a bird
router.put('/:id', updateBird);

//delete a bird
router.delete('/:id', deleteBird);


module.exports = router;
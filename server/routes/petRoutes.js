const express = require('express');
const { getAllPets, getPetById, addPet, adoptPet, submitApplication, getApplicationById} = require('../controller/PetController');

const petRoutes = express.Router();

petRoutes.post('/pets/:id/adopt',adoptPet);
petRoutes.get('/pets',getAllPets);
petRoutes.get('/pets/:id',getPetById);
petRoutes.post('/pets',addPet);
petRoutes.post('/applications',submitApplication);
petRoutes.get('/applications/:id',getApplicationById);

module.exports = petRoutes;
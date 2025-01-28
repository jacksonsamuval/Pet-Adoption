const express = require('express');
const { getAllPets, getPetById, addPet, adoptPet, submitApplication } = require('../controller/PetController');

const petRoutes = express.Router();

petRoutes.post('/pets/:id/adopt',adoptPet);
petRoutes.post('/pets',getAllPets);
petRoutes.get('/pets/:id',getPetById);
petRoutes.post('/pets',addPet);
petRoutes.post('/applications',submitApplication);

module.exports = petRoutes;
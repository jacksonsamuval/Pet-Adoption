const Application = require('../model/Application');
const Pet = require('../model/petAdoption');

const adoptPet = async (req, res) => {
    try {
        const pet = await Pet.findById(req.params.id);
        if(!pet){
            return res.status(404).json({message: "Pet not found"});
        }
        pet.status = "Adopted";
        await pet.save();
        res.json({message: "Adoption Request Submitted Successfully"});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const getAllPets = async (req, res) => {
    try {
        const filters = req.query;
        const pets = await Pet.find(filters);
        res.json(pets);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const getPetById = async (req, res) => {
    try {
        const pet = await Pet.findById(req.params.id);
        if(!pet){
            return res.status(404).json({message: "Pet not found"});
        }
        res.json(pet);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const addPet = async (req, res) => {
    try {
        const {name, breed,age,gender,location,photo} = req.body;
        const newPet = new Pet({
            name,
            breed,
            age,
            gender,
            location,
            photo});
        await newPet.save();
        res.status(201).json(newPet);
    } catch (error) {
        res.status(500).json({message: error.message});
        
    }
};

const submitApplication = async (req, res) => {
    try {
        console.log("hiii");
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

module.exports = {
    adoptPet,
    getAllPets,
    getPetById,
    addPet,
    submitApplication
}


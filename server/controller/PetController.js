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
        const { petId, adopterName, email } = req.body;

        const application = new Application(req.body);
        await application.save();
        await Pet.findByIdAndUpdate(petId, { status: "Adopted" });
        res.status(201).json(application);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const getApplicationById = async (req, res) => {
    try{
        const application = await Application.findById(req.params.id);
        if(!application){
            return res.status(404).json({message: "Application Not Found"});
        }
        res.json(application);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

module.exports = {
    adoptPet,
    getAllPets,
    getPetById,
    addPet,
    submitApplication,
    getApplicationById
}


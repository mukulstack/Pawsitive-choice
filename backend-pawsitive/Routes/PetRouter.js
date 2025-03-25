const express = require('express');
const Pet = require('../Models/pet');

const router = express.Router();

// Route to add a new pet
router.post('/add', async (req, res) => {
  try {
    const { name, age, type, breed, gender, description, image, state, city } = req.body;

    // Check if all required fields are provided
    if (!name || !age || !type || !breed || !gender || !state || !city) {
      return res.status(400).json({ error: "All required fields must be filled!" });
    }

    const newPet = new Pet({ name, age, type, breed,gender, description, image, state, city});
    await newPet.save();
    res.status(201).json({ message: 'Pet added successfully!', pet: newPet });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// route to saerch pets
router.get('/search', async (req, res) => {
  try {
    const { type, age, breed, state, city } = req.query;

    let filter = {};

    if (type) filter.type = { $regex: new RegExp(req.query.type, "i")}
    if (age) filter.age = { $regex: new RegExp(req.query.age, "i")}
    if (breed) filter.breed = { $regex: new RegExp(req.query.breed, "i")}
    if (state) filter.state = { $regex: new RegExp(req.query.state, "i")}
    if (city) filter.city = { $regex: new RegExp(req.query.city, "i")}

    const pets = await Pet.find(filter);
    res.json(pets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

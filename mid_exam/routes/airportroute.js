const express = require('express');
const router = express.Router();
const Airport = require('../models/Airport');

// Middleware for parsing forms
router.use(express.urlencoded({ extended: true }));

// Show all airports
router.get('/airports', async (req, res) => {
    const airports = await Airport.find();
    res.render('index', { airports });
});

// Show form to add new airport
router.get('/airport/new', (req, res) => {
    res.render('new');
});

// Create a new airport
router.post('/airports', async (req, res) => {
    try {
        await Airport.create(req.body);
        res.redirect('/airports');
    } catch (err) {
        res.send('Error creating airport: ' + err.message);
    }
});

// Show specific airport
router.get('/airports/:id', async (req, res) => {
    const airport = await Airport.findById(req.params.id);
    res.render('show', { airport });
});

// Show edit form
router.get('/airports/:id/edit', async (req, res) => {
    const airport = await Airport.findById(req.params.id);
    res.render('edit', { airport });
});

// Update airport (except airportCode)
router.put('/airports/:id', async (req, res) => {
    try {
        await Airport.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        res.redirect(`/airports/${req.params.id}`);
    } catch (err) {
        res.send('Error updating airport: ' + err.message);
    }
});

// Delete an airport
router.delete('/airports/:id', async (req, res) => {
    await Airport.findByIdAndDelete(req.params.id);
    res.redirect('/airports');
});

module.exports = router;

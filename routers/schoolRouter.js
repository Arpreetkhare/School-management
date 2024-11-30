const express = require('express');
const router = express.Router();
const schoolController = require('../controllers/schoolController');

// POST: Add School
router.post('/addSchool', schoolController.addSchool);

// GET: List Schools sorted by proximity
router.get('/listSchools', schoolController.listSchools);

module.exports = router;

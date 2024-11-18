const express = require('express');
const router = express.Router();
const { getAgeGroupData, getDemographicData } = require('../controllers/musicComposerController');

// Route for View 1: Listeners per age group
router.get('/view1', getAgeGroupData);

// Route for View 2: Listeners per demographic (place)
router.get('/view2', getDemographicData);

module.exports = router;

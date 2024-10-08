const express = require('express');
const router = express.Router();
const searchController = require('../controllers/searchController');

router.get('/api/search', searchController.searchUsers);

module.exports = router;

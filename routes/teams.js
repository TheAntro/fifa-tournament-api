const express = require('express');
const { getTeams } = require('../controllers/teams');

const router = express.Router();

router.route('/').get(getTeams);

module.exports = router;

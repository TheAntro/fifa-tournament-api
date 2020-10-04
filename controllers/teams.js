const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/errorResponse');

// @desc Get all teams
// @route GET /api/v1/teams
// @access Public
exports.getTeams = asyncHandler(async (req, res, next) => {
  res.status(200).json({
    success: true,
    data: 'Return all teams',
  });
});

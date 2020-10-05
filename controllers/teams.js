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

// @desc Get single team
// @route GET /api/v1/teams/:id
// @access Public
exports.getTeam = asyncHandler(async (req, res, next) => {
  res.status(200).json({
    success: true,
    data: `Return team with id ${req.params.id}`,
  });
});

// @desc Create new team
// @route POST /api/v1/teams
// @access Private
exports.createTeam = asyncHandler(async (req, res, next) => {
  res.status(200).json({
    success: true,
    data: `Create team`,
  });
});

// @desc Update team
// @route PUT /api/v1/teams/:id
// @access Private
exports.updateTeam = asyncHandler(async (req, res, next) => {
  res.status(200).json({
    success: true,
    data: `Update team with id ${req.params.id}`,
  });
});

// @desc Delete team
// @route DELETE /api/v1/teams/:id
// @access Private
exports.deleteTeam = asyncHandler(async (req, res, next) => {
  res.status(200).json({
    success: true,
    data: `Delete team with id ${req.params.id}`,
  });
});

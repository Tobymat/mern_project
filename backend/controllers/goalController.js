const asyncHandler = require('express-async-handler');
// @desc  Get goals
// @route  GET /api/goals
// @access  private
const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Get Goals'});
});

// @desc  Set goals
// @route  POST /api/goals/:id
// @access  private
const setGoal = asyncHandler(async (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }

    res.status(200).json({message: 'Set Goals'});
});

// @desc  UPDATE goal
// @route  PUT /api/goals/:id
// @access  private
const updateGoal = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Update goal ${req.params.id}`});
});

// @desc  DELETE goal
// @route  GET /api/goals
// @access  private
const deleteGoal = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Delete goal ${req.params.id}`});
});

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}
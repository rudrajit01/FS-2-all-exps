const express = require('express');
const { login } = require('../controllers/authController');
const { verifyToken } = require('../middleware/authMiddleware');

const router = express.Router();

// Public login route
router.post('/login', login);

// Protected route – returns user info (for dashboard)
router.get('/profile', verifyToken, (req, res) => {
    res.status(200).json({
        success: true,
        user: req.user   // from middleware
    });
});

module.exports = router;
// backend/src/controllers/authController.js
const jwt = require('jsonwebtoken');

// Mock user database (APNA SS LAGAO)
const mockUsers = [
    {
        id: 1,
        username: 'admin',
        password: 'admin123',  // In production, use hashed passwords
        role: 'Admin'
    },
    {
        id: 2,
        username: 'student',
        password: 'student123',
        role: 'Student'
    },
    {
        id: 3,
        username: 'rudrajit 07',
        password: '0007',
        role: 'Student'
    }
];

// Login handler
const login = (req, res) => {
    const { username, password } = req.body;

    // Validate input
    if (!username || !password) {
        return res.status(400).json({ 
            success: false, 
            message: 'Username and password are required' 
        });
    }

    // Find user (APNA SS LAGAO)
    const user = mockUsers.find(
        u => u.username === username && u.password === password
    );

    if (!user) {
        return res.status(401).json({ 
            success: false, 
            message: 'Invalid username or password' 
        });
    }

    // Generate JWT Token (APNA SS LAGAO)
    const token = jwt.sign(
        { 
            userId: user.id, 
            username: user.username, 
            role: user.role 
        },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
    );

    // Return token + user info
    return res.status(200).json({
        success: true,
        message: 'Login successful',
        token: token,
        username: user.username,
        role: user.role
    });
};

module.exports = { login };
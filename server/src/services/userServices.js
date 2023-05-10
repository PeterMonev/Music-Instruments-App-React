const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const { ValidationError } = require('../utils/createValidationError');
require("dotenv").config();

const blacklist = new Set();

const JWT_SECRET = process.env.JWT_SECRET;

async function register(email, fullName, phoneNumber, password) {
    const existing = await User.findOne({ email: new RegExp(`^${email}$`, 'i') });

    if (existing) {
        throw new ValidationError('Email is already exist', 403);
    }
    if (password.length < 4 || password.length > 18) {
        throw new ValidationError('Password must be between 4 and 18 characters long', 403)
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
        email,
        fullName,
        phoneNumber,
        hashedPassword
    });

    await user.save();

    return createSession(user);
}

async function login(email, password) {
    const user = await User.findOne({ email: new RegExp(`^${email}$`, 'i') });

    if (!user) {
        throw new ValidationError('Incorrect email or password', 403);
    }

    const match = await bcrypt.compare(password, user.hashedPassword);

    if (!match) {
        throw new ValidationError('Incorrect email or password', 403);
    }

    return createSession(user);
}

function logout(token) {
    blacklist.add(token);
}

function createSession(user) {
    const payload = {
        email: user.email,
        _id: user._id
    };

    const accessToken = jwt.sign(payload, JWT_SECRET);

    return {
        email: user.email,
        accessToken,
        _id: user._id
    };
}

function validateToken(token) {
    if (blacklist.has(token)) {
        throw new ValidationError('Token is blacklisted', 401);
    }
    return jwt.verify(token, JWT_SECRET);
}

async function getUserById(userId){
    return  await User.findById(userId)
}

module.exports = {
    register,
    login,
    logout,
    validateToken,
    getUserById,
  
};
const Usuario = require("../model/Usuario");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const loginService = (email) => Usuario.findOne({ email: email}).select("senha");

const generateToken = (userId) => jwt.sign({ id: userId}, "$2b$10$eH2pcAmYppLPulXrO4QDP.aycHoUHhZqTbUabl54.2ExhnHC7dLX6");

module.exports = {
    loginService,
    generateToken
}
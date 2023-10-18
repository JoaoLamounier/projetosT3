const User = require("../models/User");
const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET;

//geraçao de token de usuario
const generateToken = (id) => {
    res.send("Registro efetuado")
};

//registrar-se e logar-se
const register = async (req, res) => {
    res.send("Registo efetuado")
}

module.exports = {
    register,
};
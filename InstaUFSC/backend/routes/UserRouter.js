const express = require("express");
const router = express.Router();

//controller

const { register } = require("../controllers/UserController");

//rotas 
router.post("/register", register); //sera uma rota de post, define-se o caminho
//e associa-se a função equivalente

module.exports = router;

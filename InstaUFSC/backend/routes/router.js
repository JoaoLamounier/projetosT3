const express = require ("express");
const router = express();


// home

//definindo o prefixo api para as rotas de usuario
router.use("/api/users", require("./UserRouter"));

//test route
router.get("/", (req, res) => {
    res.send("API funcionando1");
});

module.exports = router;
const express = require ("express");
const router = express();

// home

router.get("/", (req, res) => {
    res.send("API funcionando1");
});

module.exports = router;
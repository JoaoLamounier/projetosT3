require("dotenv").config()

const express = require("express");
const path = require("path");
const cors = require("cors");

const port = process.env.PORT;

const app = express();

//solve CORS issues
app.use(cors({ credential: true, origin: "http://localhost:5000"}));

//upload directory 
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

//DB connection
require("./config/db.js");

//rotas
const router = require("./routes/router.js");

app.use(router);


//config JSON and form data response
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`);
});
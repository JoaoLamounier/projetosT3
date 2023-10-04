const express = require("express");
const app = express();

const loggingMiddleware = (req, res, next) => {
  console.log("dentro do Middleware") 
  console.log(`${new Date() .toISOString()}, URL acessada: ${req.originalUrl}`);
  next() 
};

const signIn = (req, res, next) => {
    if (req.query.admin === "true") {
        req.admin = true
        next()
    } else {
        res.send(
            "NEGADO, ACESSO N E G A D O"
        )
    }
}

app.use(loggingMiddleware)

app.get("/", (req, res) => {
    res.send("Home Page");
});

app.get("/users", signIn, (req, res) => {
    console.log(req.admin)
    res.send("Users Page");
});

app.get("/products", (req, res) => {
    res.send("Products Page");
});

//Exercicio não Terminado

//const checkproduct = (req, res, next) => {
//    let strSlice = req.query.p.substring(req)
//}

app.listen(3000, () => console.log("Servidor Inicializado"));
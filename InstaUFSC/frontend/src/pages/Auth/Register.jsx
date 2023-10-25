import React from "react";
import "./Auth.css";

import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div id="register">
      <h2>InstaUFSC</h2>
      <p className="subtitle">Cadastre-se para ver fotos dos seus contatos!</p>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="nome" />
        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="Senha" />
        <input type="password" placeholder="Confirme a senha" />
        <input type="submit" placeholder="Cadastrar" />
      </form>
      <p>
        Já possui cadastro? <NavLink to={"/login"}>Clique aqui</NavLink>
      </p>
    </div>
  );
};

export default Register;

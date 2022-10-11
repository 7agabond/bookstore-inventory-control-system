/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import clientesPDF from "../../report/cliente/Clientes";
import ClienteService from "../../services/ClienteService"

import "./Nav.css";
import '../../App.css';

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const [cliente, setCliente] = useState([]);

  useEffect(() => {
    getAllClientes();
  }, []);

  const getAllClientes = () => {
    ClienteService.getAllClientes()
      .then((response) => {
        setCliente(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="navbar">
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <a href="/#home">Home</a>
        </li>
        <li className="nav-item">
          <a href="/#">Livros</a>
        </li>
        <li className="nav-item">
          <a href={`/clientes`}>Clientes</a>
        </li>
        <li className="nav-item">
          <a href={`/compras`}>Compras</a>
        </li>
        <li className="nav-item">
          <a href={`/vendas`}>Vendas</a>
        </li>
        <li className="nav-item">
          <a href={`/`}>Relatórios</a>
          <ul className="sub-menu">
            <li><a href={`/`}>Livros</a></li>
            <li><a href="#" onClick={(e) => clientesPDF(cliente)}>Clientes</a></li>
            <li><a href={`/`}>Compras</a></li>
            <li><a href={`/`}>Vendas</a></li>
          </ul>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={30} style={{ color: "#f8f8f8" }} />
        ) : (
          <FaBars size={30} style={{ color: "#f8f8f8" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;

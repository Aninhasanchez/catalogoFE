import React from "react";
import { Link } from "react-router-dom";
import estilos from './Perfil.module.css';

const perfis = [
  { nome: "Viviane", imagem: "/imagens/imagem1.jpg" },
  { nome: "Celso", imagem: "/imagens/imagem2.jpg" },
  { nome: "Marcos", imagem: "/imagens/verde.jpg" },
  { nome: "Ana", imagem: "/imagens/Aninha.jpg" }
];

export function Perfil() {
  return (
    <div className={estilos.container}>
      <h1>Quem está assistindo?</h1>
      <div className={estilos.perfis}>
        {perfis.map((perfil, index) => (
          <Link to="/" key={index} className={estilos.perfil}>
            <img src={perfil.imagem} alt={perfil.nome} />
            <span>{perfil.nome}</span>
          </Link>
        ))}
        <div className={estilos.adicionar}>
          <button>+</button>
          <span>Adicionar perfil</span>
        </div>
      </div>
    </div>
  );
}
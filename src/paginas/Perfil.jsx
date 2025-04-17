import React from "react";
import estilos from './Perfil.module.css';

const usuarios = [
  { id: 1, nome: "João", imagem: "/imagens/imagem1.jpg" },
  { id: 2, nome: "Maria", imagem: "/imagens/imagem2.jpg" },
  { id: 3, nome: "Carlos", imagem: "/imagens/imagem3.jpg" },
  { id: 4, nome: "Ana", imagem: "/imagens/ana.png" }
];

export function Perfil() {
  return (
    <div className={estilos.container}>
      <h1>Quem está assistindo?</h1>
      <div className={estilos.listaUsuarios}>
        {usuarios.map(usuario => (
          <div key={usuario.id} className={estilos.usuario}>
            <img src={usuario.imagem} alt={usuario.nome} />
            <p>{usuario.nome}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

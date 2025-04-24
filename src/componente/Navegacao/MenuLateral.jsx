import React from "react";
import estilos from "./MenuLateral.module.css";
import { Link } from "react-router-dom";

export function MenuLateral({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className={estilos.menuOverlay}>
      <div className={estilos.menuContent}>
        <button className={estilos.fechar} onClick={onClose}>✖</button>
        <ul>
          <li><Link to="/">🏠 Início</Link></li>
          <li><Link to="/serie">🎬 Séries</Link></li>
          <li><Link to="/perfil">👤 Perfil</Link></li>
        </ul>
      </div>
    </div>
  );
}

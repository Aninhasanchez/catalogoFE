import estilos from './Barranavegacao.module.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { MenuLateral } from './MenuLateral';


export function Barranavegacao() {
    const [menuAberto, setMenuAberto] = useState(false);

    const abrirMenu = () => setMenuAberto(true);
    const fecharMenu = () => setMenuAberto(false);

    return (
        <>
            <nav className={estilos.container}>
                <ul>
                    <li onClick={abrirMenu}>
                        <span className="material-symbols-outlined">menu</span>
                        Menu
                    </li>
                    <Link to='/'>
                        <li><span className="material-symbols-outlined">home</span> Home</li>
                    </Link>
                    <Link to='/serie'>
                        <li><span className="material-symbols-outlined">movie</span> Serie</li>
                    </Link>
                    <Link to='/perfil'>
                        <li><span className="material-symbols-outlined">person</span> Perfil</li>
                    </Link>
                </ul>
            </nav>
            <MenuLateral isOpen={menuAberto} onClose={fecharMenu} />
        </>
    );
}

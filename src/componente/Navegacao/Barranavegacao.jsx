import estilos from './Barranavegacao.module.css';
import { Link } from 'react-router-dom';


export function Barranavegacao(){
    return(
        <nav className={estilos.container}>
            <ul>
            <Link to='menu'>
                <li><span className="material-symbols-outlined">menu</span>
                    Menu
                </li>
                </Link>
                <Link to='/'>
                <li><span className="material-symbols-outlined">home</span>
                    Home
                </li>
                </Link>
                <Link to='serie'>
                <li><span className="material-symbols-outlined">movie</span>
                    Serie
                </li>
                </Link>
                <Link to='perfil'>
                <li><span className="material-symbols-outlined">person</span>
                    Perfil
                </li>
                </Link>
            </ul>
        </nav>
    )
}
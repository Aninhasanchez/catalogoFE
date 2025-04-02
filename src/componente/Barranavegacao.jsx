import estilos from './Barranavegacao.module.css';


export function Barranavegacao(){
    return(
        <nav className={estilos.container}>
            <ul>
                <li><span className="material-symbols-outlined">home</span>
                    Home
                </li>

                <li><span className="material-symbols-outlined">movie</span>
                    Filmes
                </li>

                <li><span className="material-symbols-outlined">person</span>
                    Perfil
                </li>
            </ul>
        </nav>
    )
}
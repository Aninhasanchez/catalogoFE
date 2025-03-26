import estilos from './Barranavegacao.module.css';


export function Barranavegacao(){
    return(
        <nav className={estilos.container}>
            <ul>
                <li>Home</li>
                <li>Filmes</li>
                <li>Perfil</li>
            </ul>
        </nav>
    )
}
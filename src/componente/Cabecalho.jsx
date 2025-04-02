import estilos from './Cabecalho.module.css';

//estrutura de todos os componentes diferentes do APP
export function Cabecalho(){
    return(
        <header className={estilos.container}>
        <h1>Aninhaflix</h1>
        </header>

    )
    
}
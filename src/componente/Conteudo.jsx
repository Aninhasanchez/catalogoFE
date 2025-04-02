import estilos from './Conteudo.module.css';
import { Lista } from './Lista';


//estrutura para fazer o componente
export function Conteudo(){
    return(
        <main className={estilos.container}>
         <Lista/>
        </main>
    )
}
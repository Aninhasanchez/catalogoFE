import { Barranavegacao } from './componente/Barranavegacao';
import { Cabecalho } from './componente/Cabecalho';
import { Conteudo } from './componente/Conteudo';

// todo elemento deve estar dentro de function
 // tags fantasmas: são as tags vazias a ponto de permitir a redenrização de 2 ou mais elementos HTML no mesmo componente
    
function App(){
  return(
    <>
      <Barranavegacao/>
      <Cabecalho/>
      <Conteudo/>
    </>

  )
}
// para que a função seja chamada em outros elementos nós devemos "exportá-la"
export default App
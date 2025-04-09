import { Barranavegacao } from "../componente/Navegacao/Barranavegacao";
import { Cabecalho } from "../componente/Header/Cabecalho";
import { Conteudo } from "../componente/Conteudo";


export function Inicial()
{
  return(
    <>
      <Barranavegacao/>
      <Cabecalho/>
      <Conteudo/>
  
    </>

  )
}
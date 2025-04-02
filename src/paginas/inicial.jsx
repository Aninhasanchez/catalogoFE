import { Barranavegacao } from "../componente/Barranavegacao";
import { Cabecalho } from "../componente/Cabecalho";
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
import { Barranavegacao } from "../componente/Navegacao/Barranavegacao";
import { Cabecalho } from "../componente/Header/Cabecalho";
import { Outlet } from "react-router-dom";


export function Inicial()
{
  return(
    <>
      <Barranavegacao/>
      <Cabecalho/>
      <Outlet/>
       {/* espaço variavel que comporta os componentes da minha aplicacao */}
  
    </>

  )
}
import { Routes, Route } from "react-router-dom";
import { Inicial } from '../paginas/inicial';
import { Perfil } from "../paginas/Perfil";
import { Serie } from "../paginas/serie";
import { Lista } from '../componente/Lista';

export function Rotas(){
    return(
        <Routes>
            <Route path="/" element={<Inicial/>}>
                <Route index element={<Lista/>}/>
                <Route path="serie" element={<Serie/>}/>
                <Route path="perfil" element={<Perfil/>}/>

            </Route>
        </Routes>
    )
}
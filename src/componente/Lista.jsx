import axios from "axios";
import React, {useState, useEffect} from "react";
import { Card } from './Card/Card';
import estilos from './Lista.module.css';
import { Modal } from "./Modal";
 
 
const API_key = 'af26cce282aecf5c6cc39a264f29d0a7';
const API_URL = 'https://api.themoviedb.org/3';
 
export function Lista(){
    const [movie, setMovies] = useState([]);
    const [SelectedMovie, setSelectedMovie] = useState(null);
 
 
    useEffect(() => {
        axios.get(`${API_URL}/movie/popular?api_key=${API_key}&language=pt-BR`)
          .then(response => {
            console.log(response.data.results);
            setMovies(response.data.results);
          })
          .catch(error => {
            console.log('Error', error);
          });
      }, []);


 
      const handleOpenModal = (modal)=>{
        setSelectedMovie(movie);
      }


      const handleCloseModal=()=>{
        setSelectedMovie(null);
      }
     


    return(
      <div className={estilos.conteiner}>
        <figure style={{display: 'flex', flexWrap: 'wrap'}}>
          {movie.map(movie=>(
            <Card key={movie.id}
            movie={movie}
            onOpenModal={handleOpenModal}
            />
))}
 
        </figure>
       {SelectedMovie && (<Modal movie={SelectedMovie} onClose={handleCloseModal}/>)}

       
      </div>
    );
 
}
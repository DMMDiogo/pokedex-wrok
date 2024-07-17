import style from './pokemonApi.module.css'
import { useEffect, useState } from "react"




function PokemonData () {
    
      const[getData, setGetData] = useState([]);
          useEffect(() => {
              fetch('https://pokeapi.co/api/v2/pokemon/')
                .then(response => response.json()) 
                .then(pokemonData => {
                  setGetData(pokemonData.results);
                });
            }, []); // se não pôr isto fica um loop infinito
           
            console.log(getData)
            console.log(useState)
            console.log(setGetData)
         return (
         <div>
              {getData.map((pokemon, index) => <h3 key={index} className={style.h3}>{pokemon.name}
              <p>{pokemon.url}</p>
              </h3>)}
          </div>
      );
      }



export default PokemonData
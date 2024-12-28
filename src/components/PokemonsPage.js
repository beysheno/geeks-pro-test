import React, {useEffect, useState} from 'react';
import axios from "axios";
import Pokemons from "./Pokemons";

export const fetchPokemons = async () => {
    try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon/');
        return response.data;
    }catch(e) {
        console.error(e);
    }
}
const PokemonsPage = () => {
    const [pokemonsList, setPokemonsList] = useState([]);
    useEffect(() => {
        fetchPokemons()
            .then(data => setPokemonsList(data.results));
    },[])
    return (
        <div className="pokemons-page">
            {pokemonsList.slice(0,6).map((pokemon) => (
                <Pokemons  key={pokemon.id} pokemon={pokemon} />
            ))}
        </div>
    );
};

export default PokemonsPage;
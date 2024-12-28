import React, {useEffect, useState} from 'react';

export const getPokemon= async (url)=>{
    const res =  await fetch(url);
    return await res.json()
}
const Pokemons = ({pokemon}) => {
    const [pokemonItems, setPokemonItems] = useState([]);
    console.log(pokemonItems);

    useEffect(()=>{
        const url = pokemon.url
        getPokemon(url).then(pokemonData => setPokemonItems(pokemonData))
    },[pokemon])
    return (
        <div className="pokemons">
            <img src={pokemonItems?.sprites?.other?.dream_world?.front_default} className='pokemons-img'/>
            <p className='pokemons-title'>{pokemonItems.name}</p>
        </div>
    );
};

export default Pokemons;
import { useEffect, useState } from 'react';
import { getPokemonData } from '@/services/pokeApi';

const usePokemon = () => {
    const [pokemonData, setPokemonData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
      };
      
      const pokemonWithIds = pokemonData.map((pokemon, index) => ({
        ...pokemon,
        id: index + 1
      }));
    
      const filteredPokemon = pokemonWithIds.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pokemon.id.toString().padStart(3, '0').includes(searchQuery.toLowerCase())
      );
    
    useEffect(() => {
        const getData = async () => {
            try {
                const data = await getPokemonData();
                setPokemonData(data);
            } catch (error) {
                console.log(error);
            }
        };

        getData()

    }, []);

    return { pokemonData, searchQuery, handleSearchChange, filteredPokemon };
};

export default usePokemon;

import { useEffect, useState } from 'react';
import { getDetailDataSpecies } from '@/services/pokeApi';

const usePokemonSpecies = (id) => {
    const [pokemonDetailSpesies, setPokemonDetailSpesies] = useState([]);

    useEffect(() => {

        const getDetailSpecies = async () => {
            try {
                const detailSpesies = await getDetailDataSpecies(id);
                setPokemonDetailSpesies(detailSpesies);
            } catch (error) {
                console.log(error);
            }
        }

        getDetailSpecies()
    }, [id]);

    return { pokemonDetailSpesies };
};

export default usePokemonSpecies;

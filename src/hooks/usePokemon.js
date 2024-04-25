import { useEffect, useState } from 'react';
import { getDetailData, getDetailDataSpecies, getPokemonData } from '@/services/pokeApi';

const usePokemon = (id) => {
    const [pokemonData, setPokemonData] = useState([]);
    const [pokemonDetail, setPokemonDetail] = useState([]);
    const [pokemonDetailSpesies, setPokemonDetailSpesies] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await getPokemonData();
                setPokemonData(data);
            } catch (error) {
                console.log(error);
            }
        };

        const getDetail = async () => {
            try {
                const detailData = await getDetailData(id);
                setPokemonDetail(detailData);
            } catch (error) {
                console.log(error);
            }
        };

        const getDetailSpecies = async () => {
            try {
                const detailSpesies = await getDetailDataSpecies(id);
                setPokemonDetailSpesies(detailSpesies);
            } catch (error) {
                console.log(error);
            }
        }

        getData(),
        getDetail(),
        getDetailSpecies()
    }, [id]);

    return { pokemonData, pokemonDetail, pokemonDetailSpesies };
};

export default usePokemon;

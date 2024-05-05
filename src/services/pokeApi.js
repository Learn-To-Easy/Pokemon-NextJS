import axios from 'axios';

export const getPokemonData = async () => {
    try {
        const response = await axios.get(
            "https://pokeapi.co/api/v2/pokemon?limit=150"
        );
        return response.data.results;
    } catch (error) {
        console.log(error);
    }
};

export const getDetailData = async (id) => {
    try {
        const response = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${id}`
        );
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const getDetailDataSpecies = async (id) => {
    try {
        const response = await axios.get(
            `https://pokeapi.co/api/v2/pokemon-species/${id}`
        );
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
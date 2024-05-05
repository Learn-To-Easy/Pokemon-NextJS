import { useEffect, useState } from 'react';
import { getDetailData } from '@/services/pokeApi';

const usePokemonDetail = (id) => {
    const [pokemonDetail, setPokemonDetail] = useState([]);

    useEffect(() => {
        const getDetail = async () => {
            try {
                const detailData = await getDetailData(id);
                setPokemonDetail(detailData);
            } catch (error) {
                console.log(error);
            }
        };

        getDetail()
    }, [id]);

    return { pokemonDetail };
};

export default usePokemonDetail;
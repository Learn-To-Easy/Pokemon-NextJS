import usePokemonDetail from '@/hooks/usePokemonDetail';
import React from 'react'
import { statChangeName, typeColors } from '@/utils/pokemon';

const statsPokemon = ({ id }) => {
    const { pokemonDetail } = usePokemonDetail(id);
    
  return (
    <div>
        <div className="stats">
            {pokemonDetail.stats &&
              pokemonDetail.stats.map((statsData, index) => {
                const statName = statChangeName[statsData.stat.name];
                return (
                  <div key={index} className="flex items-center px-12">
                    <p className="pr-1 mt-4 mr-4 text-sm font-bold text-justify border-r min-w-9" style={{ color: typeColors[pokemonDetail.types[0].type.name]}}>
                      {statName}
                    </p>
                    <p className="pr-1 mt-4 mr-2 text-sm">
                      {statsData.base_stat}
                    </p>
                    <progress
                      className="h-1 mt-4 rounded grow shrink basis-0"
                      style={{ '--progress-value-background': typeColors[pokemonDetail.types[0].type.name]}}
                      value={statsData.base_stat}
                      max="100"
                    ></progress>
                  </div>
                );
              })}
          </div>
    </div>
  )
}

export default statsPokemon
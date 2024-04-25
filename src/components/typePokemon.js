import usePokemon from "@/hooks/usePokemon";
import React from "react";
import { typeColors } from '@/utils/pokemon';

const typePokemon = ({id}) => {
    const { pokemonDetail } = usePokemon(id);

  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      {pokemonDetail.types &&
        pokemonDetail.types.map((type, index) => (
          <div key={index}>
            <p
              className="text-xs rounded-xl px-0.5 py-1 font-bold text-white capitalize"
              style={{ backgroundColor: typeColors[type.type.name] }}
            >
              {type.type.name}
            </p>
          </div>
        ))}
    </div>
  );
};

export default typePokemon;

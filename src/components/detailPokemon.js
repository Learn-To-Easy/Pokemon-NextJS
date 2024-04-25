import usePokemon from '@/hooks/usePokemon';
import React from 'react'

const detailPokemon = ({id}) => {
    const { pokemonDetail } = usePokemon(id);

  return (
    <div className="flex items-end mt-8">
            <div className="relative text-center grow shrink basis-0">
              <div className="flex items-center justify-center gap-2 px-5 py-2">
                <img src="../../weight.svg" alt="weight-icon" />
                <p className="text-xs ">{pokemonDetail.weight / 10} kg</p>
              </div>
              <p className="mt-4 text-xs text-gray">Weight</p>
            </div>
            <div className="relative text-center grow shrink basis-0">
              <div className="flex items-center justify-center gap-2 px-5 py-2">
                <img
                  src="../../straighten.svg"
                  alt="height-icon"
                  className="rotate-90 "
                />
                <p className="text-xs ">{pokemonDetail.height / 10} m</p>
              </div>
              <p className="mt-4 text-xs text-gray">Height</p>
            </div>
            <div className="relative text-center grow shrink basis-0">
              {pokemonDetail.abilities &&
                pokemonDetail.abilities
                  .toReversed()
                  .map((abilityData, index) => (
                    <div
                      key={index}
                      className="flex-col items-center gap-0 px-1 py-2 "
                    >
                      <p className="mt-3 text-xs capitalize">
                        {abilityData.ability.name}
                      </p>
                    </div>
                  ))}
              <p className="mt-4 text-xs text-gray">Move</p>
            </div>
          </div>
  )
}

export default detailPokemon
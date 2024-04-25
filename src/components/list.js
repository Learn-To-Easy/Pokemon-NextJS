"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

export default function list() {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?limit=30"
        );
        setPokemonData(response.data.results);
        console.log(response.data.results);
      } catch (err) {
        console.log(err);
      }
    };

    getData();
  }, []);

  return (
    <>
      <div className="py-5 mx-5">
        <div className="min-h-screen pl-4 overflow-y-auto bg-white shadow-inner rounded-xl max-h-24">
          <div className="flex flex-wrap items-center justify-center gap-5 mx-0 my-4">
            {pokemonData.map((pokemon, index) => (
              <div key={index}>
                <Link href={{ pathname: `/pokemon/${index + 1}` }}>
                  <div className="text-center no-underline bg-white rounded-lg shadow-2xl cursor-pointer w-36 h-36 drop-shadow">
                    <div className="px-2 py-2 text-right text-grey-text min-h-4">
                      <p className="text-[12px] leading-3">#{index + 1}</p>
                    </div>
                    <div className="w-20 h-20 m-auto">
                      <img
                        className="w-full h-full"
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
                          index + 1
                        }.svg`}
                        alt={pokemon.name}
                      />
                    </div>
                    <div className="rounded-lg bg-grey-bg pt-7 pr-2 pb-3 pl-2 mt-[-18px] text-title-list">
                      <p className="text-xs">{pokemon.name}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

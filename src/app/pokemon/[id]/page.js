"use client";

import React from "react";
import Image from "next/image";
import styles from './style.css';
import usePokemon from "@/hooks/usePokemon";
import Title from '@/components/title';
import ImageDetail from '@/components/imageDetail';
import TypePokemon from '@/components/typePokemon';
import DetailPokemon from '@/components/detailPokemon';
import Description from '@/components/description';
import StatsPokemon from '@/components/statsPokemon';
import { typeColors } from '@/utils/pokemon';

export default function Pokemon({ params }) {
  const { id } = params;
  const { pokemonDetail } = usePokemon(id);

  return (
    <>
    {pokemonDetail.types &&
            pokemonDetail.types.length > 0 && (
      <div style={{ backgroundColor: typeColors[pokemonDetail.types[0].type.name]}}>
        <Title params={params}/>
        <ImageDetail params={params}/>
        <div className="relative flex flex-col pt-20 pb-5 pl-5 pr-5 mx-[25%] bg-white rounded-lg shadow-inner">
          <TypePokemon params={params}/>
          <p className="mt-8 text-sm font-bold text-center" style={{ color: typeColors[pokemonDetail.types[0].type.name]}}>
            About
          </p>
          <DetailPokemon params={params}/>
          <Description params={params}/>
          <p className="mt-12 text-lg font-bold text-center text-black" style={{ color: typeColors[pokemonDetail.types[0].type.name]}}>
            Base Stats
          </p>
          <StatsPokemon params={params}/>
        </div>
        <Image
          className="absolute top-2 right-2 opacity-10"
          src="../../pokeball.svg"
          width={200}
          height={200}
          alt="pokeball"
        />
      </div>
    )}
    </>
  );
}
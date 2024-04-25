"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import styles from './style.css';

export default function Pokemon({ params }) {
  const [pokemonDetail, setPokemonDetail] = useState([]);
  const [pokemonDetailSpesies, setPokemonDetailSpesies] = useState([]);
  const { id } = params;
  const pokemonId = pokemonDetail.id;
  const pokemonNumber = String(pokemonId).padStart(3, "0");
  const pokemonWeight = pokemonDetail.weight / 10;
  const pokemonHeight = pokemonDetail.height / 10;

  const statChangeName = {
    hp: "HP",
    attack: "ATK",
    defense: "DEF",
    "special-attack": "SATK",
    "special-defense": "SDEF",
    speed: "SPD",
  };

  const typeColors= {
    normal: '#AAA67F',
    fighting: '#C12',
    flying: '#A891EC',
    poison: '#A43E9E',
    ground: '#DEC16B',
    rock: '#B69E31',
    bug: '#A7B723',
    ghost: '#70559B',
    steel: '#B7B9D0',
    fire: '#F57D31',
    water: '#6493EB',
    grass: '#74CB48',
    electric: '#F9CF30',
    psychic: '#FB5584',
    ice: '#9AD6DF',
    dragon: '#7037FF',
    dark: '#75574C',
    fairy: '#E69EAC'
  }

  useEffect(() => {
    const getDetailData = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${id}`
        );
        setPokemonDetail(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    const getDetailDataSpecies = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon-species/${id}`
        );
        setPokemonDetailSpesies(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getDetailData();
    getDetailDataSpecies();
  }, [id]);
  return (
    <>
    {pokemonDetail.types &&
            pokemonDetail.types.length > 0 && (
      <div style={{ backgroundColor: typeColors[pokemonDetail.types[0].type.name]}}>
        <div className="pl-5 pr-5 pt-5 pb-6 relative z-[2]">
          <div className="flex items-center justify-center gap-x-4">
            <div className="flex items-center gap-x-2">
              <a className="" href="/">
                <img src="../../arrow_back.svg" alt="back" />
              </a>
              <div className="">
                <h1 className="text-2xl font-bold text-white capitalize">
                  {pokemonDetail.name}
                </h1>
              </div>
              <p className="text-xs font-bold text-white">#{pokemonNumber}</p>
            </div>
          </div>
        </div>
        <div className="relative m-auto mt-10 w-52 h-52">
          <img
            className="w-full h-full"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
            alt={pokemonDetail.name}
          />
        </div>
        <div className="relative flex flex-col pt-20 pb-5 pl-5 pr-5 mx-[25%] bg-white rounded-lg shadow-inner">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {pokemonDetail.types &&
              pokemonDetail.types.map((type, index) => (
                <div key={index}>
                  <p className="text-xs rounded-xl px-0.5 py-1 font-bold text-white capitalize" style={{backgroundColor: typeColors[type.type.name]}}>
                    {type.type.name}
                  </p>
                </div>
              ))}
          </div>

          <p className="mt-8 text-sm font-bold text-center" style={{ color: typeColors[pokemonDetail.types[0].type.name]}}>
            About
          </p>
          <div className="flex items-end mt-8">
            <div className="relative text-center grow shrink basis-0">
              <div className="flex items-center justify-center gap-2 px-5 py-2">
                <img src="../../weight.svg" alt="weight-icon" />
                <p className="text-xs ">{pokemonWeight} kg</p>
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
                <p className="text-xs ">{pokemonHeight} m</p>
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
          {pokemonDetailSpesies.flavor_text_entries &&
            pokemonDetailSpesies.flavor_text_entries.length > 0 && (
              <p className="mt-12 text-sm text-center">
                {pokemonDetailSpesies.flavor_text_entries[0].flavor_text}
              </p>
            )}
          <p className="mt-12 text-lg font-bold text-center text-black" style={{ color: typeColors[pokemonDetail.types[0].type.name]}}>
            Base Stats
          </p>
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
'use client'

import React from 'react';
import Link from "next/link";
import usePokemon from '@/hooks/usePokemon';
import Image from "next/image";

export default function list() {
  const { filteredPokemon, searchQuery, handleSearchChange } = usePokemon();

  return (
    <>
      <div className="mx-20 py-auto ">
        <div className="relative">
          <div className="absolute inset-y-0 flex items-center start-0 ps-3">
            <img src="./search.svg" alt="search-icon" />
          </div>
          <div className="flex">
            <input
              type="search"
              id="search"
              className="block w-full p-2 text-sm text-black rounded-full ps-10 focus:outline-none"
              placeholder="Search"
              value={searchQuery}
              onChange={handleSearchChange}
              required
            />
            <img className="p-2 mx-4 bg-white rounded-full" src="./text_format.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="py-5 mx-5">
        <div className="min-h-screen pl-4 overflow-y-auto bg-white shadow-inner rounded-xl max-h-24">
          <div className="flex flex-wrap items-center justify-center gap-5 mx-0 my-4">
            { filteredPokemon.map ((pokemon) => (
              <div key={ pokemon.id }>
                <Link href={{ pathname: `/pokemon/${ pokemon.id }` }}>
                  <div className="text-center no-underline bg-white rounded-lg shadow-2xl cursor-pointer w-36 h-36 drop-shadow">
                    <div className="px-2 py-2 text-right text-grey-text min-h-4">
                      <p className="text-[12px] leading-3">#{String( pokemon.id ).padStart(3, "0")}</p>
                    </div>
                    <div className="w-20 h-20 m-auto">
                      <Image className="w-full h-full"
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ pokemon.id }.svg`}
                        width={100}
                        height={100}
                        alt={ pokemon.name } />
                    </div>
                    <div className="rounded-lg bg-grey-bg pt-7 pr-2 pb-3 pl-2 mt-[-18px] text-title-list">
                      <p className="text-xs">{ pokemon.name }</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
            { filteredPokemon.length === 0 && (
              <div className="text-center">Pokemon tidak ditemukan</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
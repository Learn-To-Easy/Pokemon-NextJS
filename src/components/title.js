"use client";

import React from "react";
import usePokemon from "@/hooks/usePokemon";

export default function Title({ id }) {
    const { pokemonDetail } = usePokemon(id);

  return (
    <>
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
            <p className="text-xs font-bold text-white">
              #{String(pokemonDetail.id).padStart(3, "0")}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};



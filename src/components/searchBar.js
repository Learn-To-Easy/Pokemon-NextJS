// import usePokemon from "@/hooks/usePokemon";
import React from "react";

const searchBar = () => {
  // const { pokemonData } = usePokemon();
  
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
              required
            />
            <img className="p-2 mx-4 bg-white rounded-full" src="./text_format.svg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default searchBar;

import React from "react";

const logo = () => {
  return (
    <>
      <div className="py-5 mx-20">
        <div className="container ">
          <div className="flex items-center">
            <img src="./pokeball.svg" alt="pokeball" />
            <h1 className="mx-3 text-2xl font-bold text-white font-poppins">
              Pokédex
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default logo;

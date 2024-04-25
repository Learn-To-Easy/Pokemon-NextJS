import usePokemon from "@/hooks/usePokemon";
import React from "react";

const description = ({ params }) => {
    const { id } = params;
    const { pokemonDetailSpesies } = usePokemon(id);
  return (
    <div>
      {pokemonDetailSpesies.flavor_text_entries &&
        pokemonDetailSpesies.flavor_text_entries.length > 0 && (
          <p className="mt-12 text-sm text-center">
            {pokemonDetailSpesies.flavor_text_entries[0].flavor_text}
          </p>
        )}
    </div>
  );
};

export default description;


import { useEffect, useState } from "react";
import { getPokemons } from "../../../api/pokemonApi";
import PokemonCard from "./PokemonCard";

interface Pokemon {
  id: number;
  name: string;
  image: string;
  types: string[];
}


function RenderZone() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getPokemons(50);
        setPokemons(data);
      } catch (error) {
        console.error("Error fetching pokemons:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-2 gap-1 p-1 overflow-y-auto h-full">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
}

export default RenderZone;

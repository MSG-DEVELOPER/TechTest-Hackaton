import { useEffect, useState } from "react";
import { getPokemons } from "../../../api/pokemonApi";
import PokemonCard from "./PokemonCard";

interface Pokemon {
  id: number;
  name: string;
  image: string;
  types: string[];
}

interface RenderZoneProps {
  searchTerm: string;
  selectedType: string | null;
}

function RenderZone({ searchTerm, selectedType }: RenderZoneProps) {
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

  // Filtramos por nombre y por tipo, teniendo en cuenta "all"
  const filteredPokemons = pokemons.filter((pokemon) => {
    const matchesName = pokemon.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = !selectedType || selectedType === "all" || pokemon.types.includes(selectedType);
    return matchesName && matchesType;
  });

  return (
    <div className="flex flex-col h-full">
      {filteredPokemons.length === 0 ? (
        <p className="text-center text-red-500 font-semibold mt-4">
          No s'han trobat pokémons
        </p>
      ) : (
        <div className="grid grid-cols-2 gap-1 p-1 overflow-y-auto h-full">
          {filteredPokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      )}
    </div>
  );
}

export default RenderZone;

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getPokemonDetails } from "../../api/pokemonApiDetails";
import { getTypeColor } from "../../utils/getTypeColor";

interface PokemonDetails {
  id: number;
  name: string;
  image: string;
  types: string[];
  height: number;
  weight: number;
}

function DetailsPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [pokemon, setPokemon] = useState<PokemonDetails | null>(null);

  function handleBack() {
    navigate("/");
  }

  useEffect(() => {
    async function fetchDetails() {
      if (!id) return;
      try {
        const data = await getPokemonDetails(Number(id));
        setPokemon(data);
      } catch (error) {
        console.error("Error fetching details:", error);
      }
    }
    fetchDetails();
  }, [id]);

  if (!pokemon) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-sm font-semibold">Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-start w-[340px] h-[400px] mx-auto shadow p-1 space-y-1 text-sm -mt-1">
      {/* Fila 1: Botón Back y nombre */}
      <div className="w-full p-1 px-3 flex justify-between items-center">
        <button
          onClick={handleBack}
          className="px-2 py-1 bg-gray-200 rounded text-xs hover:bg-gray-300"
        >
          ⏮
        </button>
        <p className="text-base font-semibold leading-none capitalize">
        #{pokemon.id} {pokemon.name}
        </p>
      </div>

      {/* Fila 3: Imagen */}
      <div className="w-full flex justify-center -mt-4">
        <img
          src={pokemon.image}
          alt={pokemon.name}
          className="w-40 h-40 object-contain "
        />
      </div>

      {/* Fila 4: Tipos */}
      <div className="w-full flex justify-center gap-1 -mt-2">
        {pokemon.types.map((type) => (
          <span
            key={type}
            className={`px-2 py-0.5 rounded text-xs capitalize ${getTypeColor(
              type
            )}`}
          >
            {type}
          </span>
        ))}
      </div>

      {/* Fila 5: Height & Weight */}
      <div className="w-full border flex justify-center gap-4 text-xs">
        <span>Height: {pokemon.height} m</span>
        <span>Weight: {pokemon.weight} kg</span>
      </div>

      {/* Fila 6: Zona inferior */}
      <div className="w-full border flex-1 flex items-center justify-center text-xs rounded">
        <span>Zona inferior (stats / moves)</span>
      </div>
    </div>
  );
}

export default DetailsPage;

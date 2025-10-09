import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getPokemonDetails } from "../../api/pokemonApiDetails";
import { getTypeColor } from "../../utils/getTypeColor";
import ProgressBar from "../../components/detailspage/progressBar/ProgressBar";
import Spinner from "../../components/common/Spinner";

interface PokemonDetails {
  id: number;
  name: string;
  image: string;
  types: string[];
  height: number;
  weight: number;
  stats: {
    hp: number;
    attack: number;
    defense: number;
    speed: number;
  };
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
    <div className="flex items-center justify-center w-[340px] h-[400px] mx-auto shadow">
      <Spinner />
    </div>
  );
}

  return (
    <div className="flex flex-col items-center justify-start w-[340px] h-[400px] mx-auto shadow p-1 space-y-1 text-sm -mt-1 bg-gray-300">
      {/* Fila 1: Botón Back y nombre */}
      <div className="w-full p-1 px-3 flex justify-between items-center">
        <button
          onClick={handleBack}
          className="px-2 py-1 bg-gray-200 rounded text-xs hover:bg-blue-300"
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
      <div className="w-full flex justify-center gap-4 text-xs">
        <span className="font-bold">Height: {pokemon.height} m</span>
        <span className="font-bold">Weight: {pokemon.weight} kg</span>
      </div>

      {/* Fila 6: Zona inferior */}
      <div className="w-full  flex-1 flex flex-col  text-xs bg-gray-200">
        {/* Fila 1: Título */}
        <div className="w-full pb-1">
          <span className="font-bold">STATS</span>
        </div>

        {/* Fila 2: Stats propiamente dicho */}
        <div className="flex flex-1 mt-1 ">
          {/* Columna izquierda */}
          <div className="flex-1 flex flex-col gap-2 p-1">
            {/* Fila 1 */}
            <div className="flex justify-between  p-1 items-center">
              <span>HP: {pokemon.stats.hp}</span>
              <span><ProgressBar valor={pokemon.stats.hp}/> </span>
            </div>
            {/* Fila 2 */}
            <div className="flex justify-between  p-1  items-center">
              <span>AT: {pokemon.stats.attack}</span>
              <span><ProgressBar valor={pokemon.stats.attack}/></span>
            </div>
          </div>

          {/* Columna derecha */}
          <div className="flex-1 flex flex-col gap-2  p-1">
            {/* Fila 1 */}
            <div className="flex justify-between  p-1 items-center">
              <span>DF: {pokemon.stats.defense}</span>
              <span><ProgressBar valor={pokemon.stats.defense}/></span>
            </div>
            {/* Fila 2 */}
            <div className="flex justify-between  p-1 items-center">
              <span>SP: {pokemon.stats.speed}</span>
              <span><ProgressBar valor={pokemon.stats.speed}/></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;

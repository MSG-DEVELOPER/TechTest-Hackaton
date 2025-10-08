import { getTypeColor } from "../../../utils/getTypeColor";
import { useNavigate } from "react-router-dom";


interface Pokemon {
  id: number;
  name: string;
  image: string;
  types: string[];
}

interface PokemonCardProps {
  pokemon: Pokemon;
}

function PokemonCard({ pokemon }: PokemonCardProps) {

  const navigate = useNavigate();

  const handleViewDetails = () => {
    
    navigate(`/details/${pokemon.id}`);
  };

  return (
    <div className="border border-gray-200 rounded-2xl p-4 text-center bg-white ">
      <img
        src={pokemon.image}
        alt={pokemon.name}
        className="mx-auto w-28 h-28 object-contain -mt-5"
      />
      <p className="font-bold  capitalize -mt-5">{pokemon.name}</p>

      <div className="flex justify-center gap-1 mt-1 ">
        {pokemon.types.map((type, index) => (
          <span
            key={index}
            className={`text-xs px-1  rounded-full capitalize ${getTypeColor(
              type
            )}`}
          >
            {type}
          </span>
        ))}
      </div>

      <button
        onClick={handleViewDetails}
        className="mt-3 px-3 py-1 bg-blue-400 text-white rounded-md text-sm hover:bg-blue-600 transition"
      >
        View details
      </button>
    </div>
  );
}

export default PokemonCard;

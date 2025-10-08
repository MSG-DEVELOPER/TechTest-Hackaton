interface Pokemon {
  id: number;
  name: string;
  image: string;
  types: string[];
}

interface PokemonCardProps {
  pokemon: Pokemon;
}


function PokemonCard({ pokemon  } : PokemonCardProps) {
  return (
    <div className="border border-gray-400 rounded-md p-2 text-center bg-white">
      <img src={pokemon.image} alt={pokemon.name} className="mx-auto w-20 h-20" />
      <p className="font-semibold capitalize">{pokemon.name}</p>
    </div>
  );
}

export default PokemonCard;

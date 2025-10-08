interface PokemonSummary {
  name: string;
  url: string;
}

interface PokemonType {
  type: {
    name: string;
  };
}



export async function getPokemons(limit = 50) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
  const data = await response.json();

  const pokemonPromises = data.results.map(async (pokemon:PokemonSummary) => {
    const res = await fetch(pokemon.url);
    const detailedData = await res.json();

    return {
      id: detailedData.id,
      name: detailedData.name,
      image: detailedData.sprites.front_default,
      types: detailedData.types.map((t:PokemonType) => t.type.name),
    };
  });

  const pokemons = await Promise.all(pokemonPromises);
  return pokemons;
}

//https://pokeapi.co/api/v2/pokemon/?limit=50 los 50 primeros
//https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png imagen a usar con id dinamico

//https://pokeapi.co/api/v2/pokemon/1 detalles
// dentro del json que nos devuelve , .name es el nombre
// .id el id
// .height altura en entero , hay que dividir entre 10
//.weight peso hay que dividir entre 10

//const types = data.types.map(t => t.type.name);
//console.log(types); // ["grass", "poison"]
// para obtener los tipos 

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

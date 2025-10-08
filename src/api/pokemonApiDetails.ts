// src/api/pokemonApiDetails.ts
interface PokemonType {
  type: {
    name: string;
  };
}



export async function getPokemonDetails(id: number) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    if (!response.ok) {
      throw new Error("Error fetching pokemon details");
    }

    const data = await response.json();

    return {
      id: data.id,
      name: data.name,
      image: data.sprites.front_default,
      types: data.types.map((t: PokemonType) => t.type.name),
      height: data.height / 10, // metros
      weight: data.weight / 10, // kg
    };
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// src/api/pokemonApiDetails.ts
interface PokemonType {
  type: {
    name: string;
  };
}

interface PokemonStats {
  hp: number;
  attack: number;
  defense: number;
  speed: number;
}

interface StatEntry {
  base_stat: number;
  stat: {
    name: string;
  };
}




function extractStats(statsArray: StatEntry[]): PokemonStats {
  const stats: PokemonStats = { hp: 0, attack: 0, defense: 0, speed: 0 };

  statsArray.forEach((statObj) => {
    const name = statObj.stat.name;
    const value = statObj.base_stat;

    switch (name) {
      case "hp":
        stats.hp = value;
        break;
      case "attack":
        stats.attack = value;
        break;
      case "defense":
        stats.defense = value;
        break;
      case "speed":
        stats.speed = value;
        break;
    }
  });

  return stats;
}



export async function getPokemonDetails(id: number) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    if (!response.ok) {
      throw new Error("Error fetching pokemon details");
    }

    const data = await response.json();
    const stats = extractStats(data.stats);

    return {
      id: data.id,
      name: data.name,
      image: data.sprites.front_default,
      types: data.types.map((t: PokemonType) => t.type.name),
      height: data.height / 10, // metros
      weight: data.weight / 10,
      stats // kg
    };
  } catch (error) {
    console.error(error);
    throw error;
  }
}

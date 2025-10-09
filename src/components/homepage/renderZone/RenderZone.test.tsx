import { render, screen, waitFor } from "@testing-library/react";
import RenderZone from "./RenderZone";
import { getPokemons } from "../../../api/pokemonApi";

interface PokemonCardProps {
  pokemon: {
    id: number;
    name: string;
    image: string;
    types: string[];
  };
}

// Mock de getPokemons
jest.mock("../../../api/pokemonApi", () => ({
  getPokemons: jest.fn(),
}));

// Mock de PokemonCard
jest.mock("./PokemonCard", () => (props: PokemonCardProps) => (
  <div>PokemonCard Mock - {props.pokemon.name}</div>
));

// Mock de Spinner
jest.mock("../../common/Spinner", () => () => <div>Spinner Mock</div>);

describe("RenderZone Component", () => {
  const mockData = [
    { id: 1, name: "pikachu", image: "pikachu.png", types: ["electric"] },
    { id: 2, name: "charmander", image: "charmander.png", types: ["fire"] },
  ];

  beforeEach(() => {
    (getPokemons as jest.Mock).mockResolvedValue(mockData);
  });

  test("muestra el spinner mientras carga", () => {
    render(<RenderZone searchTerm="" selectedType="all" />);
    expect(screen.getByText("Spinner Mock")).toBeInTheDocument();
  });

  test("renderiza los PokemonCard después de cargar", async () => {
    render(<RenderZone searchTerm="" selectedType="all" />);
    await waitFor(() => {
      expect(screen.getByText("PokemonCard Mock - pikachu")).toBeInTheDocument();
      expect(screen.getByText("PokemonCard Mock - charmander")).toBeInTheDocument();
    });
  });

  test("filtra por searchTerm y selectedType", async () => {
    render(<RenderZone searchTerm="pika" selectedType="electric" />);
    await waitFor(() => {
      expect(screen.getByText("PokemonCard Mock - pikachu")).toBeInTheDocument();
      expect(screen.queryByText("PokemonCard Mock - charmander")).toBeNull();
    });
  });

  test("muestra mensaje si no encuentra pokémons", async () => {
    render(<RenderZone searchTerm="bulbasaur" selectedType="water" />);
    await waitFor(() => {
      expect(screen.getByText("No s'han trobat pokémons")).toBeInTheDocument();
    });
  });
});

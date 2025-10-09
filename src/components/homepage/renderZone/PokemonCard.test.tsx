import { render, screen, fireEvent } from "@testing-library/react";
import PokemonCard from "./PokemonCard";
//import { useNavigate } from "react-router-dom";
import * as utils from "../../../utils/getTypeColor";

// Mock de useNavigate
const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  useNavigate: () => mockNavigate,
}));

// Mock de getTypeColor
jest.spyOn(utils, "getTypeColor").mockImplementation((type) => `color-${type}`);

describe("PokemonCard Component", () => {
  const mockPokemon = {
    id: 25,
    name: "pikachu",
    image: "pikachu.png",
    types: ["electric"],
  };

  test("renderiza nombre, imagen y tipos correctamente", () => {
    render(<PokemonCard pokemon={mockPokemon} />);

    // Nombre
    expect(screen.getByText("pikachu")).toBeInTheDocument();
    // Imagen
    const img = screen.getByAltText("pikachu") as HTMLImageElement;
    expect(img).toBeInTheDocument();
    expect(img.src).toContain("pikachu.png");
    // Tipo con clase
    expect(screen.getByText("electric")).toHaveClass("color-electric");
  });

  test("navega a la página de detalles al hacer click en el botón", () => {
    render(<PokemonCard pokemon={mockPokemon} />);
    const button = screen.getByText("View details");
    fireEvent.click(button);
    expect(mockNavigate).toHaveBeenCalledWith("/details/25");
  });
});

import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "./SearchBar";

describe("SearchBar Component", () => {
  test("renderiza el input con el valor inicial", () => {
    render(<SearchBar value="pikachu" onChange={() => {}} />);
    const input = screen.getByPlaceholderText("Buscar Pokémon...");
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue("pikachu");
  });

  test("llama a onChange al escribir en el input", () => {
    const handleChange = jest.fn();
    render(<SearchBar value="" onChange={handleChange} />);
    const input = screen.getByPlaceholderText("Buscar Pokémon...");
    fireEvent.change(input, { target: { value: "charmander" } });
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith("charmander");
  });
});

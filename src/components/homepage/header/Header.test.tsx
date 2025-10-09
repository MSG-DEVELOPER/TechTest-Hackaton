import { render, screen, fireEvent } from "@testing-library/react";
import Header from "./Header";

describe("Header Component", () => {
  test("renderiza título y botones", () => {
    render(<Header />);
    
    expect(screen.getByText("Mini Pokédex")).toBeInTheDocument();
    expect(screen.getByText("All")).toBeInTheDocument();
    expect(screen.getByText("Favorites")).toBeInTheDocument();
  });

  test("cambia el botón seleccionado al hacer click", () => {
    render(<Header />);
    
    const allBtn = screen.getByText("All");
    const favBtn = screen.getByText("Favorites");

    // Al inicio, All está seleccionado
    expect(allBtn).toHaveClass("bg-blue-500 text-white");
    expect(favBtn).toHaveClass("bg-gray-200 text-blue-700");

    // Hacer click en Favorites
    fireEvent.click(favBtn);
    expect(favBtn).toHaveClass("bg-blue-500 text-white");
    expect(allBtn).toHaveClass("bg-gray-200 text-blue-700");

    // Volver a All
    fireEvent.click(allBtn);
    expect(allBtn).toHaveClass("bg-blue-500 text-white");
    expect(favBtn).toHaveClass("bg-gray-200 text-blue-700");
  });
});

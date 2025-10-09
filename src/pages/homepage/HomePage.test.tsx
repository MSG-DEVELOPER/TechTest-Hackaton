import { render, screen, fireEvent } from "@testing-library/react";
import HomePage from "./HomePage";

// Mock de componentes hijos
jest.mock("../../components/homepage/header/Header", () => () => <div>Header Mock</div>);
jest.mock(
  "../../components/homepage/renderZone/RenderZone",
  () => (props: any) => <div>RenderZone Mock - {props.searchTerm} - {props.selectedType}</div>
);
jest.mock(
  "../../components/homepage/searchBar/SearchBar",
  () => (props: any) => (
    <input
      value={props.value}
      onChange={(e) => props.onChange(e.target.value)}
      placeholder="SearchBar Mock"
    />
  )
);
jest.mock(
  "../../components/homepage/labels/TypeLabels",
  () => (props: any) => <button onClick={() => props.onSelectType("fire")}>Select Fire</button>
);

describe("HomePage Component", () => {
  test("renderiza todos los componentes hijos", () => {
    render(<HomePage />);
    expect(screen.getByText("Header Mock")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("SearchBar Mock")).toBeInTheDocument();
    expect(screen.getByText(/RenderZone Mock\s*-\s*-\s*all/i)).toBeInTheDocument();
    expect(screen.getByText("Select Fire")).toBeInTheDocument();
  });

  test("permite cambiar el valor del input de búsqueda", () => {
    render(<HomePage />);
    const input = screen.getByPlaceholderText("SearchBar Mock");
    fireEvent.change(input, { target: { value: "pikachu" } });
    expect(screen.getByText(/RenderZone Mock\s*-?\s*pikachu\s*-?\s*all/i)).toBeInTheDocument();
  });

  test("permite cambiar el tipo seleccionado", () => {
    render(<HomePage />);
    const button = screen.getByText("Select Fire");
    fireEvent.click(button);
    expect(screen.getByText(/RenderZone Mock\s*-\s*-\s*fire/i)).toBeInTheDocument();
  });
});

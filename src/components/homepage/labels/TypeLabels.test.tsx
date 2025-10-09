import { render, screen, fireEvent } from "@testing-library/react";
import TypeLabels from "./TypeLabels";
import * as utils from "../../../utils/getTypeColor";

// Mock de getTypeColor
jest.spyOn(utils, "getTypeColor").mockImplementation((type) => `color-${type}`);

describe("TypeLabels Component", () => {
  const mockOnSelectType = jest.fn();

  beforeEach(() => {
    mockOnSelectType.mockClear();
    render(<TypeLabels onSelectType={mockOnSelectType} />);
  });

  test("renderiza todos los tipos", () => {
    const types = [
      "all",
      "fire",
      "water",
      "grass",
      "electric",
      "bug",
      "poison",
      "flying",
      "ground",
      "rock",
      "fairy",
    ];

    types.forEach((type) => {
      const el = screen.getByText(type.toUpperCase());
      expect(el).toBeInTheDocument();
      expect(el).toHaveClass(`color-${type}`);
    });
  });

  test("llama a onSelectType al hacer click en un tipo", () => {
    const fireLabel = screen.getByText("FIRE");
    fireEvent.click(fireLabel);
    expect(mockOnSelectType).toHaveBeenCalledWith("fire");

    const waterLabel = screen.getByText("WATER");
    fireEvent.click(waterLabel);
    expect(mockOnSelectType).toHaveBeenCalledWith("water");
  });
});

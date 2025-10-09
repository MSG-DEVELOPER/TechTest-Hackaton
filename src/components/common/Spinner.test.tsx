import { render, screen } from "@testing-library/react";
import Spinner from "./Spinner";

describe("Spinner Component", () => {
  test("se renderiza correctamente", () => {
    render(<Spinner />);
    const spinnerDiv = screen.getByTestId("spinner");
    expect(spinnerDiv).toBeInTheDocument();
  });
});

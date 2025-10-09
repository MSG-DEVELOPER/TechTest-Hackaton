import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProgressBar from "./ProgressBar";

describe("ProgressBar Component", () => {
  test("renderiza correctamente el contenedor", () => {
    render(<ProgressBar valor={50} />);
    const bar = screen.getByRole("progressbar");
    expect(bar).toBeInTheDocument();
  });

  test("ajusta el ancho en función del valor", () => {
    render(<ProgressBar valor={80} />);
    const innerBar = screen.getByTestId("progress-inner");
    expect(innerBar).toHaveStyle("width: 80px");
  });

  test("limita el ancho máximo a 110px", () => {
    render(<ProgressBar valor={200} />);
    const innerBar = screen.getByTestId("progress-inner");
    expect(innerBar).toHaveStyle("width: 110px");
  });
});

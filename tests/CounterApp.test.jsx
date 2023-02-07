const { render, screen, fireEvent } = require("@testing-library/react");
import { CounterApp } from "../src/CounterApp";

describe("Prueba en el <CounterApp />", () => {
  const initialValue = 10;
  test("debe hacer match con el snapshot", () => {
    const { container } = render(<CounterApp value={initialValue} />);
    expect(container).toMatchSnapshot();
  });

  test("debe de mostrar el valor inicial de 100 <CounterApp value={100}>", () => {
    render(<CounterApp value={100} />);
    expect(screen.getByText(100)).toBeTruthy();
    // expect(screen.getByRole('heading',{level: 2}).innerHTML).toContain('100');
  });

  test("debe de incrementar con el boton +1", () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByText("+1"));
    expect(screen.getByText("11")).toBeTruthy();
  });

  test("debe de incrementar con el boton -1", () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByText("-1"));
    expect(screen.getByText("9")).toBeTruthy();
  });

  test("debe de funcionar el boton de reset", () => {
    render(<CounterApp value={355} />);
    // fireEvent.click( screen.getByText('Reset'));
    // expect(screen.getByText(355)).toBeTruthy();
    fireEvent.click(screen.getByRole("button", { name: "btn-reset" }));
    expect(screen.getByText("355")).toBeTruthy();
  });
});

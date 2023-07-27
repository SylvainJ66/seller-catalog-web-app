import { Counter } from "@/ds/organisms";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const counter = (name) => screen.getByRole("heading", { level: 4, name: name });
const incButton = () => screen.getByRole("button", { name: "increment" });
const decButton = () => screen.getByRole("button", { name: "decrement" });

describe("Counter", () => {
  test("with default values renders the counter at 0", () => {
    render(<Counter />);
    expect(counter("0")).toBeInTheDocument();
  });
  test("with default values displays 2 buttons", () => {
    render(<Counter />);
    expect(decButton()).toBeInTheDocument();
    expect(incButton()).toBeInTheDocument();
  });
  test("click on the +1", async () => {
    const user = userEvent.setup();
    render(<Counter />);
    await user.click(incButton());
    expect(counter("1")).toBeInTheDocument();
  });
  test("click on the -1", async () => {
    const user = userEvent.setup();
    render(<Counter />);
    await user.click(decButton());
    expect(counter("-1")).toBeInTheDocument();
  });
});

describe("Counter with a 12 step", () => {
  test("with default values renders the counter at 0", () => {
    render(<Counter step={12} />);
    expect(counter("0")).toBeInTheDocument();
  });
  test("with default values displays 2 buttons", () => {
    render(<Counter step={12} />);
    expect(decButton()).toBeInTheDocument();
    expect(incButton()).toBeInTheDocument();
  });
  test("click on the +12", async () => {
    const user = userEvent.setup();
    render(<Counter step={12} />);
    await user.click(incButton());
    expect(counter("12")).toBeInTheDocument();
  });
  test("click on the -12", async () => {
    const user = userEvent.setup();
    render(<Counter step={12} />);
    await user.click(decButton());
    expect(counter("-12")).toBeInTheDocument();
  });
  test("click 3 times on the button +12", async () => {
    const user = userEvent.setup();
    render(<Counter step={12} />);
    await user.click(incButton());
    await user.click(incButton());
    await user.click(incButton());
    expect(counter("36")).toBeInTheDocument();
  });
});

import { screen, render } from "@testing-library/react";
import { Price } from "@/ds/atom/index.js";
import { vi } from "vitest";

describe("Price", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  test("USD", () => {
    vi.stubGlobal("navigator", { language: "en-US" });
    render(<Price value={100} currency="USD" />);
    expect(screen.getByText("$100.00")).toBeInTheDocument();
  });
  test("EUR", () => {
    vi.stubGlobal("navigator", { language: "fr-FR" });
    render(<Price value={100} currency="EUR" />);
    expect(screen.getByText("100,00 €")).toBeInTheDocument();
  });
});

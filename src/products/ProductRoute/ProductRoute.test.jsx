import { screen } from "@testing-library/react";
import { render } from "@/test-utils/render.jsx";
import ProductRoute from "@/products/ProductRoute/ProductRoute.jsx";
import { FavoritesContext } from "@/contexts";
import { vi } from "vitest";

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("<ProductRoute />", () => {
  it("renders correctly", async () => {
    vi.stubGlobal("navigator", { language: "fr-FR" });
    render(<ProductRoute />, {
      initialEntries: ["/products/123"],
      path: "/products/:id",
      wrapper: FavoritesContext.Provider,
    });

    expect(screen.getByRole("progressbar")).toBeInTheDocument();

    expect(
      await screen.findByRole("heading", { name: "ProductPage: Product Name" })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("alert", { name: "product-enrichment" })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: "Ajouter au favoris" })
    ).toBeInTheDocument();

    expect(screen.getByRole("button", { name: "Editer" })).toBeInTheDocument();

    expect(screen.getByRole("rowheader", { name: "Prix" })).toBeInTheDocument();

    expect(
      screen.getByRole("row", { name: /Prix.42,99.€/i })
    ).toBeInTheDocument();
  });
  test.todo("avec un id existant");
  test.todo("avec un id inexistant");
});

import { Page } from "@/ds/pages/index.js";
import { render, screen } from "@testing-library/react";

const EmptyComponent = () => <span data-testid="empty-component" />;

describe("Page", () => {
  it("renders the title", () => {
    render(<Page title="Test Title">pipo</Page>);
    expect(
      screen.getByRole("heading", { name: "Test Title" })
    ).toBeInTheDocument("Test Title");
  });

  it("renders the children", () => {
    render(
      <Page title="Test Title">
        <EmptyComponent />
      </Page>
    );
    expect(screen.getByTestId("empty-component")).toBeInTheDocument(
      "Test Title"
    );
  });
});

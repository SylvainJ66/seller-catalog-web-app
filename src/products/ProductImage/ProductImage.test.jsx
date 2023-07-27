import { render, screen } from "@testing-library/react";
import ProductImage from "@/products/ProductImage/ProductImage.jsx";

describe("<ProductImage />", () => {
  test("renders the image", () => {
    render(<ProductImage imageUrl="//test/image.jpg" name="Alt Text" />);
    expect(screen.getByAltText("Alt Text")).toHaveAttribute(
      "src",
      "//test/image.jpg"
    );
  });

  /**
   * Préférons l'accessibilité par testing library pour tester nos composants
   */
  test.skip("renders correctly", () => {
    const { container } = render(
      <ProductImage imageUrl="//test/image.jpg" name="Alt Text" />
    );
    expect(container).toMatchSnapshot();
  });
});

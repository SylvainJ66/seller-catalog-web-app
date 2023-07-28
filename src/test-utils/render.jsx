import { render } from "@testing-library/react";
import TestContext from "@/test-utils/TestContext.jsx";

function customRender(ui, options) {
  const { initialEntries, path, ...renderOptions } = options;
  return render(
    <TestContext initialEntries={initialEntries} path={path}>
      {ui}
    </TestContext>,
    renderOptions
  );
}

export * from "@testing-library/react";
export { customRender as render };

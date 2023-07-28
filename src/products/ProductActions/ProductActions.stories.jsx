import ProductActions from "@/products/ProductActions";
import { FavoritesContext } from "@/contexts";
import { withRouter } from "storybook-addon-react-router-v6";

export default {
  component: ProductActions,
  decorators: [
    withRouter,
    (Story) => (
      <FavoritesContext.Provider>
        <Story />
      </FavoritesContext.Provider>
    ),
  ],
  parameters: {
    reactRouter: {
      routePath: "/",
      outlet: <main>Main Content</main>,
    },
  },
};

export const Example = {
  args: {
    id: "123",
  },
};

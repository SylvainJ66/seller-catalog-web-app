import "./app.css";
import { RouterProvider } from "react-router-dom";
import { router } from "@/router.jsx";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "@/App/queryClient.js";
import { FavoritesContext } from "@/contexts";

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <FavoritesContext.Provider>
          <RouterProvider router={router} />
        </FavoritesContext.Provider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

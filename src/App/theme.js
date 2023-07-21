import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: { main: "#3778b3" },
    secondary: {
      main: "#8babc4",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
        textSuccess: {
          backgroundColor: "#0d193f",
        },
      },
      variants: [
        {
          props: { variant: "navigation" },
          style: {
            color: "white",
          },
        },
        {
          props: { variant: "navigation", color: "active" },
          style: {
            backgroundColor: "red",
          },
        },
      ],
    },
  },
});

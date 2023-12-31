import { Link, Outlet, useLocation } from "react-router-dom";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";

const mainMenu = [
  { name: "Produits", url: "/", domain: "products" },
  { name: "Commandes", url: "/orders", domain: "orders" },
  { name: "Finance", url: "/financial", domain: "financial" },
  { name: "Messages", url: "/messages", domain: "messages" },
  { name: "Marketplaces", url: "/marketPlaces", domain: "marketPlaces" },
  { name: "Favoris", url: "/favorites", domain: "favorites" },
];

const isCurrentTab = ({ url, pathname, domain }) =>
  url === pathname || pathname.startsWith(`/${domain}`);

/**
 * This is the main template of the application.
 * We have to use it with an [`<Outlet />`(https://reactrouter.com/en/main/components/outlet)] from react router.
 */
export default function MainTemplate() {
  const { pathname } = useLocation();

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component={Link}
              to="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Seller Catalog
            </Typography>

            <Box sx={{ flexGrow: 1, display: "flex" }}>
              {mainMenu.map(({ name, url, domain }) => (
                <Button
                  key={url}
                  component={Link}
                  to={url}
                  variant="navigation"
                  color={
                    isCurrentTab({ url, pathname, domain })
                      ? "active"
                      : undefined
                  }
                >
                  {name}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={() => {}} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="sergio.jpg" />
                </IconButton>
              </Tooltip>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
    </>
  );
}

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Switch from "@mui/material/Switch";
import { Button } from "@mui/material";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import { ColorModeContext } from "../../providers/ThemeProvider";

export default function Navbar() {
  const colorMode = React.useContext(ColorModeContext);
  const theme = useTheme();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          sx={{
            flexGrow: 1,
            textAlign: "center",
            fontFamily: "NasalizationRg-Regular",
            fontSize: "2.7rem",
            margin: "10px 0px",
          }}
          variant="h6"
          component="div"
        >
          Spacetagram
        </Typography>
        <IconButton
          sx={{ ml: 1 }}
          onClick={colorMode.toggleColorMode}
          color="inherit"
        >
          {theme.palette.mode === "dark" ? (
            <Brightness7Icon />
          ) : (
            <Brightness4Icon />
          )}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

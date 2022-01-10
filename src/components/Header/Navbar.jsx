import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Switch from "@mui/material/Switch";
import { Avatar, Button } from "@mui/material";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import { ColorModeContext } from "../../providers/ThemeProvider";
import rocket from "../../assets/rocket.png";

export default function Navbar() {
  const colorMode = React.useContext(ColorModeContext);
  const theme = useTheme();

  return (
    <AppBar position="static">
      <Toolbar>
          <Avatar src={rocket} alt="Rocket Logo" sx={{ width: 50, height: 50 }} />
        <Typography
          sx={{
            flexGrow: 1,
            textAlign: "center",
            fontFamily: "NasalizationRg-Regular",
            fontSize: "2rem",
            margin: "10px 0px",
          }}
          variant="h6"
          component="div"
        >
          Spacetagram <span style={{fontSize:20, display:"block", fontFamily:"Video Medium"}}>From the Nasa API</span>
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

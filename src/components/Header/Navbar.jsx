import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
          <Typography
            sx={{
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
      </AppBar>
    </Box>
  );
}

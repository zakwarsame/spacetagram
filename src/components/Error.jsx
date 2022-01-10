import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import error from "../assets/error.jpg";
import { Button } from "@mui/material";
import { deepPurple } from "@mui/material/colors";

// custom color for error button
const theme = createTheme({
  palette: {
    principle: {
      main: "#000517",
      contrastText: "#fff",
    },
  },
});

const Error = () => {
  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <Box
      sx={{
        background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7) ),  url(${error})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        minHeight: "96vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Typography
        align="center"
        variant="h1"
        sx={{
          color: deepPurple["A700"],
          letterSpacing: "20px",
        }}
      >
        404
      </Typography>
      <Typography
        align="center"
        variant="h5"
        sx={{
          maxWidth: "50%",
          color: "#fff",
          fontFamily: "Video Medium",
        }}
      >
        Oops! Looks like something went wrong. Make sure you've setup your API
        key, then try refreshing the page :)
      </Typography>
      <ThemeProvider theme={theme}>
        <Button
          onClick={refreshPage}
          color="principle"
          variant="contained"
          size="large"
          sx={{ margin: "20px", borderRadius: 10 }}
        >
          Refresh Page
        </Button>
      </ThemeProvider>
    </Box>
  );
};

export default Error;

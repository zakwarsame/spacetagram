import { createContext, useMemo, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { blueGrey, orange, grey, deepPurple } from "@mui/material/colors";
import { CssBaseline } from "@mui/material";
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export default function ToggleColorMode(props) {
  const [mode, setMode] = useState("dark");

  const getDesignTokens = (mode) => ({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            // palette values for light mode
            primary: {
              main: deepPurple["A700"],
            },
            divider: grey[500],
            background: {
              default: grey[300],
              paper: grey[200],
            },
            text: {
              primary: deepPurple["A700"],
              secondary: grey[800],
            },
          }
        : {
            // palette values for dark mode
            primary: {
              main: deepPurple["A700"],
            },
            divider: orange["A200"],
            background: {
              default: blueGrey[900],
              paper: blueGrey[900],
            },
            text: {
              primary: grey[50],
              secondary: grey[50],
            },
          }),
    },
  });

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {props.children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

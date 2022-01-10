import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { blueGrey, orange, grey, deepPurple } from '@mui/material/colors';
export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

export default function ToggleColorMode(props) {
  const [mode, setMode] = React.useState("dark");

  const getDesignTokens = (mode) => ({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            // palette values for light mode
            primary: {
              main: deepPurple['A700'],
            },
            divider: grey[500],
            text: {
              primary: deepPurple['A700'],
              secondary: grey[800],
            },
          }
        : {
            // palette values for dark mode
            primary: {
              main: deepPurple['A700'],
            },
            divider: orange['A200'],
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

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
    createTheme(getDesignTokens(mode)), [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
}

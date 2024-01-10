import { colors, createTheme } from "@mui/material";
import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext(null);
export const useThemeContext = () => {
  return useContext(ThemeContext);
};
export default function ThemeContextProvider({ children }) {
  const [mode, setMode] = useState("light");

  const purpleTheme = createTheme({
    palette: {
      type: mode,
      primary: {
        main: colors.deepPurple[500],
      },
      secondary: {
        main: colors.deepPurple[100],
      },
      divider: colors.grey[200],
      text: {
        primary: colors.deepPurple[800],
        secondary: colors.deepPurple[500],
      },
      background: {
        default: mode === "light" ? "#f5f5f5" : "#000",
        paper: mode === "light" ? "#fff" : colors.grey[900],
      },
    },
  });
  const blueTheme = createTheme({
    palette: {
      type: mode,
      primary: {
        main: colors.lightBlue[700],
      },
      secondary: {
        main: colors.lightBlue[100],
      },
      divider: colors.grey[200],
      text: {
        primary: colors.lightBlue[900],
        secondary: colors.lightBlue[700],
      },
      background: {
        default: mode === "light" ? "#f5f5f5" : "#000",
        paper: mode === "light" ? "#fff" : colors.grey[900],
      },
    },
  });
  const indigoTheme = createTheme({
    palette: {
      type: mode,
      primary: {
        main: colors.indigo[500],
      },
      secondary: {
        main: colors.indigo[100],
      },
      divider: colors.grey[200],
      text: {
        primary: colors.indigo[900],
        secondary: colors.indigo[700],
      },
      background: {
        default: mode === "light" ? "#f5f5f5" : "#000",
        paper: mode === "light" ? "#fff" : colors.grey[900],
      },
    },
  });
  const greenTheme = createTheme({
    palette: {
      type: mode,
      primary: {
        main: colors.teal[900],
      },
      secondary: {
        main: colors.teal[50],
      },
      divider: colors.grey[200],
      text: {
        primary: colors.teal[800],
        secondary: colors.teal[600],
      },
      background: {
        default: mode === "light" ? "#f5f5f5" : "#000",
        paper: mode === "light" ? "#fff" : colors.grey[900],
      },
    },
  });
  const yellowTheme = createTheme({
    palette: {
      type: mode,
      primary: {
        main: colors.amber[600],
      },
      secondary: {
        main: colors.amber[100],
      },
      divider: colors.grey[200],
      text: {
        primary: colors.yellow[800],
        secondary: colors.yellow[700],
      },
      background: {
        default: mode === "light" ? "#f5f5f5" : "#000",
        paper: mode === "light" ? "#fff" : colors.grey[900],
      },
    },
  });
  const orangeTheme = createTheme({
    palette: {
      type: mode,
      primary: {
        main: colors.orange[600],
        contrastText: "#fff",
      },
      secondary: {
        main: colors.orange[100],
      },
      divider: colors.grey[200],
      text: {
        primary: colors.orange[900],
        secondary: colors.orange[800],
      },
      background: {
        default: mode === "light" ? "#f5f5f5" : "#000",
        paper: mode === "light" ? "#fff" : colors.grey[900],
      },
    },
  });
  const redTheme = createTheme({
    palette: {
      type: mode,
      primary: {
        main: colors.red[700],
      },
      secondary: {
        main: colors.red[100],
      },
      divider: colors.grey[200],
      text: {
        primary: colors.red[800],
        secondary: colors.red[600],
      },
      background: {
        default: mode === "light" ? "#f5f5f5" : "#000",
        paper: mode === "light" ? "#fff" : colors.grey[900],
      },
    },
  });
  const darkTheme = createTheme({
    palette: {
      type: mode,
      primary: {
        main: colors.blueGrey[900],
      },
      secondary: {
        main: colors.blueGrey[100],
      },
      divider: colors.grey[200],
      text: {
        primary: colors.blueGrey[800],
        secondary: colors.blueGrey[700],
      },
      background: {
        default: mode === "light" ? "#f5f5f5" : "#000",
        paper: mode === "light" ? "#fff" : colors.grey[900],
      },
    },
  });
  const lightTheme = createTheme({
    palette: {
      type: mode,
      primary: {
        main: colors.grey[100],
      },
      secondary: {
        main: colors.grey[600],
      },
      divider: colors.grey[200],
      text: {
        primary: colors.grey[900],
        secondary: colors.grey[700],
      },
      background: {
        default: mode === "light" ? "#f5f5f5" : "#000",
        paper: mode === "light" ? "#fff" : colors.grey[900],
      },
    },
  });
  const [theme, setTheme] = useState(greenTheme);
  return (
    <ThemeContext.Provider
      value={{
        mode,
        setMode,
        theme,
        setTheme,
        purpleTheme,
        blueTheme,
        indigoTheme,
        greenTheme,
        yellowTheme,
        orangeTheme,
        redTheme,
        darkTheme,
        lightTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

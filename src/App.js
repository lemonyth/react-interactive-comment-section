import React from "react";
import { Container } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

//custom components
import CommentCard from "./components/commentCard/CommentCard";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#5457b6",
        light: "#c3c4ef",
      },

      secondary: {
        main: "#67727e",
        dark: "#324152",
        light: "#eaecf1",
      },
      error: {
        main: "#ed6468",
        light: "#ffb8bb",
      },
    },
    typography: {
      fontFamily: ["Rubik"].join(","),
      //fontWeightBold: 700,
    },
    overrides: {
      MuiIconButton: {
        root: {
          "&:hover": {
            backgroundColor: "red",
          },
        },
      },
    },
  });

  return (
    <Container
      sx={{ display: "flex", px: { xs: 0 }, justifyContent: "center" }}
    >
      <ThemeProvider theme={theme}>
        <CommentCard />
      </ThemeProvider>
    </Container>
  );
}

export default App;

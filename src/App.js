import React from "react";
import { Box } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

//custom components
import CommentCard from "./components/commentCard/CommentCard";
import ReplyForm from "./components/replyForm/ReplyForm";
import CommentForm from "./components/addComment/CommentForm";

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
  });

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",

        py: 5,
        px: 1,
      }}
    >
      <ThemeProvider theme={theme}>
        <CommentCard />
        <CommentCard />
        <CommentForm />
      </ThemeProvider>
    </Box>
  );
}

export default App;

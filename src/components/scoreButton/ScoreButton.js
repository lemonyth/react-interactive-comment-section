import React from "react";
import { makeStyles } from "@mui/styles";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import plusIcon from "../../assets/icon-plus.svg";
import minusIcon from "../../assets/icon-minus.svg";

const useStyles = makeStyles({
  root: {
    "&:hover": {
      backgroundColor: "transparent",
      color: "primary",
    },
  },
});

function ScoreButton() {
  const classes = useStyles();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { sx: "row", sm: "column" },
        width: {
          xs: 100,
          sm: 45,
        },
        height: {
          xs: 40,
          sm: 100,
        },

        mx: { xs: 1, sm: 2 },
        mt: { xs: "", sm: 1 },
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: "secondary.light",
        borderRadius: 3,
      }}
    >
      <IconButton disableRipple className={classes.root}>
        <Box component="img" alt="add" src={plusIcon} color="primary.main" />
      </IconButton>
      <Typography sx={{ my: 1, color: "primary.main", fontWeight: "medium" }}>
        12
      </Typography>
      <IconButton disableRipple className={classes.root}>
        <Box component="img" alt="remove" src={minusIcon} />
      </IconButton>
    </Box>
  );
}

export default ScoreButton;

import React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/system/Box";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

function ReplyForm() {
  return (
    <Card
      elevation={0}
      sx={{
        mt: 2,
        borderRadius: 2,
        maxWidth: "700px",
        width: { xs: "94%", sm: "95%" },
        p: 2,
      }}
    >
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <Avatar sx={{ display: { xs: "none", sm: "flex" }, mr: 2 }}>R</Avatar>
        <TextField
          sx={{ flexGrow: 1, mx: 0, display: { xs: "none", sm: "flex" } }}
          multiline
          rows={2}
          placeholder="Add a comment..."
        />
        <TextField
          sx={{ flexGrow: 1, mx: 0, display: { xs: "flex", sm: "none" } }}
          multiline
          rows={4}
          placeholder="Add a comment..."
        />

        <Button
          disableElevation
          sx={{
            display: { xs: "none", sm: "flex" },
            height: "40px",
            "&:hover": {
              backgroundColor: "primary.light",
            },
            ml: 2,
          }}
          variant="contained"
        >
          Reply
        </Button>
        <Box
          sx={{
            display: { xs: "flex", sm: "none" },

            justifyContent: "space-between",
            my: 2,
            px: 1,
          }}
        >
          <Avatar>R</Avatar>
          <Button
            disableElevation
            sx={{
              height: "40px",
              "&:hover": {
                backgroundColor: "primary.light",
              },
            }}
            variant="contained"
          >
            Reply
          </Button>
        </Box>
      </Box>
    </Card>
  );
}

export default ReplyForm;

import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";

import ReplyButton from "../replyButton/ReplyButton";

function CommentCard() {
  return (
    <Card sx={{ p: 1 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          minWidth: "375px",
        }}
      >
        <Box sx={{ display: { xs: "none", sm: "flex" } }}>
          <Button>Score Button</Button>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
          <Box
            sx={{
              //border: "red solid 1px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                //justifyContent: "space-evenly",
              }}
            >
              <Avatar>A</Avatar>
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  color: "secondary.dark",
                  fontWeight: "medium",
                  fontSize: 19,
                  mx: 3,
                }}
              >
                amyrobson
              </Typography>
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: 19,
                  color: "secondary.main",
                }}
              >
                1 month ago
              </Typography>
            </Box>
            <ReplyButton />
          </Box>
        </Box>
      </Box>
    </Card>
  );
}

export default CommentCard;

import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import ReplyForm from "../replyForm/ReplyForm";

import ReplyButton from "../replyButton/ReplyButton";
import ScoreButton from "../scoreButton/ScoreButton";

function CommentCard() {
  const [showReplyForm, setShowReplyForm] = useState(false);
  function handleShowReplyForm() {
    if (!showReplyForm) {
      setShowReplyForm(true);
    } else {
      setShowReplyForm(false);
    }

    //console.log(showReplyForm);
  }
  return (
    <div>
      <Card
        elevation={0}
        sx={{ p: 1, pt: 3, pr: 2, mt: 2, maxWidth: "700px", borderRadius: 2 }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <Box sx={{ display: { xs: "none", sm: "flex" } }}>
            <ScoreButton />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flexGrow: 1,
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                //border: "red solid 1px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                ml: 2,
                alignItems: "center",
                mb: -1,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Avatar
                  sx={{ width: { xs: 30, sm: 35 }, height: { xs: 30, sm: 35 } }}
                >
                  A
                </Avatar>
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    color: "secondary.dark",
                    fontWeight: "medium",
                    fontSize: { xs: 16, sm: 19 },
                    mx: 2,
                  }}
                >
                  amyrobson
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: { xs: 16, sm: 19 },
                    color: "secondary.main",
                  }}
                >
                  1 month ago
                </Typography>
              </Box>
              <Box sx={{ display: { xs: "none", sm: "flex" } }}>
                <ReplyButton handleShowReplyForm={handleShowReplyForm} />
              </Box>
            </Box>
            <CardContent>
              <Typography color="secondary.main">
                Impressive! Though it seems the drag feature could be improved.
                But overall it looks incredible. You've nailed the design and
                the responsiveness at various breakpoints works really well.
              </Typography>
            </CardContent>
            <CardActions
              sx={{
                display: { xs: "flex", sm: "none" },
                justifyContent: "space-between",
              }}
            >
              <ScoreButton />

              <ReplyButton handleShowReplyForm={handleShowReplyForm} />
            </CardActions>
          </Box>
        </Box>
      </Card>

      {showReplyForm && <ReplyForm />}
    </div>
  );
}

export default CommentCard;

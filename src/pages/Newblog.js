import * as React from "react";
import Box from "@mui/joy/Box";
import TextField from "@mui/joy/TextField";
import Button from "@mui/joy/Button";
import { Avatar, Container, Grid, Typography } from "@mui/material";
import blokPng from "../assets/blok.png";
import googlePng from "../assets/google.png";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { useState } from "react";


export default function NewBlog() {
  const [title, setTitle] = useState("");
  const [imgUrl, setİmgUrl] = useState();
  const [desc, setDesc] = useState("");
  console.log(title,imgUrl,desc);
  return (
    <Container
      className="login-container"
      sx={{ width: "456px", height: "756px" }}
    >
      <Box
        sx={{
          py: 2,
          display: "grid",
          gap: 2,
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <Avatar
          className="login-avatar"
          src={blokPng}
          sx={{ width: "156px", height: "156px", mx: "auto" }}
          alt="avatar-img"
        />
        <Typography
          variant="h4"
          component="h1"
          sx={{ m: 4, fontFamily: "Girassol", color: "#046582" }}
        >
          ── New Blog ──
        </Typography>
        <TextField
          id="title"
          label="Title"
          name="title"
          autoComplete="title"
          variant="outlined"
          color="danger"
          autoFocus
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
        />

        <TextField
          name="imageUrl"
          label="Image URL"
          type="url"
          id="imageUrl"
          variant="outlined"
          color="danger"
          value={imgUrl}
          onChange={(e)=>setİmgUrl(e.target.value)}

        />
        <TextareaAutosize
          name="content"
          label="Content"
          id="content"
          aria-label="minimum height"
          minRows={30}
          style={{
            width: "400px",
            height: "256px",
            mx: "auto",
            resize: "none",
          }}
          value={desc}
          onChange={(e)=>setDesc(e.target.value)}
        />
        <Grid item xs={12}>
          <Button
            style={{
              backgroundColor: "#046582",
              fontWeight: 700,
              color: "white",
            }}
            variant="contained"
            type="submit"
            // onClick={han
            
            fullWidth
          >
            SUBMIT
          </Button>
        </Grid>
      </Box>
    </Container>
  );
}

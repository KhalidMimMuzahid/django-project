import { TextField, Button, Grid, Typography } from "@material-ui/core";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const RoomJoinPage = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    roomCode: "",
    error: "",
  });
  function handleTextFieldChange(e) {
    setState((prev) => {
      return { ...prev, roomCode: e.target.value };
    });
  }

  function roomButtonPressed() {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        code: state.roomCode,
      }),
    };
    fetch("http://127.0.0.1:8000/api/join-room", requestOptions)
      .then((response) => {
        if (response.ok) {
          navigate(`/room/${state.roomCode}`);
        } else {
          setState((prev) => {
            return { ...prev, error: "Room not found." };
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} align="center">
        <Typography variant="h4" component="h4">
          Join a Room
        </Typography>
      </Grid>
      <Grid item xs={12} align="center">
        <TextField
          error={state.error}
          label="Code"
          placeholder="Enter a Room Code"
          value={state.roomCode}
          helperText={state.error}
          variant="outlined"
          onChange={handleTextFieldChange}
        />
      </Grid>
      <Grid item xs={12} align="center">
        <Button variant="contained" color="primary" onClick={roomButtonPressed}>
          Enter Room
        </Button>
      </Grid>
      <Grid item xs={12} align="center">
        <Button variant="contained" color="secondary" to="/" component={Link}>
          Back
        </Button>
      </Grid>
    </Grid>
  );
};

export default RoomJoinPage;

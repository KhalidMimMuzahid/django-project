/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { MyContext } from "../../context/MyContextProvider";
import { Button, Grid, Typography } from "@material-ui/core";

const Room = () => {
  const [state, setState] = useState({
    votesToSkip: 2,
    guestCanPause: false,
    isHost: false,
  });
  const { state: roomCodeState, setState: setRoomCodeState } =
    useContext(MyContext);
  const navigate = useNavigate();
  const roomCode = useLoaderData();
  // this.getRoomDetails();

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/get-room" + "?code=" + roomCode)
      .then((response) => {
        if (!response.ok) {
          setRoomCodeState({
            roomCode: null,
          });
          navigate("/");
        }

        return response.json();
      })
      .then((data) => {
        setState({
          votesToSkip: data.votes_to_skip,
          guestCanPause: data.guest_can_pause,
          isHost: data.is_host,
        });
      });
  }, []);

  function leaveButtonPressed() {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    };
    fetch("http://127.0.0.1:8000/api/leave-room", requestOptions).then(
      (_response) => {
        setRoomCodeState({
          roomCode: null,
        });
        navigate("/");
      }
    );
  }

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} align="center">
        <Typography variant="h4" component="h4">
          Code: {roomCodeState.roomCode}
        </Typography>
      </Grid>
      <Grid item xs={12} align="center">
        <Typography variant="h6" component="h6">
          Votes: {state.votesToSkip}
        </Typography>
      </Grid>
      <Grid item xs={12} align="center">
        <Typography variant="h6" component="h6">
          Guest Can Pause: {state.guestCanPause.toString()}
        </Typography>
      </Grid>
      <Grid item xs={12} align="center">
        <Typography variant="h6" component="h6">
          Host: {state.isHost.toString()}
        </Typography>
      </Grid>
      <Grid item xs={12} align="center">
        <Button
          variant="contained"
          color="secondary"
          onClick={leaveButtonPressed}
        >
          Leave Room
        </Button>
      </Grid>
    </Grid>
  );
};

export default Room;

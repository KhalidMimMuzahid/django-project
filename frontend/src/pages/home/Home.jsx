/* eslint-disable react-hooks/exhaustive-deps */
import { Grid, Button, ButtonGroup, Typography } from "@material-ui/core";
import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MyContext } from "../../context/MyContextProvider";
const Home = () => {
  const navigate = useNavigate();
  const { state, setState } = useContext(MyContext);
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/user-in-room")
      .then((response) => response.json())
      .then((data) => {
        console.log({ data });
        if (data?.code) {
          // navigate(`/room/${data?.code}`);

          setState((prev) => {
            return { ...prev, roomCode: data?.code };
          });
        }
      });
  }, []);
  useEffect(() => {
    if (state?.roomCode) {
      navigate(`/room/${state?.roomCode}`);
    }
  }, [state?.roomCode]);
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} align="center">
        <Typography variant="h3" compact="h3">
          House Party
        </Typography>
      </Grid>
      <Grid item xs={12} align="center">
        <ButtonGroup disableElevation variant="contained" color="primary">
          <Button color="primary" to="/join" component={Link}>
            Join a Room
          </Button>
          <Button color="secondary" to="/create" component={Link}>
            Create a Room
          </Button>
        </ButtonGroup>
      </Grid>
    </Grid>
  );
};

export default Home;

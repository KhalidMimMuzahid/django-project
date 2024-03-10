import { Grid, Button, ButtonGroup, Typography } from "@material-ui/core";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/user-in-room")
      .then((response) => response.json())
      .then((data) => {
        console.log({ data });
        if (data?.code) {
          navigate(`/room/${data?.code}`);
        }
      });
  }, []);
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

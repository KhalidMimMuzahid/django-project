import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Room = () => {
  const [state, setState] = useState({
    votesToSkip: 2,
    guestCanPause: false,
    isHost: false,
  });

  const roomCode = useLoaderData();
  // this.getRoomDetails();

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/get-room" + "?code=" + roomCode)
      .then((response) => response.json())
      .then((data) => {
        setState({
          votesToSkip: data.votes_to_skip,
          guestCanPause: data.guest_can_pause,
          isHost: data.is_host,
        });
      });
  }, []);
  return (
    <div>
      <h3>{roomCode}</h3>
      <p>Votes: {state.votesToSkip}</p>
      <p>Guest Can Pause: {state.guestCanPause.toString()}</p>
      <p>Host: {state.isHost.toString()}</p>
    </div>
  );
};

export default Room;

import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Error from "../pages/errorPage/Error";
import Home from "../pages/home/Home";
import Room from "../components/Room";
import RoomJoinPage from "../components/RoomJoinPage";
import CreateRoomPage from "../components/CreateRoomPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },

      { path: "/join", element: <RoomJoinPage /> },
      { path: "/create", element: <CreateRoomPage /> },
      {
        path: "/room/:roomCode",
        loader: ({ params }) => params?.roomCode,
        element: <Room />,
      },
    ],
  },
]);
// /:roomCode

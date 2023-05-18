import { AppContext } from "./AppContext";
import { useContext } from "react";
import Game from "./Game";
import Login from "./Login";

export default function App() {

  const { loggedIn } = useContext(AppContext);

  if (!loggedIn) {
    return <Login />
  }

  return <Game />
}

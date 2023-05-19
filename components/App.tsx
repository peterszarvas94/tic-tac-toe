import { AppContext } from "./AppContext";
import { useContext } from "react";
import Game from "./Game";
import Login from "./Login";
import SizeSelect from "./SizeSelect";

export default function App() {

  const { game } = useContext(AppContext);

  if (game.status === "logged-out") {
    return <Login />
  }

  if (game.status === "logged-in") {
    return <SizeSelect />
  }

  return <Game />
}

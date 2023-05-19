import { useContext } from "react";
import { AppContext } from "@/components/AppContext";
import Game from "@/components/Game";
import Login from "@/components/Login";
import Options from "@/components/Options";

export default function App() {

  const { game } = useContext(AppContext);

  if (game.status === "logged-out") {
    return <Login />
  }

  if (game.status === "logged-in") {
    return <Options />
  }

  return <Game />
}

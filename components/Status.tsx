import { useContext } from "react";
import { AppContext } from "./AppContext";

export default function Staus() {

  const { user, game } = useContext(AppContext);

  return (
    <div className="text-2xl">
      {game.status === "won" ? (
        `${game.winner} won!`
      ) : (
        `Next Player: ${user}`
      )}
    </div>
  )
}

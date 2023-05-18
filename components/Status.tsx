import { useContext } from "react";
import { AppContext } from "./AppContext";

export default function Staus() {

  const { user, winStatus } = useContext(AppContext);

  return (
    <div className="text-2xl">
      {winStatus.won ? (
        `${winStatus.winner} won!`
      ) : (
        `Next Player: ${user}`
      )}
    </div>
  )
}

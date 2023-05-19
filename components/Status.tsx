import { ReactNode, useContext } from "react";
import { AppContext } from "@/components/AppContext";

export default function Staus() {

  const { user, game, players } = useContext(AppContext);

  if (game.status === "won") {
    return (
      <div className="text-2xl flex gap-4 items-center">
        <div>winner:</div>
        <div className="flex w-10 h-10 items-center justify-center rounded-lg bg-primary text-white">{game.winner}</div>
      </div>
    )
  }

  let symbols: ReactNode[] = [];
  for (let i = 0; i < players.length; i++) {
    const player = players[i];
    symbols.push(
      <div
        className={`
          flex w-10 h-10 items-center justify-center rounded-lg
          ${player === user ? "bg-primary text-white" : ""}
        `}
        key={player}
      >
        {player}
      </div>
    )
  }


  return (
    <div className="text-2xl flex gap-4 items-center">
      <div>next player:</div>
      <div className="flex gap-2 text-3xl">{symbols}</div>
    </div>
  )
}

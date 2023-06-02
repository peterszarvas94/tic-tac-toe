import { ReactNode, useContext } from "react";
import { AppContext } from "@/components/AppContext";

export default function Staus() {

  const { current, players } = useContext(AppContext);

  let playerList: ReactNode[] = [];
  for (let i = 0; i < players.length; i++) {
    const player = players[i];
    playerList.push(
      <li
        key={player.id}
        className="flex gap-4 items-center"
      >
        <div
          className={`
          flex w-10 h-10 items-center justify-center rounded-lg 
          ${(player.symbol === current.symbol) ? "bg-primary text-white" : ""}
        `}
        >{player.symbol}</div>
        <div>{player.name}</div>
      </li>
    )
  }

  return (
    <div>
      <div className="flex gap-4 items-center">
        <ul className="flex flex-col gap-2">
          {playerList}
        </ul>
      </div>
    </div>
  )
}

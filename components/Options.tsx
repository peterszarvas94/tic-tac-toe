import { useContext, useState } from "react";
import type { PlayersSize, TableSize } from "@/utils/types";
import { AppContext } from "@/components/AppContext";
import { generateEmptyState } from "@/utils/state";
import { generatePlayerList } from "@/utils/player";

export default function Options() {
  const { size, setSize, setTableState, setUser, setGame, players, setPlayers } = useContext(AppContext);
  const [inputTable, setInputTable] = useState<TableSize>(size);
  const [inputPlayers, setInputPlayers] = useState<PlayersSize>(players.length as PlayersSize);

  return (
    <div className="flex flex-col gap-4 w-fit mx-auto">
      <div className="flex gap-4 items-center">
        <label htmlFor="table-size" className="text-2xl grow">table size</label>
        <select
          name="table-size"
          value={inputTable}
          onChange={(e) => setInputTable(parseInt(e.target.value) as TableSize)}
          className="
            border border-primary rounded-xl p-1 bg-secondary text-2xl cursor-pointer text-center focus:outline-primary
          "
        >
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>

      <div className="flex gap-4 items-center grow">
        <label htmlFor="player-count" className="text-2xl">player count</label>
        <select
          name="player-count"
          value={inputPlayers}
          onChange={(e) => setInputPlayers(parseInt(e.target.value) as PlayersSize)}
          className="
            border border-primary rounded-xl p-1 bg-secondary text-2xl cursor-pointer text-center focus:outline-primary
          "
        >
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>

      <div className="flex justify-center pt-10">
        <button
          className="
            text-2xl border border-primary py-2 px-4 w-fit rounded-xl flex items-center bg-secondary focus:outline-primary
          "
          onClick={() => {
            if (inputTable < 5 || 10 < inputTable) return;
            const def = generateEmptyState(inputTable, inputTable);
            setTableState(def);
            setUser("O");
            setGame({ status: "playing" });
            setSize(inputTable);
            const playerList = generatePlayerList(inputPlayers);
            setPlayers(playerList);
          }}
        >
          start game
        </button>
      </div>
    </div>
  );
}

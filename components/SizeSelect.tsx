import { useContext, useState } from "react";
import { AppContext } from "@/components/AppContext";
import { TableSize } from "@/utils/types";
import { defaultState } from "@/utils/defaultState";

export default function SizeSelect() {
  const { size, setSize, setTableState, setUser, setGame } = useContext(AppContext);
  const [input, setInput] = useState<TableSize>(size);

  return (
    <div className="flex flex-col gap-4">
      <div className="text-2xl text-center">Select table size</div>
      <div className="flex gap-2">
        <select
          value={input}
          onChange={(e) => setInput(parseInt(e.target.value) as TableSize)}
          className="border border-primary rounded-xl p-1 bg-secondary text-primary text-2xl cursor-pointer text-center"
        >
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
        <button
          className="
          text-2xl border border-primary pt-2 pb-1 px-4 rounded-xl flex items-center bg-secondary
        "
          onClick={() => {
            if (input < 5 || 10 < input) return;
            const def = defaultState(input, input);
            setTableState(def);
            setUser("O");
            setGame({ status: "playing" });
            setSize(input);
          }}
        >
          Start game
        </button>
      </div>
    </div>
  );
}

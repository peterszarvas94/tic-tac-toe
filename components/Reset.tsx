import { useContext } from "react";
import { AppContext } from "./AppContext";
import { defaultState } from "@/utils/defaultState";

export default function Reset() {
  const { setTableState, setUser, setWinStatus, winStatus, input, setSize } = useContext(AppContext);
  return (
    <div>
      <button
        className="
          text-2xl border border-primary pt-2 pb-1 px-4 rounded-xl flex items-center bg-secondary
        "
        onClick={() => {
          if (input < 5 || 10 < input) return;
          const def = defaultState(input, input);
          setTableState(def);
          setUser("O");
          setWinStatus({ won: false });
          setSize(input);
        }}>
        {winStatus.won ? "Play again" : "Reset"}
      </button>
    </div>
  )
}

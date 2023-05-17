"use client";

import { useContext } from "react";
import { TableContext } from "./TableContext";
import { defaultState } from "@/utils/defaultState";

interface Props {
  rows: number;
  cols: number;
}

export default function Reset({ rows, cols }: Props) {
  const { setTableState, setUser, setWinStatus, winStatus, size } = useContext(TableContext);
  return (
    <div>
      <button
        className="
          text-2xl border-[1px] border-primary pt-2 pb-1 px-4 rounded-xl flex items-center bg-secondary
        "
        onClick={() => {
          const def = defaultState(rows, cols);
          setTableState(def);
          setUser("O");
          setWinStatus({ won: false });
        }}>
        {winStatus.won ? "Play again" : "Reset"}
      </button>
    </div>
  )
}

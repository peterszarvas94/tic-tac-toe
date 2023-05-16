"use client";

import { useContext } from "react";
import { TableContext } from "./TableContext";
import { defaultState } from "@/utils/defaultState";

interface Props {
  rows: number;
  cols: number;
}

export default function Reset({ rows, cols }: Props) {
  const { setTableState } = useContext(TableContext);
  return (
    <button className="text-2xl underline" onClick={() => {
      const def = defaultState(rows, cols);
      setTableState(def);
    }}>
      Reset
    </button>
  )
}

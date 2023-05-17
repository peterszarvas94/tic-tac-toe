"use client";

import { useContext } from "react";
import { TableContext } from "./TableContext";
import { TableSize } from "@/utils/types";

export default function Size() {
  const { input, setInput } = useContext(TableContext);

  return (
    <div>
      <input
        type="number"
        value={input}
        min={5}
        max={10}
        className="border border-primary rounded-xl p-2 w-14 bg-secondary text-primary text-right text-xl"
        onChange={(e) => setInput(parseInt(e.target.value) as TableSize)}
      />
    </div>
  );
}

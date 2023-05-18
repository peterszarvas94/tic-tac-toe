import { useContext } from "react";
import { AppContext } from "./AppContext";
import { TableSize } from "@/utils/types";

export default function Size() {
  const { input, setInput } = useContext(AppContext);

  return (
    <div>
      <select
        value={input}
        onChange={(e) => setInput(parseInt(e.target.value) as TableSize)}
        className="border border-primary rounded-xl p-1 bg-secondary text-primary text-2xl cursor-pointer"
      >
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
    </div>
  );
}

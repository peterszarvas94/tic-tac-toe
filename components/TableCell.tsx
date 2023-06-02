import { useContext, useState } from "react";
import type { Cell, TableState } from "@/utils/types";
import { AppContext } from "@/components/AppContext";
import { checkWin } from "@/utils/checkWin";
import { nextPlayer } from "@/utils/player";
import { toast } from "react-hot-toast";

interface Props {
  row: number;
  col: number;
}

export default function TableCell({ row, col }: Props) {

  const { tableState, setTableState, game, setGame, players, current, setCurrent, piecesToWin } = useContext(AppContext);
  const [hovered, setHovered] = useState(false);

  const rowState = tableState.rows[row];
  if (!rowState) return <td />;

  const cellState = rowState.cells[col];
  const hoveredCell = hovered && !cellState.state && game.status === "playing";
  const state = cellState.state ?? null;

  const wonStyle =
    (game.status === "won" && game.cells.some(cell => cell.row === row && cell.col === col)) ?
      "bg-primary text-white" :
      "";

  const hoverStyle =
    (game.status === "playing" && !state) ?
      "hover:bg-accent hover:text-white" :
      "";

  return (
    <td
      className={`border border-black w-10 h-10 text-3xl cursor-pointer ${wonStyle} ${hoverStyle}`}

      onMouseOver={() => {
        setHovered(true);
      }}
      onMouseLeave={() => {
        setHovered(false);
      }}
      onClick={() => {
        if (state !== null) return;
        if (game.status === "won") return;

        const newCell: Cell = {
          row,
          col,
          state: current.symbol,
        }

        const newTableState: TableState = { ...tableState };
        newTableState.rows[row].cells[col] = newCell;

        setTableState(newTableState);

        const check = checkWin(newTableState, row, col, current.symbol, piecesToWin);
        if (check && check.status === "won") {
          setGame(check);
          toast.success(`${current.name} won!`, { className: "text-xl" });
          return;
        }

        const next = nextPlayer(players, current);
        setCurrent(next);
      }}
    >
      <div className="w-full h-full flex items-center justify-center">
        {hoveredCell ? current.symbol : state}
      </div>
    </td>
  );
}

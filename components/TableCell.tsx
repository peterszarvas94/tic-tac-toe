import { useContext, useState } from "react";
import { checkWin } from "@/utils/checkWin";
import { AppContext } from "@/components/AppContext";
import type { Cell, TableState } from "@/utils/types";

interface Props {
  row: number;
  col: number;
}

export default function TableCell({ row, col }: Props) {

  const { tableState, setTableState, user, setUser, game, setGame } = useContext(AppContext);
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
      className={`border border-black w-10 h-10 text-3xl text-center cursor-pointer ${wonStyle} ${hoverStyle}`}

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
          state: user,
        }

        const newTableState: TableState = { ...tableState };
        newTableState.rows[row].cells[col] = newCell;

        setTableState(newTableState);
        setUser(user === "X" ? "O" : "X");

        const check = checkWin(newTableState, row, col, user);
        if (check && check.status === "won") {
          setGame(check);
        }
      }}
    >
      {hoveredCell ? user : state}
    </td>
  );
}

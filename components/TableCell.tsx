import { useContext } from "react";
import { checkWin } from "@/utils/checkWin";
import { AppContext } from "@/components/AppContext";
import type { Cell, TableState } from "@/utils/types";

interface Props {
  row: number;
  col: number;
}

export default function TableCell({ row, col }: Props) {

  const { tableState, setTableState, user, setUser, winStatus, setWinStatus } = useContext(AppContext);

  let stateRows = tableState.rows;
  let stateRow = stateRows[row];
  if (!stateRow) return <td />;

  let stateCell = stateRow.cells[col];
  let state = stateCell.state ?? null

  const style =
    (winStatus.won && winStatus.cells.some(cell => cell.row === row && cell.col === col)) ?
      "bg-primary text-white" :
      "";

  return (
    <td
      className={`border border-black w-10 h-10 text-3xl text-center cursor-pointer ${style}`}
      onClick={() => {
        if (state !== null) return;
        if (winStatus.won) return;

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
        if (check && check.won) {
          setWinStatus(check);
        }
      }}
    >
      {state ?? ""}
    </td>
  );
}

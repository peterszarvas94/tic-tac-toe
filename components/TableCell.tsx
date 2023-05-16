import { useContext } from "react";
import { checkWin } from "@/utils/checkWin";
import { TableContext } from "@/components/TableContext";
import type { Cell, TableState } from "@/utils/types";

interface Props {
  row: number;
  col: number;
}

export default function TableCell({ row, col }: Props) {

  const { tableState, setTableState, user, setUser } = useContext(TableContext);

  let stateRows = tableState.rows;
  let stateRow = stateRows[row];
  if (!stateRow) return <td />;

  let stateCell = stateRow.cells[col];
  let state = stateCell.state ?? null

  return (
    <td
      className="border border-black w-10 h-10 text-3xl text-center cursor-pointer"
      onClick={() => {
        if (state !== null) return;

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
          console.log(check.cells);
          alert(`Winner is ${check.winner}`);
        }
      }}
    >
      {state ?? ""}
    </td>
  );
}

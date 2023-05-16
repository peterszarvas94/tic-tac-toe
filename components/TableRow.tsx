import { ReactElement } from "react";
import TableCell from "@/components/TableCell";

interface Props {
  row: number;
  cols: number;
}

export default function TableRow({ row, cols }: Props) {
  let tableCells: ReactElement[] = [];
  for (let col = 0; col < cols; col++) {
    const cell = <TableCell row={row} col={col} key={`${row}-${col}`} />;
    tableCells.push(cell);
  }
  return (
    <tr data-row={row} key={row}>
      {tableCells}
    </tr>
  );
}

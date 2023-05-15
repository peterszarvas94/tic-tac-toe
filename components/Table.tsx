import { ReactElement } from "react";

interface Props {
  cols: number;
  rows: number;
}

function renderTableCol(col: number, row: number) {
  return (
    <td className="border border-black w-10 h-10" data-col={col} data-row={row} />
  );
}

function renderTableRow(row: number, cols: number) {
  let tableCells: ReactElement[] = [];

  for (let col = 0; col < cols; col++) {
    tableCells.push(renderTableCol(col, row));
  }

  return (
    <tr data-row={row}>
      {tableCells}
    </tr>
  );
}

export default function Table({ cols, rows }: Props) {
  let tableRows: ReactElement[] = [];

  for (let row = 0; row < rows; row++) {
    tableRows.push(renderTableRow(row, cols));
  }

  return (
    <table>
      <tbody>
        {tableRows}
      </tbody>
    </table>
  );
}

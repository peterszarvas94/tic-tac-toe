"use client";

import { ReactElement, useContext, useEffect } from "react";
import { TableContext } from "@/components/TableContext";
import { defaultState } from "@/utils/defaultState";
import TableRow from "@/components/TableRow";

interface Props {
  cols: number;
  rows: number;
}

export default function Table({ cols, rows }: Props) {

  const { setTableState } = useContext(TableContext);

  useEffect(() => {
    const def = defaultState(rows, cols);
    setTableState(def);
  }, [rows, cols]);

  let tableRows: ReactElement[] = [];
  for (let row = 0; row < rows; row++) {
    let tableRow = <TableRow row={row} cols={cols} key={row} />;
    tableRows.push(tableRow);
  }

  return (
    <table className="border-2 border-primary">
      <thead />
      <tbody>
        {tableRows}
      </tbody>
    </table>
  );
}

"use client";

import { ReactElement, useContext, useEffect } from "react";
import { TableContext } from "@/components/TableContext";
import TableRow from "@/components/TableRow";

export default function Table() {

  const { size } = useContext(TableContext);

  let tableRows: ReactElement[] = [];
  for (let row = 0; row < size; row++) {
    let tableRow = <TableRow row={row} cols={size} key={row} />;
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

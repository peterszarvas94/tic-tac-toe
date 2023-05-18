import { ReactElement, useContext, useEffect } from "react";
import { AppContext } from "@/components/AppContext";
import TableRow from "@/components/TableRow";

export default function Table() {

  const { size } = useContext(AppContext);

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

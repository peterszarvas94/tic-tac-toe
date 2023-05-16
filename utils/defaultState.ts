import { Cell, Row, TableState } from "@/utils/types";

export function defaultState(rows: number, cols: number) {
  const state: TableState = {
    rows: []
  }
  for (let row = 0; row < rows; row++) {
    const stateRow: Row = {
      cells: []
    }
    for (let col = 0; col < cols; col++) {
      const cell: Cell = {
        col,
        row,
        state: null
      };
      stateRow.cells.push(cell);
    }
    state.rows.push(stateRow);
  }
  return state;
}

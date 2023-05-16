export type User = "X" | "O";

export type Cell = {
  row: number;
  col: number;
  state: User | null;
}

export type Row = {
  cells: Cell[];
}

export type TableState = {
  rows: Row[];
}

export type WinStatus = {
  won: true;
  winner: User;
  cells: Cell[];
} | {
  won: false;
  winner: null;
  cells: Cell[];
}

export type TableContextType = {
  tableState: TableState;
  setTableState: (tableState: TableState) => void;
  user: User;
  setUser: (user: User) => void;
}

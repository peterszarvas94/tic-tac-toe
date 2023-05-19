export type User = "O" | "X" | "=";

export const UserList: User[] = ["O", "X", "="];

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

export type GameStatus = {
  status: 'logged-out';
} | {
  status: 'logged-in';
} | {
  status: 'playing';
} | {
  status: 'won';
  winner: User;
  cells: Cell[];
}

export type CheckStatus = {
  won: true;
  cells: Cell[];
} | {
  won: false;
}

export type TableSize = 5 | 6 | 7 | 8 | 9 | 10;
export type PlayersSize = 2 | 3;

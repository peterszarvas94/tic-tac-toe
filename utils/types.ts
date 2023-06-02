export type Symbol = "O" | "X" | "=" | "+" | "*" | "#";
export const UserList: Symbol[] = ["O", "X", "=", "+", "*", "#"];

export type Cell = {
  row: number;
  col: number;
  state: Symbol | null;
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
  winner: Symbol;
  cells: Cell[];
}

export type CheckStatus = {
  won: true;
  cells: Cell[];
} | {
  won: false;
}

export type TableSize = 5 | 6 | 7 | 8 | 9 | 10;
export type PlayersSize = 2 | 3 | 4;
export type PieceSize = 3 | 4 | 5;

export type Player = {
  id: number;
  name: string;
  symbol: Symbol;
}

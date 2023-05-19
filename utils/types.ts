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

// export type Direction = 'vertical' | 'horizontal' | 'diagonal1' | 'diagonal2';

// export type GameStatus = {
//   won: true;
//   winner: User;
//   cells: Cell[];
//   direction: Direction;
// } | {
//   won: false;
// }

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

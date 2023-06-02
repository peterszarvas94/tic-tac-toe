import type { Cell, Row, GameStatus, TableState, Symbol, CheckStatus, PieceSize } from "@/utils/types";

function checkDirection(direction: Row, player: Symbol, piecesToWin: PieceSize): CheckStatus {
  const { cells } = direction;
  let winnerCells: Cell[] = [];

  for (let i = 0; i < cells.length; i++) {
    const cell = cells[i];
    if (cell.state !== player) {
      if (winnerCells.length >= piecesToWin) {
        return { won: true, cells: winnerCells };
      }
      winnerCells = [];
      continue;
    }
    if (cell.state === player) {
      winnerCells.push(cell);
    }
  }

  if (winnerCells.length >= piecesToWin) {
    return { won: true, cells: winnerCells };
  }

  return { won: false };
}

export function checkWin(table: TableState, row: number, col: number, player: Symbol, piecesToWin: PieceSize): GameStatus {
  if (!player) {
    return { status: 'playing' }
  }

  // collect all cells in the same row
  const vertical: Row = {
    cells: [],
  };
  for (let i = 0; i < table.rows.length; i++) {
    const currentRow = table.rows[i];
    if (!currentRow) {
      break;
    }
    const currentCell = currentRow.cells[col];
    if (!currentCell) {
      break;
    }
    vertical.cells.push(currentCell);
  }

  const checkVertical = checkDirection(vertical, player, piecesToWin)
  if (checkVertical.won) {

    return { status: 'won', winner: player, cells: checkVertical.cells };
  }

  // collect all cells in the same column
  const horizontal: Row = {
    cells: [],
  };
  const tableRow = table.rows[row];
  if (tableRow) {
    horizontal.cells = tableRow.cells;
  }
  const checkHorizontal = checkDirection(horizontal, player, piecesToWin);
  if (checkHorizontal.won) {
    return { status: 'won', winner: player, cells: checkHorizontal.cells };
  }

  // collect all cells in the same diagonal, top-left to bottom-right
  const diagonal1: Row = {
    cells: [],
  };

  let i = row;
  let j = col;
  while (i >= 0 && j >= 0) {
    const currentRow = table.rows[i];
    if (!currentRow) {
      break;
    }
    const currentCell = currentRow.cells[j];
    if (!currentCell) {
      break;
    }
    diagonal1.cells.unshift(currentCell);
    i--;
    j--;
  }
  i = row + 1;
  j = col + 1;
  while (i < table.rows.length && j < table.rows[row].cells.length) {
    const currentRow = table.rows[i];
    if (!currentRow) {
      break;
    }
    const currentCell = currentRow.cells[j];
    if (!currentCell) {
      break;
    }
    diagonal1.cells.push(currentCell);
    i++;
    j++;
  }
  const checkDiagonal1 = checkDirection(diagonal1, player, piecesToWin);
  if (checkDiagonal1.won) {
    return { status: 'won', winner: player, cells: checkDiagonal1.cells };
  }

  // collect all cells in the same diagonal, top-right to bottom-left
  const diagonal2: Row = {
    cells: [],
  };
  let k = row;
  let l = col;
  while (k >= 0 && l < table.rows[row].cells.length) {
    const currentRow = table.rows[k];
    if (!currentRow) {
      break;
    }
    const currentCell = currentRow.cells[l];
    if (!currentCell) {
      break;
    }
    diagonal2.cells.unshift(currentCell);
    k--;
    l++;
  }
  k = row + 1;
  l = col - 1;
  while (k < table.rows.length && l >= 0) {
    const currentRow = table.rows[k];
    if (!currentRow) {
      break;
    }
    const currentCell = currentRow.cells[l];
    if (!currentCell) {
      break;
    }
    diagonal2.cells.push(currentCell);
    k++;
    l--;
  }
  const checkDiagonal2 = checkDirection(diagonal2, player, piecesToWin);
  if (checkDiagonal2.won) {
    return { status: 'won', winner: player, cells: checkDiagonal2.cells };
  }

  return { status: 'playing' };
}

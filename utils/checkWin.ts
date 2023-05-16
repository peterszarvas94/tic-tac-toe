import type { Cell, Row, WinStatus, TableState, User } from "@/utils/types";

function checkDirection(direction: Row, user: User): WinStatus {
  const { cells } = direction;
  let winnerCells: Cell[] = [];
  for (let i = 0; i < cells.length; i++) {
    const cell = cells[i];
    if (cell.state !== user) {
      winnerCells = [];
      continue;
    }
    if (cell.state === user) {
      winnerCells.push(cell);
    }
    if (winnerCells.length === 5) {
      return { won: true, winner: user, cells: winnerCells };
    }
  }
  return { won: false, winner: null, cells: [] };
}

export function checkWin(table: TableState, row: number, col: number, user: User): WinStatus {
  if (!user) {
    return { won: false, winner: null, cells: [] };
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

  const checkVertical = checkDirection(vertical, user)
  if (checkVertical.won) {
    return checkVertical;
  }

  // collect all cells in the same column
  const horizontal: Row = {
    cells: [],
  };
  const tableRow = table.rows[row];
  if (tableRow) {
    horizontal.cells = tableRow.cells;
  }
  const checkHorizontal = checkDirection(horizontal, user);
  if (checkHorizontal.won) {
    return checkHorizontal;
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
  const checkDiagonal1 = checkDirection(diagonal1, user);
  if (checkDiagonal1.won) {
    return checkDiagonal1;
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
  const checkDiagonal2 = checkDirection(diagonal2, user);
  if (checkDiagonal2.won) {
    return checkDiagonal2;
  }

  return { won: false, winner: null, cells: [] };
}

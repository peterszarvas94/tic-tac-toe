import type { TableState, User, GameStatus, TableSize } from '@/utils/types';
import { createContext, useState } from 'react';

type TableContextType = {
  tableState: TableState;
  setTableState: (tableState: TableState) => void;
  user: User;
  setUser: (user: User) => void;
  winStatus: GameStatus;
  setWinStatus: (winStatus: GameStatus) => void;
  size: TableSize;
  setSize: (size: TableSize) => void;
}

export const TableContext = createContext<TableContextType>({} as TableContextType);

export default function TableProvider({ children }: { children: React.ReactNode }) {
  const [tableState, setTableState] = useState<TableState>({
    rows: [],
  });
  const [user, setUser] = useState<User>("O");
  const [winStatus, setWinStatus] = useState<GameStatus>({ won: false });
  const [size, setSize] = useState<TableSize>(10);

  return (
    <TableContext.Provider value={{
      tableState,
      setTableState,

      user,
      setUser,

      winStatus,
      setWinStatus,

      size,
      setSize,
    }}>
      {children}
    </TableContext.Provider>
  )
}


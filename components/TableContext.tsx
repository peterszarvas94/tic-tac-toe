import { defaultState } from '@/utils/defaultState';
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
  input: TableSize;
  setInput: (input: TableSize) => void;
}

export const TableContext = createContext<TableContextType>({} as TableContextType);

export default function TableProvider({ children }: { children: React.ReactNode }) {

  const initialTableState = defaultState(10, 10);

  const [tableState, setTableState] = useState<TableState>(initialTableState);
  const [user, setUser] = useState<User>("O");
  const [winStatus, setWinStatus] = useState<GameStatus>({ won: false });
  const [size, setSize] = useState<TableSize>(10);
  const [input, setInput] = useState<TableSize>(10);

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

      input,
      setInput,
    }}>
      {children}
    </TableContext.Provider>
  )
}


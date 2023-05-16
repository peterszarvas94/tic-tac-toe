import type { TableContextType, TableState, User } from '@/utils/types';
import { createContext, useState } from 'react';

export const TableContext = createContext<TableContextType>({} as TableContextType);

export default function TableProvider({ children }: { children: React.ReactNode }) {
  const [tableState, setTableState] = useState<TableState>({
    rows: [],
  });
  const [user, setUser] = useState<User>("O");

  return (
    <TableContext.Provider value={{
      tableState,
      setTableState,

      user,
      setUser,
    }}>
      {children}
    </TableContext.Provider>
  )
}


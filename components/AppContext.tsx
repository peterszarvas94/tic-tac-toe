import { defaultState } from '@/utils/defaultState';
import type { TableState, User, GameStatus, TableSize } from '@/utils/types';
import { createContext, useState } from 'react';

type AppContextType = {
  tableState: TableState;
  setTableState: (tableState: TableState) => void;
  user: User;
  setUser: (user: User) => void;
  game: GameStatus;
  setGame: (game: GameStatus) => void;
  size: TableSize;
  setSize: (size: TableSize) => void;
}

export const AppContext = createContext<AppContextType>({} as AppContextType);

export default function AppContextProvider({ children }: { children: React.ReactNode }) {

  const initialTableState = defaultState(10, 10);

  const [tableState, setTableState] = useState<TableState>(initialTableState);
  const [user, setUser] = useState<User>("O");
  const [game, setGame] = useState<GameStatus>({ status: 'logged-out' });
  const [size, setSize] = useState<TableSize>(10);

  return (
    <AppContext.Provider value={{
      tableState,
      setTableState,

      user,
      setUser,

      game,
      setGame,

      size,
      setSize,
    }}>
      {children}
    </AppContext.Provider>
  )
}


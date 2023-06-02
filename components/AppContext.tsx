import { createContext, useState } from 'react';
import type { TableState, GameStatus, TableSize, Player, PieceSize } from '@/utils/types';
import { generateEmptyState } from '@/utils/state';

type AppContextType = {
  tableState: TableState;
  setTableState: (tableState: TableState) => void;
  game: GameStatus;
  setGame: (game: GameStatus) => void;
  size: TableSize;
  setSize: (size: TableSize) => void;
  piecesToWin: PieceSize;
  setPiecesToWin: (pieceToWin: PieceSize) => void;
  players: Player[];
  setPlayers: (players: Player[]) => void;
  current: Player;
  setCurrent: (current: Player) => void;
}

export const AppContext = createContext<AppContextType>({} as AppContextType);

export default function AppContextProvider({ children }: { children: React.ReactNode }) {

  const initialTableState = generateEmptyState(10, 10);

  const [tableState, setTableState] = useState<TableState>(initialTableState);
  const [game, setGame] = useState<GameStatus>({ status: 'logged-out' });
  const [size, setSize] = useState<TableSize>(10);
  const [piecesToWin, setPiecesToWin] = useState<PieceSize>(5);
  const [players, setPlayers] = useState<Player[]>([{
    id: 0,
    name: "",
    symbol: "O",
  },
  {
    id: 1,
    name: "",
    symbol: "X",
  }]);
  const [current, setCurrent] = useState<Player>(players[0]);

  return (
    <AppContext.Provider value={{
      tableState,
      setTableState,

      game,
      setGame,

      size,
      setSize,

      piecesToWin,
      setPiecesToWin,

      players,
      setPlayers,

      current,
      setCurrent,
    }}>
      {children}
    </AppContext.Provider>
  )
}


import { Player, Symbol } from "@/utils/types";

export function nextPlayer(players: Player[], current: Player): Player {
  const index = players.findIndex((player) => player === current);
  const nextIndex = (index + 1) % players.length;
  return players[nextIndex];
}

export function nextSymbol(symbols: Symbol[], players: Player[]): Symbol {
  const nextFreeSymbol = symbols.find((symbol) => {
    return !players.some((player) => player.symbol === symbol);
  });
  return nextFreeSymbol || "O";
}

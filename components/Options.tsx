import { ChangeEvent, FormEvent, ReactNode, useContext, useState } from "react";
import { PieceSize, Player, Symbol, TableSize, UserList } from "@/utils/types";
import { AppContext } from "@/components/AppContext";
import { generateEmptyState } from "@/utils/state";
import { nextSymbol } from "@/utils/player";
import { toast } from "react-hot-toast";

export default function Options() {
  const { size, setSize, piecesToWin, setPiecesToWin, setTableState, setGame, players, setPlayers, setCurrent } = useContext(AppContext);

  function changePlayerName(e: ChangeEvent<HTMLInputElement>) {
    const id = parseInt(e.target.name.split("-")[1]);
    const value = e.target.value;
    setPlayers(players.map((p) => {
      if (p.id === id) {
        return { ...p, name: value };
      }
      return p;
    }));
  }

  function changePlayerSymbol(e: ChangeEvent<HTMLSelectElement>) {
    const id = parseInt(e.target.name.split("-")[1]);
    const value = e.target.value as Symbol;
    setPlayers(players.map((p) => {
      if (p.id === id) {
        return { ...p, symbol: value };
      }
      return p;
    }));
  }

  function formSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // check if all players have a name
    for (let i = 0; i < players.length; i++) {
      if (players[i].name === "") {
        toast.error("All players must have a name", { className: "text-xl" });
        return;
      }
    }

    // check if two player have the same symbol
    const symbols: Symbol[] = [];
    for (let i = 0; i < players.length; i++) {
      if (symbols.includes(players[i].symbol)) {
        toast.error("Symbols are not unique", { className: "text-xl" });
        return;
      }
      symbols.push(players[i].symbol);
    }

    const def = generateEmptyState(size, size);
    setTableState(def);
    setCurrent(players[0]);
    setGame({ status: "playing" });
  }
  function renderSymbols() {
    const symbols: ReactNode[] = [];
    for (let i = 0; i < UserList.length; i++) {
      symbols.push(
        <option value={UserList[i]} key={i}>{UserList[i]}</option>
      );
    }
    return symbols;
  }

  function playerField(player: Player) {
    return (
      <>
        <input
          type="text"
          placeholder="name"
          name={`input-${player.id.toString()}`}
          value={player.name}
          onChange={changePlayerName}
          className="bg-white py-2 px-4 border border-primary rounded-xl placeholder-accent focus:outline-primary text-xl"
        />
        <select
          name={`select-${player.id.toString()}`}
          value={player.symbol}
          onChange={changePlayerSymbol}
          className="
            border border-primary rounded-xl p-1 bg-secondary cursor-pointer text-center focus:outline-primary
          "
        >
          {renderSymbols()}
        </select>
      </>
    );
  }

  function renderPlayerFields() {
    const forms: ReactNode[] = [];
    for (let i = 0; i < players.length; i++) {
      forms.push(
        <div className="flex gap-2" key={i}>
          {playerField(players[i])}
        </div>
      );
    }
    return forms;
  }



  return (
    <form className="flex flex-col gap-10 w-fit mx-auto" onSubmit={(e) => formSubmit(e)}>

      {/* Table size */}
      <div className="flex gap-4 items-center">
        <label htmlFor="table-size" className="grow">Table size:</label>
        <select
          name="table-size"
          value={size}
          onChange={(e) => setSize(parseInt(e.target.value) as TableSize)}
          className="
            border border-primary rounded-xl p-1 bg-secondary cursor-pointer text-center focus:outline-primary
          "
        >
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>

      {/* Pieces to win */}
      <div className="flex gap-4 items-center">
        <label htmlFor="pieces-to-win" className="grow">Pieces to win:</label>
        <select
          name="pieces-to-win"
          value={piecesToWin}
          onChange={(e) => setPiecesToWin(parseInt(e.target.value) as PieceSize)}
          className="
            border border-primary rounded-xl p-1 bg-secondary cursor-pointer text-center focus:outline-primary
          "
        >
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>

      {/* Players */}
      <div className="flex flex-col gap-2 items-center">
        <div className="flex gap-2 w-full items-center">
          <label className="grow">Players:</label>
          <div className="flex gap-2">
            <button
              className={`
                border w-12 h-12 rounded-xl flex items-center justify-center bg-secondary focus:outline-primary
                ${players.length <= 2 ? "text-accent border-accent" : "text-black border-primary"}
              `}
              disabled={players.length <= 2}
              onClick={(e) => {
                e.preventDefault();
                if (players.length > 2) {
                  setPlayers(players.slice(0, -1));
                }
              }}
            >
              -
            </button>
            <button
              className={`
                border w-12 h-12 rounded-xl flex items-center justify-center bg-secondary focus:outline-primary
                ${players.length >= 4 ? "text-accent border-accent" : "text-black border-primary"}
              `}
              disabled={players.length >= 4}
              onClick={(e) => {
                e.preventDefault();
                if (players.length < 4) {
                  const last = players.at(-1);
                  if (!last) return;
                  const id = last.id + 1;
                  const symbol = nextSymbol(UserList, players);
                  setPlayers([...players, { id, name: "", symbol }]);
                }
              }}
            >
              +
            </button>

          </div>
        </div>
        <div className="flex flex-col gap-2">
          {renderPlayerFields()}
        </div>
      </div>


      <div className="flex justify-center">
        <button
          type="submit"
          className="
            border border-primary py-2 px-4 w-fit rounded-xl flex items-center bg-secondary focus:outline-primary text-xl
          "
        >
          start game
        </button>
      </div>
    </form>
  );
}

"use client";

import { useContext } from "react";
import { TableContext } from "./TableContext";

export default function Staus() {

  const { user, winStatus } = useContext(TableContext);

  return (
    <div className="text-2xl">
      {winStatus.won ? (
        `${winStatus.winner} won!`
      ) : (
        `Next Player: ${user}`
      )}
    </div>
  )
}

"use client";

import { useContext } from "react";
import { TableContext } from "./TableContext";

export default function NextPlayer() {

  const { user } = useContext(TableContext);

  return (
    <div>
      <div> next player: {user} </div>
    </div>
  )
}

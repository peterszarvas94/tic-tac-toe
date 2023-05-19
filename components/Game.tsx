import { useContext } from "react";
import { AppContext } from "@/components/AppContext";
import Table from "@/components/Table";
import Status from "@/components/Status";
import SizeSelect from "@/components/SizeSelect";

export default function Game() {

  const { game, setGame } = useContext(AppContext);

  if (game.status === "logged-out") {
    <SizeSelect />
  }

  return (
    <>
      <Table />
      <Status />
      <div className="flex gap-2">

        <button
          className="
          text-2xl border border-primary pt-2 pb-1 px-4 rounded-xl flex items-center bg-secondary
        "
          onClick={() => {
            setGame({ status: "logged-in" });
          }}
        >
          New game
        </button>
      </div>
    </>
  )
}

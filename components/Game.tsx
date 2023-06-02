import { useContext } from "react";
import { AppContext } from "@/components/AppContext";
import Table from "@/components/Table";
import Status from "@/components/Status";

export default function Game() {

  const { setGame } = useContext(AppContext);

  return (
    <div className="w-fit mx-auto flex flex-col gap-2 items-center pt-4">
      <Table />
      <Status />
      <button
        className="
            border border-primary py-2 px-4 rounded-xl flex items-center bg-secondary w-fit text-xl
          "
        onClick={() => {
          setGame({ status: "logged-in" });
        }}
      >
        new game
      </button>
    </div>
  )
}

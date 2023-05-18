import Table from "@/components/Table";
import Status from "@/components/Status";
import Reset from "./Reset";
import Size from "./Size";

export default function Game() {
  return (
    <>
      <Table />
      <Status />
      <div className="flex gap-2">
        <Reset />
        <Size />
      </div>
    </>
  )
}

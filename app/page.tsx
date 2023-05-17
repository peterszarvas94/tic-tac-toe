"use client";

import Status from "@/components/Status";
import Reset from "@/components/Reset";
import Table from "@/components/Table";
import TableProvider from "@/components/TableContext";
import Paper from "@/images/paper.jpg";
import Image from "next/image";
import Size from "@/components/Size";

let rows = 10;
let cols = 10;

export default function Home() {
  return (
    <TableProvider>
      <main className="font-indie">
        <Image src={Paper} alt="paper" width={Paper.width} height={Paper.height} className="
        absolut left-0 top-0 h-screen w-full object-cover
      " />
        <div className="absolute left-0 top-0 w-full flex flex-col items-center">
          <h1 className="text-4xl py-10 mx-auto w-fit">Tic Tac Toe</h1>
          <Table rows={rows} cols={cols} />
          <Status />
          <Reset rows={rows} cols={cols} />
          <Size />
        </div>
      </main>
    </TableProvider>
  )
}

// starting state
// login

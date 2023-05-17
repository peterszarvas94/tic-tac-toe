"use client";

import Status from "@/components/Status";
import Reset from "@/components/Reset";
import Table from "@/components/Table";
import TableProvider from "@/components/TableContext";
import Paper from "@/images/paper.jpg";
import Image from "next/image";
import Size from "@/components/Size";

export default function Home() {
  return (
    <TableProvider>
      <main className="font-indie">
        <Image src={Paper} alt="paper" width={Paper.width} height={Paper.height} className="
        absolut left-0 top-0 h-screen w-full object-cover
      " />
        <div className="absolute left-0 top-0 w-full flex flex-col gap-4 items-center">
          <h1 className="text-4xl py-10 mx-auto w-fit">Tic Tac Toe</h1>
          <Table />
          <Status />
          <div className="flex gap-2">
            <Reset />
            <Size />
          </div>
        </div>
      </main>
    </TableProvider>
  )
}

// starting state
// login

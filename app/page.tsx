"use client";

import Reset from "@/components/Reset";
import Table from "@/components/Table";
import TableProvider from "@/components/TableContext";
import Paper from "@/images/paper.jpg";
import Image from "next/image";

let rows = 5;
let cols = 5;

export default function Home() {
  return (
    <TableProvider>
      <main className="font-indie">
        <Image src={Paper} alt="paper" width={Paper.width} height={Paper.height} className="
        absolut left-0 top-0 h-screen w-full object-cover
      " />
        <div className="absolute left-0 top-0 w-full">
          <h1 className="text-4xl py-10 mx-auto w-fit">Tic Tac Toe</h1>
          <div className="flex justify-center pb-10">
            <Table rows={rows} cols={cols} />
          </div>
          <div className="flex justify-center">
            <Reset rows={rows} cols={cols} />
          </div>
        </div>
      </main>
    </TableProvider>
  )
}

// login
// grainy background

import Table from "@/components/Table"

export default function Home() {
  return (
    <main className="font-indie bg-background h-screen">
      <h1 className="text-4xl py-10 mx-auto w-fit">Tic Tac Toe</h1>
      <div className="flex justify-center">
        <Table cols={10} rows={10} />
      </div>
    </main>
  )
}

// table state (global?)
// 2d array of 0, 1 or 2
// 0 = empty, 1 = x, 2 = o

// nice icons for x and o

// login

// grainy background

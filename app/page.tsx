"use client";

import AppContextProvider from "@/components/AppContext";
import App from "@/components/App";

export default function Home() {

  return (
    <AppContextProvider>
      <div className="absolute left-0 top-0 w-full flex flex-col gap-4 pt-10 items-center">
        <h1 className="text-4xl mx-auto w-fit">Tic Tac Toe</h1>
        <App />
      </div>
    </AppContextProvider>
  )
}

// starting state
// login

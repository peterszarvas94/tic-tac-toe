"use client";

import AppContextProvider from "@/components/AppContext";
import App from "@/components/App";

export default function Home() {

  return (
    <AppContextProvider>
      <div className="absolute left-0 top-0 w-full text-black">
        <h1 className="text-4xl mx-auto w-fit py-12">tic tac toe</h1>
        <App />
      </div>
    </AppContextProvider>
  )
}

// starting state
// login

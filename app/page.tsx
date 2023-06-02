"use client";

import AppContextProvider from "@/components/AppContext";
import App from "@/components/App";
import { Toaster } from "react-hot-toast";

export default function Home() {

  return (
    <AppContextProvider>
      <div className="absolute left-0 top-0 w-full text-black">
        <App />
        <Toaster />
      </div>
    </AppContextProvider>
  )
}

// starting state
// login

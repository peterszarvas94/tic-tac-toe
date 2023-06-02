import { FormEvent, useContext, useState } from "react";
import { AppContext } from "@/components/AppContext";
import { toast } from "react-hot-toast";

export default function Login() {

  const { setGame } = useContext(AppContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function submitForm(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (username === "" || password === "") {
      toast.error("Username or password is missing", { className: "text-xl" });
      return;
    }

    if (username !== "admin" || password !== "admin") {
      toast.error("Invalid credentials", { className: "text-xl" });
      return;
    }

    setGame({ status: "logged-in" });
  }

  return (
    <form onSubmit={(e) => submitForm(e)} className="flex flex-col gap-2 items-center">
      <input
        type="text"
        placeholder="admin"
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="bg-white py-2 px-4 border border-primary rounded-xl placeholder-accent focus:outline-primary text-xl"
      />
      <input
        type="password"
        placeholder="admin"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="bg-white py-2 px-4 border border-primary rounded-xl placeholder-accent focus:outline-primary text-xl"
      />
      <button
        type="submit"
        className="bg-secondary border border-primary rounded-xl py-2 px-4 w-fit text-xl focus:outline-primary"
      >
        Login
      </button>
    </form>
  );
}

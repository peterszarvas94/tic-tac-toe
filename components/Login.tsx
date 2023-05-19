import { useContext } from "react";
import { AppContext } from "./AppContext";
import { useForm } from "react-hook-form";

type Form = {
  username: string;
  password: string;
};

export default function Login() {

  const { setGame } = useContext(AppContext);
  const { register, handleSubmit, formState: { errors }, setError } = useForm<Form>();

  function formSubmit(data: Form) {
    const { username, password } = data;
    if (username !== "admin" || password !== "admin") {
      setError("root", { message: "Invalid username or password" });
      return;
    }

    setGame({ status: "logged-in" });
  }

  function clearError() {
    setError("root", { message: "" });
  }

  return (
    <form onSubmit={handleSubmit(formSubmit)} onChange={() => clearError()} className="flex flex-col gap-2 items-center">
      <input
        {...register("username", { required: true })}
        type="text"
        placeholder="admin"
        className="bg-white py-2 px-4 border border-primary rounded-xl"
      />
      <input
        {...register("password", { required: true })}
        type="password"
        placeholder="admin"
        className="bg-white py-2 px-4 border border-primary rounded-xl"
      />
      <button
        type="submit"
        className="bg-secondary border border-primary rounded-xl py-2 px-4 w-fit text-xl"
      >
        Login
      </button>

      {errors.username || errors.password ? (
        <p className="text-red-500 text-xl">Please fill out the form</p>
      ) : null}

      {errors.root ? (
        <p className="text-red-500 text-xl">{errors.root.message}</p>
      ) : null}
    </form>
  );
}

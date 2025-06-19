import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

export default function Forgot() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen m-0">
        <form action="" className="my-form w-96">
          <h1 className="text-5xl text-green-400 mb-1 font-semibold">circle</h1>
          <h2 className="text-4xl my-3">Forgot Password</h2>
          <input
            className="w-full border-2 p-1 rounded-sm border-gray-500 text-lg my-2"
            type="text"
            name="Email"
            id="Email"
            placeholder="Email"
          />
          <Button className="bg-green-800 w-full my-2 hover:bg-green-500">
            Create
          </Button>
          <div className="flex gap-5 my-2">
            <p>already have account?</p>
            <NavLink to="/login" className="text-green-400">
              Login
            </NavLink>
          </div>
        </form>
      </div>
    </>
  );
}

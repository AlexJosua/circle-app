import { NavLink } from "react-router-dom";

export default function Login() {
  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center ">
        <form className="w-96">
          <h1 className="text-5xl text-green-400 mb-1 font-semibold">circle</h1>
          <h2 className="text-4xl my-3">Login account Circle</h2>
          <input
            className="w-full border-2 p-1 mb-5 rounded-sm border-gray-500 text-lg"
            type="text"
            name="email"
            id="email"
            //   onChange={handleChange}
            placeholder="masukkan email..."
          />
          <input
            className="w-full border-2 p-1 mb-5 rounded-sm border-gray-500 text-lg"
            type="password"
            name="passwword"
            id="passwword"
            //   onChange={handleChange}
            placeholder="masukkan passwword..."
          />
          <NavLink to="/forgot" className="block text-right text-white -mt-3">
            Forgot Password?
          </NavLink>
          <br />
          <button
            className="text-white bg-green-800 hover:bg-green-500 px-10 py-2 rounded-3xl w-full -mt-2"
            type="submit"
          >
            Submit
          </button>
          <NavLink to="/register" className="block text-left text-white mt-2">
            dont have a account yet?
          </NavLink>
        </form>
      </div>
    </>
  );
}

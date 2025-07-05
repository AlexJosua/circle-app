import { useForm } from "react-hook-form";
import { useNavigate, NavLink } from "react-router-dom";
import { loginUser } from "../../services/authService";

type LoginFormData = {
  email: string;
  password: string;
};

export default function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  const onSubmit = async (data: LoginFormData) => {
    try {
      await loginUser(data.email, data.password);
      navigate("/");
    } catch (err) {
      alert("Login gagal. Periksa email dan password.");
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <form onSubmit={handleSubmit(onSubmit)} className="w-96">
        <h1 className="text-5xl text-green-400 mb-1 font-semibold">Circle</h1>
        <h2 className="text-4xl my-3">Login account Circle</h2>

        <input
          {...register("email", { required: "Email wajib diisi" })}
          className="w-full border-2 p-1 mb-1 rounded-sm border-gray-500 text-lg"
          type="text"
          placeholder="masukkan email..."
        />
        {errors.email && (
          <p className="text-red-500 text-sm mb-4">{errors.email.message}</p>
        )}

        <input
          {...register("password", { required: "Password wajib diisi" })}
          className="w-full border-2 p-1 mb-1 rounded-sm border-gray-500 text-lg"
          type="password"
          placeholder="masukkan password..."
        />
        {errors.password && (
          <p className="text-red-500 text-sm mb-4">{errors.password.message}</p>
        )}

        <NavLink
          to="/forgot"
          className="block text-right text-white -mt-1 mb-4"
        >
          Forgot Password?
        </NavLink>

        <button
          className="text-white bg-green-800 hover:bg-green-500 px-10 py-2 rounded-3xl w-full"
          type="submit"
        >
          Submit
        </button>

        <NavLink to="/register" className="block text-left text-white mt-2">
          don’t have an account yet?
        </NavLink>
      </form>
    </div>
  );
}

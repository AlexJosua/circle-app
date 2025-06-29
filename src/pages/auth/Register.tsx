import { useForm } from "react-hook-form";
import { useNavigate, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { registerUser } from "../../services/authService"; // pastikan path ini sesuai

type RegisterFormData = {
  name: string;
  username: string;
  email: string;
  password: string;
  bio?: string;
  photo?: string;
};

export default function Register() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>();

  const onSubmit = async (data: RegisterFormData) => {
    try {
      await registerUser(data);
      navigate("/login");
    } catch (err: any) {
      alert(err.response?.data?.message || "Terjadi kesalahan saat register.");
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen m-0">
        <form onSubmit={handleSubmit(onSubmit)} className="w-96">
          <h1 className="text-5xl text-green-400 mb-1 font-semibold">circle</h1>
          <h2 className="text-4xl my-3">Create account Circle</h2>

          <input
            {...register("name", { required: "Nama wajib diisi" })}
            className="w-full border-2 p-1 rounded-sm border-gray-500 text-lg my-2"
            type="text"
            placeholder="Name"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}

          <input
            {...register("username", { required: "Username wajib diisi" })}
            className="w-full border-2 p-1 rounded-sm border-gray-500 text-lg my-2"
            type="text"
            placeholder="Username"
          />
          {errors.username && (
            <p className="text-red-500">{errors.username.message}</p>
          )}

          <input
            {...register("email", { required: "Email wajib diisi" })}
            className="w-full border-2 p-1 rounded-sm border-gray-500 text-lg my-2"
            type="email"
            placeholder="Email"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}

          <input
            {...register("password", { required: "Password wajib diisi" })}
            className="w-full border-2 p-1 rounded-sm border-gray-500 text-lg my-2"
            type="password"
            placeholder="Password"
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}

          <Button
            type="submit"
            className="bg-green-800 w-full my-2 hover:bg-green-500"
          >
            Create
          </Button>

          <div className="flex gap-2 text-sm my-2 justify-center text-white">
            <span>Already have an account?</span>
            <NavLink to="/login" className="text-green-400 hover:underline">
              Login
            </NavLink>
          </div>
        </form>
      </div>
    </>
  );
}

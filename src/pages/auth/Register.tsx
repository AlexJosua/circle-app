import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { registerUser } from "../../services/authService";

import { z } from "zod";
import { registerSchema } from "@/validation/registerSchema";

type RegisterFormData = z.infer<typeof registerSchema>;

export default function Register() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormData) => {
    try {
      await registerUser(data);
      navigate("/login");
    } catch (err: any) {
      alert(err.response?.data?.message || "Terjadi kesalahan saat register.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen m-0">
      <form onSubmit={handleSubmit(onSubmit)} className="w-96">
        <h1 className="text-5xl text-green-400 mb-1 font-semibold">circle</h1>
        <h2 className="text-4xl my-3">Create account Circle</h2>

        <input
          {...register("name")}
          className="w-full border-2 p-1 rounded-sm border-gray-500 text-lg my-2"
          type="text"
          placeholder="Name"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}

        <input
          {...register("username")}
          className="w-full border-2 p-1 rounded-sm border-gray-500 text-lg my-2"
          type="text"
          placeholder="Username"
        />
        {errors.username && (
          <p className="text-red-500">{errors.username.message}</p>
        )}

        <input
          {...register("email")}
          className="w-full border-2 p-1 rounded-sm border-gray-500 text-lg my-2"
          type="email"
          placeholder="Email"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}

        <input
          {...register("password")}
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
  );
}

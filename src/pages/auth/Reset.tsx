import { Button } from "@/components/ui/button";

export default function Reset() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen m-0">
        <form action="" className="my-form w-96">
          <h1 className="text-5xl text-green-400 mb-1 font-semibold">circle</h1>
          <h2 className="text-4xl my-3">Reset Password</h2>
          <input
            className="w-full border-2 p-2 rounded-sm border-gray-500 text-lg my-2"
            type="password"
            name="newPassword"
            id="newPassword"
            placeholder="New Password"
          />
          <input
            className="w-full border-2 p-2 rounded-sm border-gray-500 text-lg my-2"
            type="password"
            name="username"
            id="username"
            placeholder="Confirm New Password"
          />
          <Button className="bg-green-800 w-full my-2  hover:bg-green-500">
            Create New Password
          </Button>
        </form>
      </div>
    </>
  );
}

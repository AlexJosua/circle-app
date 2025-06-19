import React from "react";
import LeftBar from "../components/LeftBar";
import RightBar from "../components/RightBar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="flex">
      <div className="w-1/5 fixed h-screen left-0 top-0 ">
        <LeftBar />
      </div>
      <div className="w-3/5 ml-[20%] mr-[20%] p-1 bg-[#1d1d1d] text-white">
        <Outlet />
      </div>
      <div className="w-1/5 fixed h-screen right-0 top-0 ">
        <RightBar />
      </div>
    </div>
  );
}

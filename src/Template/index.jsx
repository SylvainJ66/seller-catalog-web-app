import Header from "@/Header/index.js";
import { Outlet } from "react-router-dom";

export default function Template() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

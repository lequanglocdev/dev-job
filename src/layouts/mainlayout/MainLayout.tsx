import { Outlet } from "react-router";
import { Header } from "../header/Header";
import {Footer} from "../footer/Footer";

export const MainLayout = () => {
  return (
    <div className="w-full">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

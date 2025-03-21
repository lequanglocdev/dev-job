import { Outlet } from "react-router";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";

export const MainLayout = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  );
};

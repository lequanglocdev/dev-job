import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/features/auth/authSlice";
import { RootState } from "@/app/store";
import { IoMdClose } from "react-icons/io";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdonw-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { FaBars } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { CiLock } from "react-icons/ci";
import { IoMdLogOut } from "react-icons/io";
import { Drawer, DrawerContent} from "@/components/ui/drawer";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const user = useSelector((state: RootState) => state.auth.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  const handleProfile = () => navigate("/profile");
  const handleAuth = () => navigate("/sign-in");

  return (
    <div
      className={`fixed top-0 left-0 w-full z-10 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center h-[60px]">
        {/* Logo */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img src={logo} alt="Logo" className="w-24 h-25 object-cover" />
          <h2
            className={`uppercase text-3xl font-bold relative left-[-10px] ${
              scrolled ? "text-black" : "text-white"
            }`}
          >
            Devjob
          </h2>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 items-center">
          <Link
            to="/company"
            className={`font-medium hover:text-[#00b894] ${
              scrolled ? "text-black" : "text-white"
            }`}
          >
            Company
          </Link>
          <Link
            to="/"
            className={`font-medium hover:text-[#00b894] ${
              scrolled ? "text-black" : "text-white"
            }`}
          >
            Job
          </Link>
          <Link
            to="/about"
            className={`font-medium hover:text-[#00b894] ${
              scrolled ? "text-black" : "text-white"
            }`}
          >
            About
          </Link>

          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage src={"https://github.com/shadcn.png"} />
                  <AvatarFallback>{user.name?.[0] || "U"}</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleProfile}>
                  <FaRegUserCircle /> Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <IoSettingsOutline /> Settings
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <CiLock /> LockScreen
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>
                  <IoMdLogOut /> Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Button
                className={`hover:bg-gray-200 ${
                  scrolled ? "border border-[#333]" : "border-none"
                }`}
                variant="outline"
                onClick={handleAuth}
              >
                Sign In
              </Button>
              <Button variant="destructive">Sign Up</Button>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div
          className="md:hidden flex items-center"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FaBars
            size={24}
            className={`${scrolled ? "text-black" : "text-white"}`}
          />
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <Drawer direction="right" open={menuOpen} onOpenChange={setMenuOpen}>
          <DrawerContent>
            <div className="px-4 py-4 ">
              <div className="flex justify-between items-center ">
                <div></div>
                <div
                  className="cursor-pointer"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  <IoMdClose size={30} className="text-black " />
                </div>
              </div>

              <div className="flex flex-col gap-6 mt-4">
                <Link to="/company"   className="hover:text-[#00b894]">Company</Link>
                <Link to="/job"  className="hover:text-[#00b894]">Job</Link>
                <Link to="/about" className="hover:text-[#00b894]">About</Link>
               
              </div>
            </div>
          </DrawerContent>
        </Drawer>
      )}
    </div>
  );
};

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import imgSignUp from "@/assets/sign-up.png";
import imgSignIn from "@/assets/sign-in.png";
import { InputForm } from "@/components/input/Input";

export const Auth = () => {
  const navigate = useNavigate();
  const [isSignIn, setIsSignIn] = useState(
    window.location.pathname === "/sign-in"
  );

  const handleSwitchAuth = () => {
    const newPath = isSignIn ? "/sign-up" : "/sign-in";
    navigate(newPath);
    setIsSignIn(!isSignIn);
  };

  return (
    <div className="w-full flex flex-col md:flex-row justify-center items-center p-4">
      <img
        src={isSignIn ? imgSignIn : imgSignUp}
        className="w-64 sm:w-80 md:w-96 lg:w-[450px] h-auto"
        alt={isSignIn ? "Sign in" : "Sign up"}
      />
      <div className="w-full sm:w-[400px] md:w-[500px] lg:w-[523px] h-auto bg-[#005a44] p-6 rounded-lg shadow-md">
        <h4 className="flex justify-center items-center text-lg text-white font-semibold">
          {isSignIn ? "Welcome Back" : "Let's Get Started"}
        </h4>
        <p className="flex justify-center items-center text-base text-white mt-[12px] mb-2">
          {isSignIn
            ? "Sign in to continue"
            : "Sign Up and get access to all the features of Jobcy"}
        </p>
        <InputForm mode={isSignIn ? "sign-in" : "sign-up"} />
        <p className="text-white text-center mt-2">
          {isSignIn ? "Don't have an account?" : "Already a member?"}
          <span
            className="underline cursor-pointer ml-1"
            onClick={handleSwitchAuth} 
          >
            {isSignIn ? "Sign Up" : "Sign In"}
          </span>
        </p>
      </div>
    </div>
  );
};

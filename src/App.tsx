import { createBrowserRouter, Outlet, RouteObject, RouterProvider } from "react-router-dom";
import { MainLayout } from "./layouts/mainlayout/MainLayout";
import { Home } from "./pages/home/Home";
import { Contact } from "@/pages/contact/Contact";
import SignIn from "@/pages/auth/signIn/SignIn";
import SignUp from "@/pages/auth/signUp/SignUp";
import ForgotPassword from "@/pages/auth/forgotPassword/ForgotPassword";
import ResetPassword from "./pages/auth/resetPassword/ResetPassword";

function App() {

  const appRouter: RouteObject[] = [
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        // {
        //   path:'/contact/:id',
        //   element: <Contact/>
        // }
      ],
    },
    {
      path: "/sign-in",
      element: <SignIn />,
    },
    {
      path: "/sign-up",
      element: <SignUp />,
    },
    {
      path: "/forgot-password",
      element: <ForgotPassword />,
    },
    {
      path: "/reset-password",
      element: <ResetPassword />,
    },
  ];

  const route = createBrowserRouter([
    {
      element:(
        
        <Outlet/>
      ),
      children: appRouter
    }
  ])

  return (
    <RouterProvider router={route}/>
    
  );
}

export default App;

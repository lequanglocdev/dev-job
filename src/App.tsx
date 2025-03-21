import { createBrowserRouter, Outlet, RouteObject, RouterProvider } from "react-router-dom";
import { MainLayout } from "./layouts/mainlayout/MainLayout";
import { Home } from "./pages/home/Home";
import { Contact } from "./pages/contact/Contact";
// import SignInPage from "./pages/signIn/SignInPage";
// import SignUpPage from "./pages/signUp/SignUpPage";
import { Auth } from "./components/input/Auth";

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
      element: <Auth/>,
    },
    {
      path: "/sign-up",
      element: <Auth />,
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

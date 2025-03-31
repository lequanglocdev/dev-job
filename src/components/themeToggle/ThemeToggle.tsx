import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "@/features/theme/themeSlice";
import { selectTheme } from "@/features/theme/themeSelector";

export const ThemeToggle = () => {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
    >
      {theme === "light" ? "Dark Mode" : "Light Mode"}
    </button>
  );
};

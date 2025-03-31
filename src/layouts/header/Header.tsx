import { ThemeToggle } from "@/components/themeToggle/ThemeToggle"


export const Header = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-light dark:bg-dark">
      Header
      <ThemeToggle />
    </div>
  );
}

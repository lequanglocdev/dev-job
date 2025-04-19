
import logo from "@/assets/logo.png"
export const Footer = () => {
  return (
    <footer className="bg-[#0B1120] text-white py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Jobstack" className="w-[100px] h-[100p]" />
          <span className="text-xl font-semibold">DevJob</span>
        </div>

        {/* Menu */}
        <ul className="flex space-x-6 text-sm">
          <li>
            <a href="#" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              How it works
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Create a job
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              About us
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact us
            </a>
          </li>
        </ul>
      </div>

      {/* Line */}
      <div className="border-t border-gray-700 my-6"></div>

      {/* Bottom row */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <p className="text-sm text-gray-400">
          ©2025 DevJob. Design & Develop with
          <span className="text-red-500">❤️</span> by Shreethemes.
        </p>

        {/* Social icons */}
        <div className="flex space-x-4">
          {[
            "dribbble",
            "behance",
            "linkedin",
            "facebook",
            "instagram",
            "twitter",
            "mail",
          ].map((icon) => (
            <a
              key={icon}
              href="#"
              className="p-2 bg-[#10192f] rounded-md hover:bg-[#1f2937] transition"
            >
              <i className={`fab fa-${icon} text-white text-sm`}></i>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

import { Card } from "@/components/ui/card";
import { FaRegUser } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";
import { IoBagOutline } from "react-icons/io5";
import { IoImagesOutline } from "react-icons/io5";
import { RiRobot3Line } from "react-icons/ri";
import { CiMobile4 } from "react-icons/ci";

const jobs = [
  {
    name: "IT & Software",
    quality: "2024 Jobs",
    icon: FaRegUser,
  },
  {
    name: "Government",
    quality: "2024 Jobs",
    icon: RiComputerLine,
  },
  {
    name: "Technology",
    quality: "2024 Jobs",
    icon: IoBagOutline,
  },
  {
    name: "Accounting / Finance",
    quality: "2024 Jobs",
    icon: IoImagesOutline,
  },
  {
    name: "Construction / Facilities",
    quality: "2024 Jobs",
    icon: RiRobot3Line,
  },
  {
    name: "Tele-communications",
    quality: "2024 Jobs",
    icon: IoImagesOutline,
  },
  {
    name: "Design & Multimedia",
    quality: "2024 Jobs",
    icon: IoImagesOutline,
  },
  {
    name: "Human Resource",
    quality: "2024 Jobs",
    icon: CiMobile4,
  },
  {
    name: "Human Resource",
    quality: "2024 Jobs",
    icon: CiMobile4,
  },
  {
    name: "Human Resource",
    quality: "2024 Jobs",
    icon: CiMobile4,
  },
];

export const CardList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-6 w-full px-4">
      {jobs.map((job, index) => {
        const Icon = job.icon;
        return (
          <Card
            key={index}
            className="transition-transform duration-300 ease-in-out hover:-translate-y-2"
          >
            <div className="w-full h-[200px] cursor-pointer flex flex-col justify-center items-center shadow-1xl p-4">
              <div className="w-[64px] h-[64px] bg-[#cde7e0] flex justify-center items-center rounded-2xl">
                {Icon && <Icon className="text-[#68b6a3]" size={26} />}
              </div>
              <h3 className="mt-3 font-semibold text-center">{job.name}</h3>
              <p className="text-sm text-gray-500">{job.quality}</p>
            </div>
          </Card>
        );
      })}
    </div>
  );
};


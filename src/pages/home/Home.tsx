import bgHome from "@/assets/bg.jpg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { MdOutlineHomeRepairService } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { Popular } from "@/components/job/Popular";
import { InTro } from "@/components/inTro/InTro";
import FAQSection from "@/components/qaqSection/FAQSection";
export const Home = () => {
  return (
    <div>
      <div
        className="relative w-full h-[820px] sm:h-[600px] md:h-[700px] lg:h-[820px] overflow-hidden bg-center bg-cover"
        style={{ backgroundImage: `url(${bgHome})` }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 z-0" />
        <div className="flex flex-col gap-6 items-center justify-center h-full px-4 sm:px-6 md:px-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-white text-center leading-snug font-bold z-2">
            Find & Hire Experts <br className="hidden md:block" />
            for any Job
          </h1>
          <p className="text-center text-white text-sm sm:text-base z-10 max-w-[90%] sm:max-w-[600px]">
            Find Jobs, Employment & Career Opportunities. Some of the companies{" "}
            <br className="hidden sm:block" />
            we've helped recruit excellent applicants over the years.
          </p>

          <div className="w-full max-w-[778px] h-auto sm:h-[84px] px-4 sm:px-6 bg-gray-200 mt-6 rounded-2xl flex flex-col sm:flex-row justify-center items-center gap-4 z-2">
            <div className="flex items-center gap-2 flex-1 w-full">
              <MdOutlineHomeRepairService
                size={24}
                className="text-[#00b894]"
              />
              <Input
                type="text"
                placeholder="Enter search keyword"
                className="text-black w-full"
              />
            </div>
            <div className="flex items-center gap-2 flex-1 w-full">
              <CiLocationOn size={24} className="text-[#00b894]" />
              <Select>
                <SelectTrigger className="w-full text-black border border-[#00b894] focus:ring-0">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="HCM">Ho Chi Minh</SelectItem>
                  <SelectItem value="HN">Ha Noi</SelectItem>
                  <SelectItem value="BD">Binh Duong</SelectItem>
                  <SelectItem value="DN">Dong Nai</SelectItem>
                  <SelectItem value="VT">Vung Tau</SelectItem>
                  <SelectItem value="DNang">Da Nang</SelectItem>
                  <SelectItem value="BN">Bac Ninh</SelectItem>
                  <SelectItem value="HY">Hung Yen</SelectItem>
                  <SelectItem value="HP">Hai Phong</SelectItem>
                  <SelectItem value="AG">An Giang</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button className="w-full sm:w-auto" variant={"destructive"}>
              Search
            </Button>
          </div>

          <p className="text-center text-white text-sm sm:text-base z-10 mt-4 px-2">
            Popular Searches: Designer, Developer, Web, IOS, PHP Senior Engineer
          </p>
        </div>
      </div>

      <Popular />
      <InTro />
      <FAQSection />
    </div>
  );
};

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import logo from "@/assets/logojob.png";
import { CiLocationOn } from "react-icons/ci";
import { FaRegStar } from "react-icons/fa";
import { Button } from "@/components/ui/button";
const jobs = [
  {
    id: 1,
    title: "Web Developer",
    company: "Web Technology pvt.Ltd",
    location: "TPHCM",
    salary: "$1000–1200/m",
    experience: "1 - 2 years",
    note: "languages only differ in their grammar.",
    type: "Full Time", // Part Time, Private Urgent Freelancer
    logo: logo,
  },
  {
    id: 1,
    title: "Web Developer",
    company: "Web Technology pvt.Ltd",
    location: "TPHCM",
    salary: "$1000–1200/m",
    experience: "1 - 2 years",
    note: "languages only differ in their grammar.",
    type: "Part Time", // Part Time, Private Urgent Freelancer
    logo: logo,
  },
  {
    id: 1,
    title: "Web Developer",
    company: "Web Technology pvt.Ltd",
    location: "TPHCM",
    salary: "$1000–1200/m",
    experience: "1 - 2 years",
    note: "languages only differ in their grammar.",
    type: "Private Urgent", // Part Time, Private Urgent Freelancer
    logo: logo,
  },
];

export const ListJobs = () => {
  return (
    <div className="mt-10 w-full flex flex-col items-center">
      <Tabs defaultValue="fulltime" className="w-full max-w-[1200px]">
        <TabsList className="flex flex-wrap justify-center gap-2 mb-10 bg-gray-200 py-6 rounded-md text-black shadow-2xl ">
          <TabsTrigger value="recent" className="">
            Recent Jobs
          </TabsTrigger>
          <TabsTrigger value="featured">Featured Jobs</TabsTrigger>
          <TabsTrigger value="freelancer">Freelancer</TabsTrigger>
          <TabsTrigger value="parttime">Part Time</TabsTrigger>
          <TabsTrigger value="fulltime">Full Time</TabsTrigger>
        </TabsList>

        <TabsContent value="fulltime">
          <div className="space-y-4 relative">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="group  w-full border-2 border-transparent rounded-lg shadow-sm  bg-white hover:border-[#68b6a3] transition-transform duration-300 ease-in-out hover:-translate-y-2 "
              >
                <div
                  className="absolute t-0 l-0 w-[90px] border-t-[80px] border-t-[#68b6a3] 
              border-r-[100px] border-r-transparent  group-hover:border-t-green-700"
                >
                  <div className="absolute top-[-60px] left-[10px] text-white text-2xl">
                    <FaRegStar />
                  </div>
                </div>

                <div className="w-full flex justify-between items-center px-30 py-4 mb-10  md:flex-row gap-4">
                  <img src={job.logo} alt="" className="w-[55px] h-[55px]" />
                  <div>
                    <h4>{job.title}</h4>
                    <p>{job.company}</p>
                  </div>

                  <p className="flex justify-center items-center gap-2 ">
                    <CiLocationOn className="text-[#68b6a3]" /> {job.location}
                  </p>
                  <p>{job.salary}</p>
                  <p>{job.type}</p>
                </div>
                <div className="flex justify-between items-center px-10 py-4">
                  <p>
                    <b>Experience</b>: {job.experience}
                  </p>
                  <p>
                    <b>Note: </b>
                    {job.note}
                  </p>
                  <p className="">Apply now</p>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        {/* Các TabsContent khác có thể làm tương tự nếu có dữ liệu */}
        <TabsContent value="recent">No recent jobs available.</TabsContent>
        <TabsContent value="featured">No featured jobs available.</TabsContent>
        <TabsContent value="freelancer">
          No freelancer jobs available.
        </TabsContent>
        <TabsContent value="parttime">No part-time jobs available.</TabsContent>
      </Tabs>
      <Button variant={"destructive"} className="mt-10">
        View More
      </Button>
    </div>
  );
};

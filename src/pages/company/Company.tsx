import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Star, Users } from "lucide-react";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineHomeRepairService } from "react-icons/md";
import logoBg from "@/assets/logojob.png"

const ratings = [5, 4, 3, 2, 1];

const Company = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-4 h-[300px] bg-[#2c3e50] ">
        <h4 className="text-center text-2xl font-bold text-white">
          Companies Hiring Internationally
        </h4>
        <div className="w-full max-w-[778px] h-auto sm:h-[84px] px-4 sm:px-6 bg-gray-200 mt-6 rounded-2xl flex flex-col sm:flex-row justify-center items-center gap-4 z-2">
          <div className="flex items-center gap-2 flex-1 w-full">
            <MdOutlineHomeRepairService size={24} className="text-[#00b894]" />
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
      </div>
      <div className="flex justify-center gap-10 max-w-[1250px] mx-auto mt-10  ">
        <div className="flex flex-2 flex-col ">
          <h4 className="text-xl font-medium">Filter</h4>
          <div className="mt-10">
            <h4 className="text-lg text-gray-500">Rating</h4>
            <div className="space-y-3 mt-10">
              {ratings.map((rating) => (
                <div key={rating} className="flex items-center space-x-2">
                  <Checkbox id={`rating-${rating}`} />
                  <div className="flex space-x-1">
                    {Array.from({ length: rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-green-700 fill-green-700"
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-8 flex-col ">
          <div className="flex justify-between items-center">
            <h4 className="text-xl font-medium">Companies</h4>
            <div className="flex justify-between items-center">
              <p>Sort by</p>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <Card className="rounded-2xl p-4">
            <CardContent className="p-0 flex flex-col gap-3">
              {/* Top row */}
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <img
                    src={logoBg}
                    alt="Company logo"
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h2 className="font-semibold text-lg">Nightfall</h2>
                    <div className="flex items-center gap-3 text-muted-foreground text-sm mt-1">
                      <div className="flex items-center gap-1 text-black">
                        <MapPin className="w-4 h-4" />
                        Chicago
                      </div>
                      <div className="flex items-center gap-1 text-black">
                        <Users className="w-4 h-4" />
                        100-200
                      </div>
                      <div className="flex items-center gap-1 text-green-700 font-medium">
                        <Star className="w-4 h-4 fill-green-700 text-green-700" />
                        4.9{" "}
                        <span className="text-muted-foreground">
                          (2 Reviews)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <Button variant="outline" className="rounded-full px-4">
                  + Follow
                </Button>
              </div>

              {/* Description */}
              <p className="text-sm text-black">
                Nightfall™ uses machine learning to identify business-critical
                data, like customer PII, across your SaaS, APIs, and data
                infrastructure, so you can manage & protect it….
              </p>

              {/* Tags */}
              <div className="flex justify-between items-center gap-2 flex-wrap">
                <div>
                  <span className="bg-muted px-3 py-1 text-sm rounded-full text-foreground">
                    Ecommerce
                  </span>
                  <span className="bg-muted px-3 py-1 text-sm rounded-full text-foreground">
                    SaaS
                  </span>
                </div>
                <div className="text-green-700 font-medium text-sm">
                  4 jobs available
                </div>
              </div>

              {/* Jobs */}
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Company;

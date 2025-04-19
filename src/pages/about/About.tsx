import imgAbout1 from "@/assets/about1.webp";
import imgAbout2 from "@/assets/about2.webp";
import imgAbout3 from "@/assets/about3.webp";

import userAbout from "@/assets/userAbout.png";
import userAbout2 from "@/assets/userAbout2.webp";
import userAbout3 from "@/assets/userAbout3.webp";
import userAbout4 from "@/assets/testimonial.webp";
import aboutBg from "@/assets/aboutBg.webp"
import aboutBg2 from "@/assets/aboutBg2.webp";
import { Button } from "@/components/ui/button";

import { Card, CardContent } from "@/components/ui/card";
import {
  ChevronLeft,
  ChevronRight,
  Facebook,
  Instagram,
  MapPin,
  Quote,
  Twitter,
} from "lucide-react";
import { useState } from "react";

const teamMembers = [
  {
    name: "Alexander Hipp",
    role: "Co-Founder",
    image: userAbout,
  },
  {
    name: "Julian Wan",
    role: "Head of Marketing",
    image: userAbout2,
  },
  {
    name: "Nicolas Horn",
    role: "UX / UI Designer",
    image: userAbout3,
  },
];

const testimonials = [
  {
    name: "Selena Gomez",
    role: "CTO of Behand",
    image: userAbout4,
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Thierry Henry",
    role: "Designer at Uxper",
    image: userAbout4,
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Jane Doe",
    role: "CEO of Pixel",
    image: userAbout4,
    quote:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

export const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <div className="px-auto">
      <div className="flex flex-col justify-center items-center gap-4 h-[200px] w-full bg-[#2c3e50] ">
        <h4 className="text-2xl font-bold text-white">About Us</h4>
        <p className="text-xl text-white">
          We are transforming the way healthcare hires
        </p>
      </div>
      <div className="max-w-[1250px] mx-auto p-10">
        <div className="h-[480px] flex justify-center items-center gap-4">
          <img src={imgAbout1} alt="imgAbout1" />
          <img src={imgAbout2} alt="imgAbout1" />
          <img src={imgAbout3} alt="imgAbout1" />
        </div>

        <div className="text-center mt-10">
          <h5 className="text-2xl font-medium">OUR MISSION</h5>
          <p className="text-xl mt-2 font-normal italic">
            We mission is to empower every healthcare professional <br /> to
            find their perfect job opportunity, faster and easier <br /> than
            ever before.
          </p>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl text-center font-bold mb-10">
            Championing change across our company
          </h2>
          <div className="flex justify-center items-center">
            {teamMembers.map((member, index) => (
              <div className="flex justify-center items-center">
                <Card key={index} className="border-none shadow-none">
                  <CardContent className="flex flex-col items-center">
                    <div className="w-[350px] h-[350px] relative mb-4">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="rounded-full object-cover"
                      />
                    </div>
                    <p className="font-semibold text-lg">{member.name}</p>
                    <p className="text-gray-500 italic">{member.role}</p>
                    <div className="flex gap-4 mt-4">
                      <Facebook className="w-5 h-5 text-gray-600" />
                      <Instagram className="w-5 h-5 text-gray-600" />
                      <Twitter className="w-5 h-5 text-gray-600" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
          <div className="w-full h-full flex justify-center items-center mx-auto">
            <Button className="al">View Full Team</Button>
          </div>
        </div>

        <div className="mt-10">
          <div className="text-center mb-10">
            <p className="uppercase text-sm tracking-widest font-medium">
              People love us
            </p>
            <h2 className="text-3xl font-bold mt-2">What our customers says</h2>
          </div>

          <div className="flex items-center justify-between">
            <button
              onClick={prev}
              className="bg-green-700 text-white rounded-full p-3 hover:bg-green-800"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex justify-between items-center gap-10">
              {[0, 1].map((offset) => {
                const index = (currentIndex + offset) % testimonials.length;
                const t = testimonials[index];
                return (
                  <Card key={index} className="rounded-2xl">
                    <CardContent className="p-6 flex flex-col justify-between h-full">
                      <p className="text-lg mb-6">“ {t.quote} ”</p>
                      <div className="flex items-center gap-4">
                        <img
                          src={t.image}
                          alt={t.name}
                          width={48}
                          height={48}
                          className="rounded-full object-cover"
                        />
                        <div>
                          <p className="font-semibold">{t.name}</p>
                          <p className="text-gray-500 text-sm">{t.role}</p>
                        </div>
                      </div>
                      <div className="text-red-700 self-end mt-4">
                        <Quote size={10} />
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <button
              onClick={next}
              className="bg-white border border-gray-300 rounded-full p-3 hover:bg-gray-100"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, idx) => (
              <div
                key={idx}
                className={`w-2 h-2 rounded-full ${
                  idx === currentIndex ? "bg-green-700" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center py-16 px-8 max-w-7xl mx-auto">
          {/* Text section */}
          <div className="space-y-6">
            <p className="uppercase text-sm tracking-widest font-semibold">
              Our Locations
            </p>
            <h2 className="text-3xl font-bold">Find us at our global hubs</h2>
            <div className="space-y-4">
              <div>
                <div className="flex items-center gap-2 font-semibold">
                  <MapPin size={18} />
                  <span>Chicago</span>
                </div>
                <p className="text-muted-foreground">
                  8205 Santa Monica Blvd <br />
                  Suite 84561, CA 90069
                </p>
              </div>
              <div>
                <div className="flex items-center gap-2 font-semibold">
                  <MapPin size={18} />
                  <span>Amsterdam</span>
                </div>
                <p className="text-muted-foreground">
                  H.J.E. Wenckebachweg <br />
                  221 1021AM Amsterdam
                </p>
              </div>
            </div>
          </div>

          {/* Images */}
          <div className="flex gap-6">
            <div className="flex-1 rounded-2xl overflow-hidden">
              <img
                src={aboutBg}
                alt="Chicago"
                width={500}
                height={600}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex-1 rounded-2xl overflow-hidden">
              <img
                src={aboutBg2}
                alt="Amsterdam"
                width={500}
                height={600}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import inTro2 from "@/assets/intro2.jpg";
import inTro3 from "@/assets/intro3.jpg";
import imgFb from "@/assets/facebook-logo.png";
import imgGg from "@/assets/google-logo.png";

const companies = [
  { name: "Facebook", logo: imgFb, vacancy: 2 },
  { name: "google_logo", logo: imgGg, vacancy: 2 },
];

export const InTro = () => {
  return (
    <div className="w-full max-w-[1000px] mx-auto mt-20 px-4">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
        {/* LEFT TEXT + COMPANY */}
        <div className="flex-1">
          <h3 className="text-2xl font-bold">Find Best Companies. </h3>
          <p className="mt-4 text-base">
            Search all the open positions on the web. Get your own personalized
            salary estimate. Read reviews on over 30000+ companies worldwide.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
            {companies.map((company, index) => (
              <div
                key={index}
                className="flex items-center p-4 bg-white shadow rounded-lg gap-4"
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="w-[32px] h-[32px] object-contain"
                />
                <div>
                  <h5 className="font-semibold capitalize">{company.name}</h5>
                  <p className="text-green-600">{company.vacancy} Vacancy</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex-1 w-full">
          <img
            src={inTro3}
            alt="Large Room"
            className="w-full h-auto object-cover rounded-2xl"
          />

          {/* Ảnh nhỏ chỉ hiển thị ở md trở lên */}
          <div className="hidden md:block absolute bottom-[-40px] left-[-40px] shadow-lg rounded-2xl border-8 border-white">
            <img
              src={inTro2}
              alt="Office"
              className="w-[250px] h-auto rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

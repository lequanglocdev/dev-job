import { Card, CardContent } from "../ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import imgTranding from "@/assets/tranding.jpg"
export const Trending = () => {
  return (
    <div className="w-full mt-10 flex items-center flex-col">
      <section className="w-[1250px] mx-auto">
        <h2 className="text-2xl font-bold mb-4">Trending Services</h2>
        <p className="text-lg mb-10">
          Search all the open positions on the web. Get your own personalized
          salary <br /> estimate. Read reviews on over 30000+ companies
          worldwide.
        </p>
      </section>
      <div className="w-[1250px] mx-auto">
        <Carousel className="w-full">
          <CarouselContent className="-ml-1">
            {Array.from({ length: 10 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="pl-1 basis-[100%] sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-[20%]"
              >
                <div className="p-1">
                  <Card className="w-[179px] h-[238px] overflow-hidden">
                    <CardContent className="p-0 h-full relative">
                      <img
                        src={imgTranding}
                        alt={`Image ${index + 1}`}
                        className="object-cover w-full h-full"
                      />
                      <div className="absolute inset-0 bg-black/40"></div>
                      <div className="absolute bottom-0 w-full p-2 text-white text-center z-10 bg-gradient-to-t from-black/60 via-black/40 to-transparent">
                        <p className="text-sm font-semibold">
                          Wordpress Developer{index + 1}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}

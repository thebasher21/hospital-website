'use client';

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface GalleryCarouselProps {
  imageLabels: string[];
}

export default function GalleryCarousel({ imageLabels }: GalleryCarouselProps) {
  return (
    <Carousel className="w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto">
      <CarouselContent>
        {imageLabels.map((label, index) => (
          <CarouselItem key={index} className="basis-full sm:basis-1/2 md:basis-1/3">
            <div className="p-1">
              <Card className="border bg-white dark:bg-gray-800/70">
                <CardContent className="flex aspect-square items-center justify-center p-4 sm:p-6">
                  <div className="bg-gray-100 dark:bg-gray-700 w-full h-full rounded-md flex items-center justify-center">
                    <span className="text-4xl">📷</span>
                  </div>
                </CardContent>
                <CardFooter className="p-3 text-center">
                  <p className="w-full text-sm text-slate-900 dark:text-white">
                    {label}
                  </p>
                </CardFooter>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex justify-center mt-4 sm:mt-6">
        <CarouselPrevious className="mr-2 sm:mr-4" />
        <CarouselNext />
      </div>
    </Carousel>
  );
} 
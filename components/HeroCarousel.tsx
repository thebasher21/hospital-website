"use client";

import { useEffect, useState, useCallback } from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from "@/components/ui/carousel";

interface CarouselSlide {
    title: string;
    subtitle: string;
    description: string;
    image: string;
}

interface HeroCarouselProps {
    slides: CarouselSlide[];
}

export default function HeroCarousel({ slides }: HeroCarouselProps) {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);

    // Memoize the API setter to prevent infinite updates
    const handleCarouselApi = useCallback((newApi: CarouselApi) => {
        setApi(newApi);
    }, []);

    // Auto-sliding functionality
    useEffect(() => {
        if (!api || slides.length === 0) {
            return;
        }

        // Set up auto-sliding with a 5-second interval
        const autoSlideInterval = setInterval(() => {
            if (api && typeof api.scrollTo === "function") {
                const nextSlide = (current + 1) % slides.length;
                api.scrollTo(nextSlide);
            }
        }, 5000);

        // Clear interval when component unmounts or when api/current changes
        return () => clearInterval(autoSlideInterval);
    }, [api, current, slides.length]);

    useEffect(() => {
        if (!api) {
            return;
        }

        const handleSelect = () => {
            setCurrent(api.selectedScrollSnap());
        };

        api.on("select", handleSelect);

        // Cleanup
        return () => {
            api.off("select", handleSelect);
        };
    }, [api]);

    if (slides.length === 0) {
        return (
            <div className="w-full py-32 flex justify-center items-center bg-gray-100 dark:bg-gray-800">
                <p className="text-gray-600 dark:text-gray-300">
                    No carousel slides available.
                </p>
            </div>
        );
    }

    return (
        <Carousel className="w-full" setApi={handleCarouselApi}>
            <CarouselContent>
                {slides.map((slide, index) => (
                    <CarouselItem key={index} className="relative">
                        <div className="relative w-full">
                            {/* Background Image */}
                            <div className="absolute inset-0 z-0">
                                <div
                                    className="w-full h-full bg-cover bg-center bg-no-repeat"
                                    style={{
                                        backgroundImage: `url("${slide.image}")`,
                                        filter: "brightness(0.55)",
                                    }}
                                />
                                <div className="absolute inset-0 bg-blue-900/40 mix-blend-multiply" />
                            </div>

                            {/* Slide Content */}
                            <div className="relative z-10 py-24 sm:py-28 md:py-32">
                                <div className="container mx-auto text-center px-4 sm:px-6">
                                    <h1
                                        className="text-3xl sm:text-4xl font-bold mb-4 text-white"
                                        data-i18n={`hero.carousel.slides.${index}.title`}
                                    >
                                        {slide.title}
                                    </h1>
                                    <div className="text-lg sm:text-xl max-w-3xl mx-auto text-blue-100 dark:text-gray-300">
                                        <p
                                            className="text-lg sm:text-xl font-semibold text-white"
                                            data-i18n={`hero.carousel.slides.${index}.subtitle`}
                                            dangerouslySetInnerHTML={{
                                                __html: slide.subtitle,
                                            }}
                                        />
                                        <p
                                            className="text-lg sm:text-xl font-semibold mb-6 min-h-7 text-white"
                                            data-i18n={`hero.carousel.slides.${index}.description`}
                                            dangerouslySetInnerHTML={{
                                                __html: slide.description,
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>

            {/* Slide Indicators */}
            <div className="absolute bottom-12 left-0 right-0 flex justify-center gap-2 z-1">
                <div className="flex gap-2">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            className={`w-3 h-3 rounded-full transition-colors ${
                                current === index ? "bg-white" : "bg-white/50"
                            }`}
                            onClick={() => api?.scrollTo(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>

            {/* Navigation Arrows */}
            <div className="absolute inset-0 flex items-center justify-between z-30 pointer-events-none px-2 sm:px-4">
                <button
                    onClick={() => {
                        if (current === 0) {
                            api?.scrollTo(slides.length - 1);
                        } else {
                            api?.scrollPrev();
                        }
                    }}
                    className="flex items-center justify-center h-12 w-12 rounded-full bg-white/40 hover:bg-white/60 border-none text-gray-800 shadow-md pointer-events-auto transition-all cursor-pointer"
                    aria-label="Previous slide"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                </button>
                <button
                    onClick={() => {
                        if (current === slides.length - 1) {
                            api?.scrollTo(0);
                        } else {
                            api?.scrollNext();
                        }
                    }}
                    className="flex items-center justify-center h-12 w-12 rounded-full bg-white/40 hover:bg-white/60 border-none text-gray-800 shadow-md pointer-events-auto transition-all cursor-pointer"
                    aria-label="Next slide"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </button>
            </div>
        </Carousel>
    );
}

"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

interface Testimonial {
    quote: string;
    name: string;
    role: string;
}

interface TestimonialsCarouselProps {
    testimonials: Testimonial[];
}

export default function TestimonialsCarousel({
    testimonials,
}: TestimonialsCarouselProps) {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [visibleSlides, setVisibleSlides] = useState(1);
    const containerRef = useRef<HTMLDivElement>(null);

    // Detect number of visible slides based on screen width
    useEffect(() => {
        const updateVisibleSlides = () => {
            if (window.innerWidth >= 768) {
                setVisibleSlides(2); // md breakpoint shows 2 slides
            } else {
                setVisibleSlides(1); // smaller screens show 1 slide
            }
        };

        // Set initial value
        updateVisibleSlides();

        // Update on resize
        window.addEventListener("resize", updateVisibleSlides);
        return () => window.removeEventListener("resize", updateVisibleSlides);
    }, []);

    // Memoize the API setter to prevent infinite updates
    const handleCarouselApi = useCallback((newApi: CarouselApi) => {
        setApi(newApi);
    }, []);

    // Auto-sliding functionality for testimonials
    useEffect(() => {
        if (!api) {
            return;
        }

        const handleTestimonialSelect = () => {
            setCurrent(api.selectedScrollSnap());
        };

        api.on("select", handleTestimonialSelect);

        // Set up auto-sliding with a 6-second interval
        const autoSlideInterval = setInterval(() => {
            if (api && typeof api.scrollTo === "function") {
                // Calculate the next index with dynamic number of visible slides
                const totalSlides = testimonials.length;
                const totalPages = Math.ceil(totalSlides / visibleSlides);
                const currentPage = Math.floor(current / visibleSlides);
                const nextPage = (currentPage + 1) % totalPages;
                const nextIndex = nextPage * visibleSlides;

                api.scrollTo(nextIndex);
            }
        }, 6000);

        // Cleanup
        return () => {
            api.off("select", handleTestimonialSelect);
            clearInterval(autoSlideInterval);
        };
    }, [api, current, testimonials.length, visibleSlides]);

    return (
        <div
            className="max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto"
            ref={containerRef}
        >
            <Carousel
                className="w-full"
                setApi={handleCarouselApi}
                opts={{
                    align: "start",
                    slidesToScroll: visibleSlides, // Dynamic number of slides to scroll
                    skipSnaps: false,
                    loop: true,
                }}
            >
                <CarouselContent className="-ml-2 md:-ml-4">
                    {testimonials.map((testimonial, index) => (
                        <CarouselItem
                            key={index}
                            className="basis-full md:basis-1/2 pl-2 md:pl-4 pb-6 pt-2"
                        >
                            <Card className="shadow-md border bg-white dark:bg-gray-800/70 h-full">
                                <CardContent className="pt-6 flex flex-col h-full">
                                    <p
                                        className="italic text-slate-600 dark:text-slate-300 mb-4 flex-grow"
                                        dangerouslySetInnerHTML={{
                                            __html: testimonial.quote,
                                        }}
                                    />
                                    <div className="flex items-center mt-auto">
                                        <div className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 mr-3">
                                            <span>👤</span>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-slate-900 dark:text-white">
                                                {testimonial.name}
                                            </p>
                                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                                {testimonial.role}
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>

            {/* External Controls */}
            <div className="mt-6 space-y-4">
                {/* Navigation Buttons */}
                <div className="flex justify-center">
                    <button
                        onClick={() => api?.scrollPrev()}
                        className="h-10 w-10 rounded-full border border-neutral-200 dark:border-neutral-600 flex items-center justify-center mr-4"
                        aria-label="Previous page"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
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
                        onClick={() => api?.scrollNext()}
                        className="h-10 w-10 rounded-full border border-neutral-200 dark:border-neutral-600 flex items-center justify-center"
                        aria-label="Next page"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
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
            </div>
        </div>
    );
}

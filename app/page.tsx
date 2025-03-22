'use client';

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import PageTitle from '@/components/PageTitle';
import { useEffect, useState } from 'react';
import { type CarouselApi } from "@/components/ui/carousel";
import { useTranslations } from './hooks/useTranslations';
import Image from 'next/image';

// Define the type for carousel slides
interface CarouselSlide {
  title: string;
  description: string;
  image: string;
}

export default function Home() {
  const { getTranslation, isLoading } = useTranslations();
  const [slides, setSlides] = useState<CarouselSlide[]>([]);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [modalAnimation, setModalAnimation] = useState(false);
  
  // Testimonials carousel state
  const [testimonialApi, setTestimonialApi] = useState<CarouselApi>();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Show modal on initial load without delay
  useEffect(() => {
    // Only show modal if we haven't shown it before in this session
    const hasSeenModal = sessionStorage.getItem('hasSeenModal');
    if (!hasSeenModal) {
      // Show modal immediately
      setShowModal(true);
      // Small delay just for the animation
      setTimeout(() => {
        setModalAnimation(true);
      }, 100);
      // Mark that the user has seen the modal in this session
      sessionStorage.setItem('hasSeenModal', 'true');
      
      return () => {
        // No timer to clear now
      };
    }
  }, []);

  const closeModal = () => {
    setModalAnimation(false);
    setTimeout(() => {
      setShowModal(false);
    }, 300); // Match the transition duration
  };

  // Fetch slides from translation file
  useEffect(() => {
    if (!isLoading) {
      const translatedSlides = getTranslation('hero.carousel.slides');
      if (Array.isArray(translatedSlides)) {
        setSlides(translatedSlides as CarouselSlide[]);
      } else {
        // Default slides if translation not found
        setSlides([]);
      }
    }
  }, [isLoading, getTranslation]);

  // Auto-sliding functionality
  useEffect(() => {
    if (!api || slides.length === 0) {
      return;
    }

    // Set up auto-sliding with a 5-second interval
    const autoSlideInterval = setInterval(() => {
      const nextSlide = (current + 1) % slides.length;
      api.scrollTo(nextSlide);
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

  // Auto-sliding functionality for testimonials
  useEffect(() => {
    if (!testimonialApi) {
      return;
    }

    const handleTestimonialSelect = () => {
      setCurrentTestimonial(testimonialApi.selectedScrollSnap());
    };

    testimonialApi.on("select", handleTestimonialSelect);
    
    // Set up auto-sliding with a 6-second interval
    const autoSlideInterval = setInterval(() => {
      // Calculate the next index in multiples of 2 to ensure we move by pages, not individual cards
      const currentPage = Math.ceil(currentTestimonial / 2);
      const nextPage = (currentPage + 1) % 2; // 2 pages total (0,1)
      const nextIndex = nextPage * 2; // Convert page number to slide index
      testimonialApi.scrollTo(nextIndex);
    }, 6000);

    // Cleanup
    return () => {
      testimonialApi.off("select", handleTestimonialSelect);
      clearInterval(autoSlideInterval);
    };
  }, [testimonialApi, currentTestimonial]);

  return (
    <>
      {/* Welcome Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Dimmed background overlay */}
          <div 
            className={`absolute inset-0 bg-black transition-opacity duration-300 ${modalAnimation ? 'opacity-50' : 'opacity-0'}`}
            onClick={closeModal}
          />
          
          {/* Modal Content */}
          <div className={`relative bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden w-full max-w-4xl mx-4 flex flex-col md:flex-row transition-all duration-300 border-4 border-blue-600 dark:border-blue-400 ${modalAnimation ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            {/* Close button */}
            <button 
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100 z-10"
              onClick={closeModal}
              aria-label="Close modal"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Left side - Text content */}
            <div className="p-8 pb-12 md:w-1/2 flex items-center justify-center bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900">
              <div className="text-center md:text-left">
                <div className="animate-pulse mb-2">
                  <span className="inline-block bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 px-3 py-1 rounded-full text-sm font-semibold tracking-wide uppercase">Important Notice</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-blue-600 dark:text-blue-400 mb-2 tracking-tight transform transition-all duration-300 hover:scale-105">
                  FREE OPD
                </h2>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200 tracking-wide">on all days</h3>
                <div className="mt-4 p-3 border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-600">
                  <p className="text-blue-800 dark:text-blue-300 font-medium">
                    Visit us anytime for free consultation with our specialists
                  </p>
                </div>
              </div>
            </div>
            
            {/* Right side - Image */}
            <div className="md:w-1/2 relative h-64 md:h-auto">
              <Image 
                src="/images/services/freeOPD.jpg"
                alt="Free OPD Services"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      )}

      <div className="relative">
        {isLoading ? (
          <div className="w-full py-32 flex justify-center items-center bg-gray-100 dark:bg-gray-800">
            <div className="text-center">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
              </div>
              <p className="mt-2 text-gray-600 dark:text-gray-300">Loading content...</p>
            </div>
          </div>
        ) : slides.length > 0 ? (
          <Carousel className="w-full" setApi={setApi}>
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
                          filter: 'brightness(0.55)'
                        }}
                      />
                      <div className="absolute inset-0 bg-blue-900/40 mix-blend-multiply" />
                    </div>
                    
                    {/* Slide Content */}
                    <div className="relative z-10 py-24 sm:py-28 md:py-32">
                      <div className="container mx-auto text-center px-4 sm:px-6">
                        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-white" data-i18n={`hero.carousel.slides.${index}.title`}>
                          {slide.title}
                        </h1>
                        <div className="text-lg sm:text-xl max-w-3xl mx-auto text-blue-100 dark:text-gray-300">
                          <p 
                            className="text-lg sm:text-xl font-semibold mb-6 sm:mb-8 text-white" 
                            data-i18n={`hero.carousel.slides.${index}.description`}
                            dangerouslySetInnerHTML={{ __html: slide.description }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Slide Indicators */}
            <div className="absolute bottom-12 left-0 right-0 flex justify-center gap-2 z-20">
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
            
            {/* Navigation Arrows - repositioned to be vertically centered with improved visibility */}
            <div className="absolute inset-0 flex items-center justify-between z-30 pointer-events-none px-2 sm:px-4">
              <button 
                onClick={() => {
                  if (current === 0) {
                    api?.scrollTo(slides.length - 1);
                  } else {
                    api?.scrollPrev();
                  }
                }}
                className="flex items-center justify-center h-12 w-12 rounded-full bg-white/40 hover:bg-white/60 border-none text-gray-800 shadow-md pointer-events-auto transition-all"
                aria-label="Previous slide"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
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
                className="flex items-center justify-center h-12 w-12 rounded-full bg-white/40 hover:bg-white/60 border-none text-gray-800 shadow-md pointer-events-auto transition-all"
                aria-label="Next slide"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </Carousel>
        ) : (
          <div className="w-full py-32 flex justify-center items-center bg-gray-100 dark:bg-gray-800">
            <p className="text-gray-600 dark:text-gray-300">No carousel slides available.</p>
          </div>
        )}
      </div>
      
      {/* Features Section - First content section (white) */}
      <section className="bg-white dark:bg-gray-900/40 py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-slate-900 dark:text-white" data-i18n="services.title">
            {getTranslation('services.title') as string || "Our Services"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Service 1 */}
            <Card className="shadow-md border bg-white dark:bg-gray-800/60">
              <CardHeader className="text-center">
                <div className="bg-gray-100 dark:bg-gray-700 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-gray-700 dark:text-gray-300 text-2xl flex items-center justify-center w-full h-full">🚑</span>
                </div>
                <CardTitle className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-white" data-i18n="services.emergency.title">
                  {getTranslation('services.emergency.title') as string || "Emergency Care"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed" data-i18n="services.emergency.description">
                  {getTranslation('services.emergency.description') as string || "24/7 emergency services with state-of-the-art facilities and expert medical staff."}
                </p>
              </CardContent>
            </Card>

            {/* Service 2 */}
            <Card className="shadow-md border bg-white dark:bg-gray-800/60">
              <CardHeader className="text-center">
                <div className="bg-gray-100 dark:bg-gray-700 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-gray-700 dark:text-gray-300 text-2xl flex items-center justify-center w-full h-full">🛏️</span>
                </div>
                <CardTitle className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-white" data-i18n="services.services.title">
                  {getTranslation('services.specialized.title') as string || "Services"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed" data-i18n="services.services.description">
                  {getTranslation('services.services.description') as string || "Comprehensive healthcare services including consultations, diagnostics, and various medical procedures."}
                </p>
              </CardContent>
            </Card>

            {/* Service 3 */}
            <Card className="shadow-md border bg-white dark:bg-gray-800/60">
              <CardHeader className="text-center">
                <div className="bg-gray-100 dark:bg-gray-700 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-gray-700 dark:text-gray-300 text-2xl flex items-center justify-center w-full h-full">🩺</span>
                </div>
                <CardTitle className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-white" data-i18n="services.specialities.title">
                  {getTranslation('services.specialities.title') as string || "Specialities"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed" data-i18n="services.specialities.description">
                  {getTranslation('services.specialities.description') as string || "Specialized medical departments including Gynaecology & Obstetrics, Orthopedics, Pediatrics, and other critical medical specialties."}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section - Second content section (light gray) */}
      <section className="bg-gray-100 dark:bg-gray-800/30 py-12 sm:py-16 md:py-20 border-y border-gray-200 dark:border-gray-700/30">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-slate-900 dark:text-white" data-i18n="gallery.title">
            {getTranslation('gallery.title') as string || "Gallery"}
          </h2>
          <Carousel className="w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto">
            <CarouselContent>
              {[1, 2, 3, 4, 5].map((item) => (
                <CarouselItem key={item} className="basis-full sm:basis-1/2 md:basis-1/3">
                  <div className="p-1">
                    <Card className="border bg-white dark:bg-gray-800/70">
                      <CardContent className="flex aspect-square items-center justify-center p-4 sm:p-6">
                        <div className="bg-gray-100 dark:bg-gray-700 w-full h-full rounded-md flex items-center justify-center">
                          <span className="text-4xl">📷</span>
                        </div>
                      </CardContent>
                      <CardFooter className="p-3 text-center">
                        <p className="w-full text-sm text-slate-900 dark:text-white">
                          {typeof getTranslation('gallery.imageLabel') === 'string' 
                            ? (getTranslation('gallery.imageLabel') as string).replace('{number}', item.toString())
                            : `Hospital Image ${item}`}
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
        </div>
      </section>

      {/* Testimonials Section - Third content section (white) */}
      <section className="bg-white dark:bg-gray-900/40 py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-slate-900 dark:text-white" data-i18n="testimonials.title">
            {getTranslation('testimonials.title') as string || "Patient Testimonials"}
          </h2>
          
          {/* Testimonials Carousel */}
          <div className="max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto">
            <Carousel 
              className="w-full" 
              setApi={setTestimonialApi}
              opts={{
                align: "start",
                slidesToScroll: 2,
                skipSnaps: false,
                loop: true
              }}
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {/* Testimonial 1 */}
                <CarouselItem className="basis-full md:basis-1/2 pl-2 md:pl-4 pb-6 pt-2">
                  <Card className="shadow-md border bg-white dark:bg-gray-800/70 h-full">
                    <CardContent className="pt-6 flex flex-col h-full">
                      <p className="italic text-slate-600 dark:text-slate-300 mb-4 flex-grow" data-i18n="testimonials.testimonial1.quote">
                        {getTranslation('testimonials.testimonial1.quote') as string || "\"The care I received at SADH Care Hospital was exceptional. The doctors were knowledgeable and compassionate, and the staff went above and beyond to ensure my comfort.\""}
                      </p>
                      <div className="flex items-center mt-auto">
                        <div className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 mr-3">
                          <span>👤</span>
                        </div>
                        <div>
                          <p className="font-semibold text-slate-900 dark:text-white" data-i18n="testimonials.testimonial1.name">
                            {getTranslation('testimonials.testimonial1.name') as string || "John Doe"}
                          </p>
                          <p className="text-sm text-slate-600 dark:text-slate-400" data-i18n="testimonials.testimonial1.role">
                            {getTranslation('testimonials.testimonial1.role') as string || "Cardiac Patient"}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
                
                {/* Testimonial 2 */}
                <CarouselItem className="basis-full md:basis-1/2 pl-2 md:pl-4 pb-6 pt-2">
                  <Card className="shadow-md border bg-white dark:bg-gray-800/70 h-full">
                    <CardContent className="pt-6 flex flex-col h-full">
                      <p className="italic text-slate-600 dark:text-slate-300 mb-4 flex-grow" data-i18n="testimonials.testimonial2.quote">
                        {getTranslation('testimonials.testimonial2.quote') as string || "\"I was impressed by the modern facilities and technology at SADH Care Hospital. The entire process from admission to discharge was smooth and well-coordinated.\""}
                      </p>
                      <div className="flex items-center mt-auto">
                        <div className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 mr-3">
                          <span>👤</span>
                        </div>
                        <div>
                          <p className="font-semibold text-slate-900 dark:text-white" data-i18n="testimonials.testimonial2.name">
                            {getTranslation('testimonials.testimonial2.name') as string || "Jane Smith"}
                          </p>
                          <p className="text-sm text-slate-600 dark:text-slate-400" data-i18n="testimonials.testimonial2.role">
                            {getTranslation('testimonials.testimonial2.role') as string || "Maternity Patient"}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
                
                {/* Testimonial 3 */}
                <CarouselItem className="basis-full md:basis-1/2 pl-2 md:pl-4 pb-6 pt-2">
                  <Card className="shadow-md border bg-white dark:bg-gray-800/70 h-full">
                    <CardContent className="pt-6 flex flex-col h-full">
                      <p className="italic text-slate-600 dark:text-slate-300 mb-4 flex-grow">
                        "The staff at SADH Care Hospital treated my family with respect and dignity. The doctors explained everything clearly and made sure we understood our options."
                      </p>
                      <div className="flex items-center mt-auto">
                        <div className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 mr-3">
                          <span>👤</span>
                        </div>
                        <div>
                          <p className="font-semibold text-slate-900 dark:text-white">
                            Robert Johnson
                          </p>
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            Family Member
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
                
                {/* Testimonial 4 */}
                <CarouselItem className="basis-full md:basis-1/2 pl-2 md:pl-4 pb-6 pt-2">
                  <Card className="shadow-md border bg-white dark:bg-gray-800/70 h-full">
                    <CardContent className="pt-6 flex flex-col h-full">
                      <p className="italic text-slate-600 dark:text-slate-300 mb-4 flex-grow">
                        "I've been visiting SADH Care Hospital for regular check-ups for years. The consistent quality of care and attention to detail makes me feel safe and valued as a patient."
                      </p>
                      <div className="flex items-center mt-auto">
                        <div className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 mr-3">
                          <span>👤</span>
                        </div>
                        <div>
                          <p className="font-semibold text-slate-900 dark:text-white">
                            Maria Garcia
                          </p>
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            Regular Patient
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              </CarouselContent>
            </Carousel>
            
            {/* External Controls */}
            <div className="mt-6 space-y-4">
              {/* Navigation Buttons */}
              <div className="flex justify-center">
                <button
                  onClick={() => testimonialApi?.scrollPrev()}
                  className="h-10 w-10 rounded-full border border-neutral-200 dark:border-neutral-600 flex items-center justify-center mr-4"
                  aria-label="Previous page"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={() => testimonialApi?.scrollNext()}
                  className="h-10 w-10 rounded-full border border-neutral-200 dark:border-neutral-600 flex items-center justify-center"
                  aria-label="Next page"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              
              {/* Page Indicators - Just 2 (showing pages, not individual testimonials) */}
              <div className="flex justify-center gap-2">
                {[0, 1].map((pageIdx) => {
                  // Calculate the active page (0 or 1)
                  const activePage = Math.ceil(currentTestimonial / 2);
                  return (
                    <button
                      key={pageIdx}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        activePage === pageIdx 
                          ? "bg-blue-600 dark:bg-blue-400" 
                          : "bg-gray-300 dark:bg-gray-600"
                      }`}
                      onClick={() => testimonialApi?.scrollTo(pageIdx * 2)}
                      aria-label={`Go to page ${pageIdx + 1}`}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { cn } from '@/lib/utils';
import PageTitle from '@/components/PageTitle';

export default function AboutUs() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Sample carousel images - replace with actual hospital images
  const carouselImages = [
    { src: 'https://placehold.co/1920x600/0067b8/ffffff.jpeg?text=Hospital+Building', alt: 'Hospital Building' },
    { src: 'https://placehold.co/1920x600/00a2ed/ffffff.jpeg?text=Medical+Team', alt: 'Medical Team' },
    { src: 'https://placehold.co/1920x600/68217a/ffffff.jpeg?text=Advanced+Equipment', alt: 'Advanced Equipment' },
    { src: 'https://placehold.co/1920x600/107c10/ffffff.jpeg?text=Patient+Care', alt: 'Patient Care' },
  ];

  // Sample management staff data
  const managementStaff = [
    {
      name: 'Dr. Sarah Johnson',
      designation: 'Medical Director',
      image: 'https://placehold.co/300x300/0067b8/ffffff.jpeg?text=SJ',
      bio: 'Dr. Johnson brings over 20 years of experience in healthcare management and clinical excellence.'
    },
    {
      name: 'Dr. Rajiv Mehta',
      designation: 'Chief of Surgery',
      image: 'https://placehold.co/300x300/00a2ed/ffffff.jpeg?text=RM',
      bio: 'With specialization in advanced surgical techniques, Dr. Mehta leads our surgical department with distinction.'
    },
    {
      name: 'Ms. Priya Sharma',
      designation: 'Chief Nursing Officer',
      image: 'https://placehold.co/300x300/68217a/ffffff.jpeg?text=PS',
      bio: 'Ms. Sharma ensures the highest standards of patient care through her leadership of our nursing staff.'
    },
    {
      name: 'Mr. David Wilson',
      designation: 'Hospital Administrator',
      image: 'https://placehold.co/300x300/107c10/ffffff.jpeg?text=DW',
      bio: 'Mr. Wilson oversees the daily operations and strategic planning for our facilities.'
    },
  ];

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  // Manual carousel navigation
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <>
      <PageTitle 
        title="About SADH Care Hospital" 
        description="Learn about our history, mission, and the dedicated team that makes quality healthcare possible."
      />

      {/* Carousel & Our Story Section - First content section (white) */}
      <section className="bg-white dark:bg-gray-900/40 py-20">
        <div className="container mx-auto px-4">
          <div className="relative w-full h-[400px] overflow-hidden rounded-lg shadow-lg mb-12">
            {carouselImages.map((image, index) => (
              <div
                key={index}
                className={cn(
                  "absolute w-full h-full transition-all duration-1000 ease-in-out transform",
                  index === currentSlide 
                    ? "opacity-100 translate-x-0" 
                    : "opacity-0 translate-x-full"
                )}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  priority={index === 0}
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
            ))}
            
            {/* Carousel Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={cn(
                    "w-3 h-3 rounded-full focus:outline-none",
                    index === currentSlide ? "bg-white" : "bg-white/50"
                  )}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800/70 p-8 rounded-lg shadow-sm border">
            <h2 className="text-3xl font-bold mb-8 text-slate-900 dark:text-white text-center" data-i18n="aboutUs.ourStory.title">
              Our Story
            </h2>
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <p className="mb-4 text-slate-600 dark:text-slate-300 leading-relaxed" data-i18n="aboutUs.ourStory.paragraph1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor.
              </p>
              <p className="mb-4 text-slate-600 dark:text-slate-300 leading-relaxed" data-i18n="aboutUs.ourStory.paragraph2">
                Suspendisse in orci enim. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse in orci enim.
              </p>
              <p className="mb-4 text-slate-600 dark:text-slate-300 leading-relaxed" data-i18n="aboutUs.ourStory.paragraph3">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Management Team - Second content section (light gray) */}
      <section className="bg-gray-100 dark:bg-gray-800/30 py-20 border-y border-gray-200 dark:border-gray-700/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-slate-900 dark:text-white text-center" data-i18n="aboutUs.management.title">
            Our Management Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {managementStaff.map((staff, index) => (
              <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-lg border bg-white dark:bg-gray-800/70">
                <div className="relative h-64 w-full">
                  <Image
                    src={staff.image}
                    alt={staff.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-slate-900 dark:text-white" data-i18n-key="aboutUs.management.staffName" data-i18n-params={`{"name":"${staff.name}"}`}>{staff.name}</CardTitle>
                  <CardDescription className="text-slate-600 dark:text-slate-400" data-i18n-key="aboutUs.management.staffRole" data-i18n-params={`{"role":"${staff.designation}"}`}>{staff.designation}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed" data-i18n-key="aboutUs.management.staffBio" data-i18n-params={`{"bio":"${staff.bio}"}`}>{staff.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values - Third content section (white) */}
      <section className="bg-white dark:bg-gray-900/40 py-20 border-t border-gray-200 dark:border-gray-700/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12 text-slate-900 dark:text-white">Our Mission & Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="bg-white dark:bg-gray-800/70 p-6 rounded-lg shadow-sm border">
              <div className="bg-gray-100 dark:bg-gray-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">❤️</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">Care</h3>
              <p className="text-slate-600 dark:text-slate-300">
                We provide personalized, compassionate care to every patient who walks through our doors, recognizing each person&apos;s unique needs.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800/70 p-6 rounded-lg shadow-sm border">
              <div className="bg-gray-100 dark:bg-gray-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">Compassion</h3>
              <p className="text-slate-600 dark:text-slate-300">
                We approach healthcare with empathy and understanding, treating each patient with dignity and respect.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800/70 p-6 rounded-lg shadow-sm border">
              <div className="bg-gray-100 dark:bg-gray-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">Excellence</h3>
              <p className="text-slate-600 dark:text-slate-300">
                We strive for excellence in all aspects of our service, from medical care to patient experience and community engagement.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 
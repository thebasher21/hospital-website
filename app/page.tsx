'use client';

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Link from "next/link";
import PageTitle from '@/components/PageTitle';

export default function Home() {
  return (
    <>
      <PageTitle 
        title="Welcome to Sadhcare Hospital" 
        description={
          <>
            <p className="text-xl mb-6 text-slate-100" data-i18n="hero.subtext">Your health is our priority. We provide quality healthcare services.</p>
            <p className="text-xl font-semibold mb-8 text-white" data-i18n="hero.mission">Care · Compassion · Empathy</p>
            <Button variant="default" size="lg" className="font-medium">
              <span data-i18n="hero.bookAppointment">Book an Appointment</span>
            </Button>
          </>
        }
      />
      
      {/* Features Section - First content section (white) */}
      <section className="bg-white dark:bg-gray-900/40 py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900 dark:text-white" data-i18n="services.title">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <Card className="shadow-md border bg-white dark:bg-gray-800/60">
              <CardHeader className="text-center">
                <div className="bg-gray-100 dark:bg-gray-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-gray-700 dark:text-gray-300 text-2xl">🏥</span>
                </div>
                <CardTitle className="text-xl font-semibold text-slate-900 dark:text-white" data-i18n="services.emergency.title">Emergency Care</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed" data-i18n="services.emergency.description">24/7 emergency services with state-of-the-art facilities and expert medical staff.</p>
              </CardContent>
            </Card>

            {/* Service 2 */}
            <Card className="shadow-md border bg-white dark:bg-gray-800/60">
              <CardHeader className="text-center">
                <div className="bg-gray-100 dark:bg-gray-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-gray-700 dark:text-gray-300 text-2xl">👨‍⚕️</span>
                </div>
                <CardTitle className="text-xl font-semibold text-slate-900 dark:text-white" data-i18n="services.specialized.title">Specialized Treatments</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed" data-i18n="services.specialized.description">Specialized medical treatments from experienced doctors across various disciplines.</p>
              </CardContent>
            </Card>

            {/* Service 3 */}
            <Card className="shadow-md border bg-white dark:bg-gray-800/60">
              <CardHeader className="text-center">
                <div className="bg-gray-100 dark:bg-gray-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-gray-700 dark:text-gray-300 text-2xl">💊</span>
                </div>
                <CardTitle className="text-xl font-semibold text-slate-900 dark:text-white" data-i18n="services.pharmacy.title">Pharmacy Services</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed" data-i18n="services.pharmacy.description">Fully stocked pharmacy providing prescription medicines and healthcare products.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section - Second content section (light gray) */}
      <section className="bg-gray-100 dark:bg-gray-800/30 py-20 border-y border-gray-200 dark:border-gray-700/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900 dark:text-white" data-i18n="gallery.title">Gallery</h2>
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {[1, 2, 3, 4, 5].map((item) => (
                <CarouselItem key={item} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="border bg-white dark:bg-gray-800/70">
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <div className="bg-gray-100 dark:bg-gray-700 w-full h-full rounded-md flex items-center justify-center">
                          <span className="text-4xl">📷</span>
                        </div>
                      </CardContent>
                      <CardFooter className="p-3 text-center">
                        <p className="w-full text-sm text-slate-900 dark:text-white" data-i18n-key="gallery.imageLabel" data-i18n-params={`{"number":${item}}`}>Hospital Image {item}</p>
                      </CardFooter>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-6">
              <CarouselPrevious className="mr-4" />
              <CarouselNext />
            </div>
          </Carousel>
        </div>
      </section>

      {/* Testimonials Section - Third content section (white) */}
      <section className="bg-white dark:bg-gray-900/40 py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900 dark:text-white">Patient Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Testimonial 1 */}
            <Card className="shadow-md border bg-white dark:bg-gray-800/70">
              <CardContent className="pt-6">
                <p className="italic text-slate-600 dark:text-slate-300 mb-4">"The care I received at Sadhcare Hospital was exceptional. The doctors were knowledgeable and compassionate, and the staff went above and beyond to ensure my comfort."</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 mr-3">
                    <span>👤</span>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">John Doe</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Cardiac Patient</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Testimonial 2 */}
            <Card className="shadow-md border bg-white dark:bg-gray-800/70">
              <CardContent className="pt-6">
                <p className="italic text-slate-600 dark:text-slate-300 mb-4">"I was impressed by the modern facilities and technology at Sadhcare Hospital. The entire process from admission to discharge was smooth and well-coordinated."</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 mr-3">
                    <span>👤</span>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">Jane Smith</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Maternity Patient</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section - Fourth content section (light gray) */}
      <section className="bg-gray-100 dark:bg-gray-800/30 py-20 border-t border-gray-200 dark:border-gray-700/30">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">Ready to Experience Quality Healthcare?</h2>
          <p className="text-xl leading-relaxed max-w-2xl mx-auto mb-10 text-slate-700 dark:text-slate-300">
            Our team of specialists is ready to provide you with the best care possible.
          </p>
          <div className="flex justify-center gap-6 flex-wrap">
            <Button variant="default" size="lg" className="font-medium">
              Book an Appointment
            </Button>
            <Button variant="outline" className="border-gray-400 text-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800/60 font-medium">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

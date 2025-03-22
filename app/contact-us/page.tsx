'use client';

import { Card, CardContent } from "@/components/ui/card";
import PageTitle from "@/components/PageTitle";
import Link from "next/link";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";

export default function ContactUs() {
  // Hospital contact information
  const contactInfo = {
    email: "info@sadhcarehospital.com",
    phones: [
      { label: "Reception", number: "+1 (555) 123-4567" },
      { label: "Emergency", number: "+1 (555) 911-0000" }
    ],
    location: {
      address: "123 Healthcare Avenue, Medical District, New York, NY 10001",
      mapsUrl: "https://www.google.com/maps?q=40.7128,-74.0060" // Example coordinates for NYC
    }
  };

  return (
    <>
      <PageTitle 
        title="Contact Us" 
        description="Get in touch with SADH Care Hospital through any of our communication channels."
      />
      
      <section className="bg-white dark:bg-gray-900/40 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Contact Information</h2>
              
              {/* Email */}
              <Card className="border bg-white dark:bg-gray-800/60 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-4">
                      <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Email</h3>
                      <Link 
                        href={`mailto:${contactInfo.email}`}
                        className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
                        aria-label={`Send email to ${contactInfo.email}`}
                        tabIndex={0}
                      >
                        {contactInfo.email}
                        <ExternalLink className="h-4 w-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Phone Numbers */}
              <Card className="border bg-white dark:bg-gray-800/60 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full mr-4">
                      <Phone className="h-6 w-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div className="w-full">
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Phone Numbers</h3>
                      <ul className="space-y-3">
                        {contactInfo.phones.map((phone, index) => (
                          <li key={index}>
                            <div className="flex justify-between items-center">
                              <span className="text-slate-600 dark:text-slate-300">{phone.label}:</span>
                              <Link 
                                href={`tel:${phone.number.replace(/[^0-9+]/g, '')}`}
                                className="text-green-600 dark:text-green-400 hover:underline flex items-center"
                                aria-label={`Call ${phone.label} at ${phone.number}`}
                                tabIndex={0}
                              >
                                {phone.number}
                                <ExternalLink className="h-4 w-4 ml-1" />
                              </Link>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Location */}
              <Card className="border bg-white dark:bg-gray-800/60 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="bg-amber-100 dark:bg-amber-900/30 p-3 rounded-full mr-4">
                      <MapPin className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Location</h3>
                      <p className="text-slate-600 dark:text-slate-300 mb-2">
                        {contactInfo.location.address}
                      </p>
                      <Link 
                        href={contactInfo.location.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-amber-600 dark:text-amber-400 hover:underline flex items-center"
                        aria-label="View on Google Maps"
                        tabIndex={0}
                      >
                        View on Google Maps
                        <ExternalLink className="h-4 w-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Map Preview */}
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Our Location</h2>
              <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden h-full min-h-[400px] flex items-center justify-center">
                {/* This would be replaced with an actual map component in production */}
                <Link 
                  href={contactInfo.location.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  aria-label="Open location in Google Maps"
                  tabIndex={0}
                >
                  <MapPin className="h-12 w-12 mb-3" />
                  <span className="text-sm">Click to view on Google Maps</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operating Hours Section */}
      <section className="bg-gray-100 dark:bg-gray-800/30 py-16 border-t border-gray-200 dark:border-gray-700/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Operating Hours</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4">
                <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-3">Regular Hours</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-300">Monday - Friday:</span>
                    <span className="font-medium text-slate-900 dark:text-white">8:00 AM - 8:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-300">Saturday:</span>
                    <span className="font-medium text-slate-900 dark:text-white">9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-300">Sunday:</span>
                    <span className="font-medium text-slate-900 dark:text-white">10:00 AM - 4:00 PM</span>
                  </li>
                </ul>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-3">Emergency Services</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Our emergency department is open 24 hours a day, 7 days a week, including holidays.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 
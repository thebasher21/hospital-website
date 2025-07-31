"use client";

import { Card, CardContent } from "@/components/ui/card";
import PageTitle from "@/components/PageTitle";
import Link from "next/link";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";

export default function ContactUs() {
    // Hospital contact information
    const contactInfo = {
        email: "info@sadhcare.org",
        phones: [
            {
                label: "Reception",
                number: ["0124-2671918", "0124-2671919", "+91 98120 08765"],
            },
            { label: "Emergency", number: ["+91 84610 08461"] },
        ],
        location: {
            address:
                "SADH Care Hospital, Ashram Hari Mandir, Pataudi Gurugram, Haryana 122503",
            mapsUrl: "https://maps.app.goo.gl/GBmGMXhWDFMNnJYy6",
        },
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
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                                Contact Information
                            </h2>

                            {/* Email */}
                            <Card className="border bg-white dark:bg-gray-800/60 transition-colors">
                                <CardContent className="p-6">
                                    <div className="flex items-start">
                                        <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-4">
                                            <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                                                Email
                                            </h3>
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
                                            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                                                Phone Numbers
                                            </h3>
                                            <ul className="space-y-3">
                                                {contactInfo.phones.map(
                                                    (phone, index) => (
                                                        <li key={index}>
                                                            <div className="flex justify-between">
                                                                <span className="text-slate-600 dark:text-slate-300">
                                                                    {
                                                                        phone.label
                                                                    }
                                                                    :
                                                                </span>
                                                                <ul className="space-y-3">
                                                                    {phone.number.map(
                                                                        (
                                                                            number,
                                                                            index
                                                                        ) => (
                                                                            <Link
                                                                                key={
                                                                                    index
                                                                                }
                                                                                href={`tel:${number.replace(
                                                                                    /[^0-9+]/g,
                                                                                    ""
                                                                                )}`}
                                                                                className="text-green-600 dark:text-green-400 hover:underline flex items-center"
                                                                                aria-label={`Call ${phone.label} at ${number}`}
                                                                                tabIndex={
                                                                                    0
                                                                                }
                                                                            >
                                                                                {
                                                                                    number
                                                                                }
                                                                                <ExternalLink className="h-4 w-4 ml-1" />
                                                                            </Link>
                                                                        )
                                                                    )}
                                                                </ul>
                                                            </div>
                                                        </li>
                                                    )
                                                )}
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
                                            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                                                Location
                                            </h3>
                                            <p className="text-slate-600 dark:text-slate-300 mb-2">
                                                {contactInfo.location.address}
                                            </p>
                                            <Link
                                                href={
                                                    contactInfo.location.mapsUrl
                                                }
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
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                                Our Location
                            </h2>
                            <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden h-full min-h-[400px] relative group">
                                <Link
                                    href={contactInfo.location.mapsUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex flex-col items-center text-gray-600 dark:text-gray-800/60 hover:text-white dark:hover:text-white transition-colors w-full h-full"
                                    aria-label="Open location in Google Maps"
                                    tabIndex={0}
                                >
                                    <img
                                        src={
                                            "https://maps.googleapis.com/maps/api/staticmap?center=28.320206,76.7888022&zoom=17&size=1000x1000&maptype=roadmap&key=AIzaSyDRtDDCUoohxfXfRBfU-v-yqYMtu2nAWRw"
                                        }
                                        alt="Google Static Map"
                                        className="w-full h-full object-cover transition duration-300 hover:brightness-55"
                                    />
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
                                        <MapPin className="h-12 w-12 mb-3" />
                                        <span className="text-sm font-bold">
                                            Click to view on Google Maps
                                        </span>
                                    </div>
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
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
                            Operating Hours
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-4">
                                <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-3">
                                    Emergency Services
                                </h3>
                                <p className="text-slate-600 dark:text-slate-300">
                                    Our emergency department is open 24 hours a
                                    day, 7 days a week, including holidays.
                                </p>
                            </div>
                            <div className="p-4">
                                <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-3">
                                    OPD timings
                                </h3>
                                <ul className="space-y-2">
                                    <li className="flex justify-between">
                                        <span className="text-slate-600 dark:text-slate-300">
                                            Monday - Friday
                                        </span>
                                        <span className="font-medium text-slate-900 dark:text-white">
                                            8:00 AM - 5:00 PM
                                        </span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span className="text-slate-600 dark:text-slate-300">
                                            Sunday
                                        </span>
                                        <span className="font-medium text-slate-900 dark:text-white">
                                            10:00 AM - 2:00 PM
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

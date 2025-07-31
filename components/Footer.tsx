"use client";

import Link from "next/link";
import Image from "next/image";
import { getBasePath } from "@/lib/utils";
import { useNavigation } from "@/lib/client-utils";

export default function Footer() {
    const { handleNavigation } = useNavigation();

    return (
        <footer className="bg-blue-800 dark:bg-gray-900 text-white py-8 transition-colors duration-200">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-12">
                    <div>
                        <div className="bg-white dark:bg-gray-800 p-3 rounded-lg inline-block">
                            <div className="relative h-12 w-48">
                                <Image
                                    src={getBasePath(
                                        "/images/logos/hospitalLogo.png"
                                    )}
                                    alt="SADH Care Hospital Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                        <p
                            className="font-bold text-blue-100 dark:text-gray-300"
                            data-i18n="footer.trustedPartner"
                        >
                            A unit of Swami Amardev Vidyalaya Trust
                        </p>
                        <p
                            className="mb-4 font-medium text-blue-100 dark:text-gray-300"
                            data-i18n="footer.trustedPartner"
                        >
                            Supported by Mankind Pharma pvt. ltd. under CSR
                            initiative
                        </p>
                        <p
                            className="mt-2 font-medium text-blue-200 dark:text-gray-200"
                            data-i18n="footer.trustedPartner"
                        >
                            Your trusted healthcare partner providing quality
                            medical services since Jan 2017
                        </p>
                        <p
                            className="mt-2 font-medium text-blue-200 dark:text-gray-200"
                            data-i18n="hero.mission"
                        >
                            Care · Compassion · Empathy
                        </p>
                    </div>
                    <div>
                        <h4
                            className="text-xl font-bold mb-4 text-white"
                            data-i18n="footer.quickLinks.title"
                        >
                            Quick Links
                        </h4>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href={getBasePath("/about-us")}
                                    className="text-blue-100 hover:underline hover:text-white transition-colors dark:text-gray-300 dark:hover:text-white"
                                    data-i18n="footer.quickLinks.aboutUs"
                                    onClick={(e) =>
                                        handleNavigation(e, "/about-us")
                                    }
                                >
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={getBasePath("/doctors")}
                                    className="text-blue-100 hover:underline hover:text-white transition-colors dark:text-gray-300 dark:hover:text-white"
                                    data-i18n="footer.quickLinks.ourDoctors"
                                >
                                    Our Doctors
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={getBasePath("/specialities")}
                                    className="text-blue-100 hover:underline hover:text-white transition-colors dark:text-gray-300 dark:hover:text-white"
                                    data-i18n="footer.quickLinks.departments"
                                    onClick={(e) =>
                                        handleNavigation(e, "/specialities")
                                    }
                                >
                                    Departments
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={getBasePath("/contact-us")}
                                    className="text-blue-100 hover:underline hover:text-white transition-colors dark:text-gray-300 dark:hover:text-white"
                                    data-i18n="footer.quickLinks.careers"
                                    onClick={(e) =>
                                        handleNavigation(e, "/contact-us")
                                    }
                                >
                                    Careers
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4
                            className="text-xl font-bold mb-4 text-white"
                            data-i18n="footer.contactUs.title"
                        >
                            Contact Us
                        </h4>
                        <Link
                            href="https://maps.app.goo.gl/GBmGMXhWDFMNnJYy6"
                            target="_blank"
                        >
                            <p
                                className="mb-2 text-blue-100 dark:text-gray-300 hover:underline"
                                data-i18n="footer.contactUs.address"
                            >
                                SADH Care Hospital, Ashram Hari Mandir, Pataudi
                                Gurugram, Haryana 122503
                            </p>
                        </Link>
                        <Link href="mailto:info@sadhcare.org" target="_blank">
                            <p
                                className="mb-2 text-blue-100 dark:text-gray-300 hover:underline"
                                data-i18n="footer.contactUs.email"
                            >
                                Email: info@sadhcare.org
                            </p>
                        </Link>
                        <Link href="tel:+918461008461">
                            <p
                                className="text-blue-100 dark:text-gray-300 hover:underline"
                                data-i18n="footer.contactUs.phone"
                            >
                                Phone: +91 84610 08461
                            </p>
                        </Link>
                    </div>
                    <div>
                        <h4
                            className="text-xl font-bold mb-4 text-white"
                            data-i18n="footer.socialMedia.title"
                        >
                            Social Media
                        </h4>
                        <div className="flex space-x-4">
                            <Link
                                href="https://www.facebook.com/sadhcare/"
                                target="_blank"
                                className="text-blue-100 hover:text-white transition-colors dark:text-gray-300 dark:hover:text-white"
                                aria-label="Facebook"
                            >
                                <svg
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </Link>
                            <Link
                                href={
                                    "https://www.instagram.com/sadhcarehospital"
                                }
                                target="_blank"
                                className="text-blue-100 hover:text-white transition-colors dark:text-gray-300 dark:hover:text-white"
                                aria-label="Instagram"
                            >
                                <svg
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </Link>
                            <Link
                                href="https://www.linkedin.com/company/sadh-care-hospital/"
                                target="_blank"
                                className="text-blue-100 hover:text-white transition-colors dark:text-gray-300 dark:hover:text-white"
                                aria-label="LinkedIn"
                            >
                                <svg
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-blue-700 dark:border-gray-800 text-center text-sm text-blue-200 dark:text-gray-400">
                    <p>
                        &copy; {new Date().getFullYear()} SADH Care Hospital.
                        All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-blue-800 dark:bg-gray-900 text-white py-8 transition-colors duration-200">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-12">
          <div>
            <div className="mb-4 bg-white dark:bg-gray-800 p-3 rounded-lg inline-block">
              <div className="relative h-12 w-48">
                <Image 
                  src="/images/logos/hospitalLogo.png" 
                  alt="SADH Care Hospital Logo" 
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-blue-100 dark:text-gray-300" data-i18n="footer.trustedPartner">Your trusted healthcare partner providing quality medical services since [year].</p>
            <p className="mt-2 font-medium text-blue-200 dark:text-gray-200" data-i18n="hero.mission">Care · Compassion · Empathy</p>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4 text-white" data-i18n="footer.quickLinks.title">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about-us" className="text-blue-100 hover:underline hover:text-white transition-colors dark:text-gray-300 dark:hover:text-white" data-i18n="footer.quickLinks.aboutUs">About Us</Link></li>
              <li><Link href="#" className="text-blue-100 hover:underline hover:text-white transition-colors dark:text-gray-300 dark:hover:text-white" data-i18n="footer.quickLinks.ourDoctors">Our Doctors</Link></li>
              <li><Link href="#" className="text-blue-100 hover:underline hover:text-white transition-colors dark:text-gray-300 dark:hover:text-white" data-i18n="footer.quickLinks.departments">Departments</Link></li>
              <li><Link href="#" className="text-blue-100 hover:underline hover:text-white transition-colors dark:text-gray-300 dark:hover:text-white" data-i18n="footer.quickLinks.careers">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4 text-white" data-i18n="footer.contactUs.title">Contact Us</h4>
            <p className="mb-2 text-blue-100 dark:text-gray-300" data-i18n="footer.contactUs.address">123 Hospital Street, City, Country</p>
            <p className="mb-2 text-blue-100 dark:text-gray-300" data-i18n="footer.contactUs.email">Email: info@hospital.com</p>
            <p className="text-blue-100 dark:text-gray-300" data-i18n="footer.contactUs.phone">Phone: (123) 456-7890</p>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4 text-white" data-i18n="footer.workingHours.title">Working Hours</h4>
            <p className="mb-2 text-blue-100 dark:text-gray-300" data-i18n="footer.workingHours.weekdays">Monday - Friday: 8am - 8pm</p>
            <p className="text-blue-100 dark:text-gray-300" data-i18n="footer.workingHours.emergency">Emergency: 24/7</p>
          </div>
        </div>
        <div className="border-t border-blue-700 dark:border-gray-800 mt-8 pt-6 text-center">
          <p className="text-blue-200 dark:text-gray-400" data-i18n-key="footer.copyright" data-i18n-params={`{"year":${new Date().getFullYear()}}`}>
            &copy; {new Date().getFullYear()} SADH Care Hospital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 
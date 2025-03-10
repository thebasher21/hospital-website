'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-blue-900 dark:bg-blue-950 text-white py-8 transition-colors duration-200">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-xl font-bold mb-4 text-white" data-i18n="header.hospitalName">Sadhcare Hospital</h4>
            <p className="text-blue-100 dark:text-blue-100" data-i18n="footer.trustedPartner">Your trusted healthcare partner providing quality medical services since [year].</p>
            <p className="mt-2 font-medium text-blue-200 dark:text-blue-200" data-i18n="hero.mission">Care · Compassion · Empathy</p>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4 text-white" data-i18n="footer.quickLinks.title">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about-us" className="text-blue-100 hover:underline hover:text-white transition-colors" data-i18n="footer.quickLinks.aboutUs">About Us</Link></li>
              <li><Link href="#" className="text-blue-100 hover:underline hover:text-white transition-colors" data-i18n="footer.quickLinks.ourDoctors">Our Doctors</Link></li>
              <li><Link href="#" className="text-blue-100 hover:underline hover:text-white transition-colors" data-i18n="footer.quickLinks.departments">Departments</Link></li>
              <li><Link href="#" className="text-blue-100 hover:underline hover:text-white transition-colors" data-i18n="footer.quickLinks.careers">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4 text-white" data-i18n="footer.contactUs.title">Contact Us</h4>
            <p className="mb-2 text-blue-100" data-i18n="footer.contactUs.address">123 Hospital Street, City, Country</p>
            <p className="mb-2 text-blue-100" data-i18n="footer.contactUs.email">Email: info@hospital.com</p>
            <p className="text-blue-100" data-i18n="footer.contactUs.phone">Phone: (123) 456-7890</p>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4 text-white" data-i18n="footer.workingHours.title">Working Hours</h4>
            <p className="mb-2 text-blue-100" data-i18n="footer.workingHours.weekdays">Monday - Friday: 8am - 8pm</p>
            <p className="text-blue-100" data-i18n="footer.workingHours.emergency">Emergency: 24/7</p>
          </div>
        </div>
        <div className="border-t border-blue-800 dark:border-blue-800 mt-8 pt-8 text-center">
          <p className="text-blue-200 dark:text-blue-300" data-i18n-key="footer.copyright" data-i18n-params={`{"year":${new Date().getFullYear()}}`}>
            &copy; {new Date().getFullYear()} Sadhcare Hospital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 
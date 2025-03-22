'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X, Copy, CheckCircle } from "lucide-react";
import PageTitle from '@/components/PageTitle';
import Image from 'next/image';

// Sample donors data
const donors = [
  {
    id: 1,
    name: 'Rajan Mehta',
    amount: '₹5,00,000',
    date: 'March 15, 2023',
    category: 'Platinum',
    image: 'https://placehold.co/150x150/0067b8/ffffff.jpeg?text=RM',
    message: 'Proud to support the hospital\'s mission to provide quality healthcare to all.',
  },
  {
    id: 2,
    name: 'Priya Shah Foundation',
    amount: '₹10,00,000',
    date: 'February 12, 2023',
    category: 'Diamond',
    image: 'https://placehold.co/150x150/00a2ed/ffffff.jpeg?text=PSF',
    message: 'We believe in the vision of SADH Care Hospital and are committed to supporting healthcare initiatives.',
  },
  {
    id: 3,
    name: 'Dr. Anand Kumar',
    amount: '₹2,50,000',
    date: 'January 5, 2023',
    category: 'Gold',
    image: 'https://placehold.co/150x150/68217a/ffffff.jpeg?text=AK',
    message: 'As a medical professional, I understand the importance of supporting healthcare institutions.',
  },
  {
    id: 4,
    name: 'Sushila Devi Trust',
    amount: '₹7,50,000',
    date: 'December 20, 2022',
    category: 'Platinum',
    image: 'https://placehold.co/150x150/107c10/ffffff.jpeg?text=SDT',
    message: 'Our trust is dedicated to supporting healthcare initiatives that make a difference in the community.',
  },
  {
    id: 5,
    name: 'Vikram Singh',
    amount: '₹1,00,000',
    date: 'November 30, 2022',
    category: 'Silver',
    image: 'https://placehold.co/150x150/0067b8/ffffff.jpeg?text=VS',
    message: 'Happy to contribute to the development of medical facilities in our community.',
  },
  {
    id: 6,
    name: 'Global Care Inc.',
    amount: '₹15,00,000',
    date: 'October 15, 2022',
    category: 'Diamond',
    image: 'https://placehold.co/150x150/00a2ed/ffffff.jpeg?text=GC',
    message: 'As part of our CSR initiative, we are proud to support SADH Care Hospital\'s expansion project.',
  },
  {
    id: 7,
    name: 'Meera & Rajesh Patel',
    amount: '₹3,00,000',
    date: 'September 5, 2022',
    category: 'Gold',
    image: 'https://placehold.co/150x150/68217a/ffffff.jpeg?text=MRP',
    message: 'This donation is made in memory of our parents who received excellent care at this hospital.',
  },
  {
    id: 8,
    name: 'Sunita Sharma',
    amount: '₹50,000',
    date: 'August 12, 2022',
    category: 'Bronze',
    image: 'https://placehold.co/150x150/107c10/ffffff.jpeg?text=SS',
    message: 'Grateful for the care I received during my treatment. This is my way of giving back.',
  }
];

// Hospital account details for donations
const accountDetails = {
  accountName: 'SADH Care Hospital Trust',
  accountNumber: '1234567890123456',
  ifscCode: 'ABCD0123456',
  bankName: 'State Bank of India',
  branchName: 'Medical College Branch',
  panNumber: 'AAAHS1234A',
  registrationNumber: 'E-12345-67',
};

// Tax exemption details
const taxExemptionDetails = {
  section: '80G of the Income Tax Act, 1961',
  benefitPercentage: '100% deduction for qualifying donations',
  eligibility: 'Both individuals and corporate donors',
  certificateIssue: 'Donation certificates issued within 7 working days',
  maxLimit: 'No maximum limit for donation, but deduction limited to 10% of adjusted gross total income',
  documentRequired: 'PAN Card details required for all donations above ₹2,000',
};

// Donation categories
const donationCategories = [
  { name: 'Diamond', minAmount: '₹10,00,000 and above', benefits: 'Name on permanent donor wall, annual recognition event, dedicated facility naming opportunity' },
  { name: 'Platinum', minAmount: '₹5,00,000 to ₹9,99,999', benefits: 'Name on permanent donor wall, annual recognition event, VIP hospital services' },
  { name: 'Gold', minAmount: '₹2,00,000 to ₹4,99,999', benefits: 'Name on permanent donor wall, annual recognition event' },
  { name: 'Silver', minAmount: '₹1,00,000 to ₹1,99,999', benefits: 'Name on permanent donor wall' },
  { name: 'Bronze', minAmount: '₹50,000 to ₹99,999', benefits: 'Certificate of appreciation and acknowledgment in annual report' },
];

// Modal component for donation details
const DonationModal = ({ 
  isOpen, 
  onClose
}: { 
  isOpen: boolean; 
  onClose: () => void;
}) => {
  const [copyStatus, setCopyStatus] = useState<{[key: string]: boolean}>({});

  if (!isOpen) return null;

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopyStatus({...copyStatus, [field]: true});
      
      // Reset the copy status after 2 seconds
      setTimeout(() => {
        setCopyStatus({...copyStatus, [field]: false});
      }, 2000);
    });
  };

  return (
    <div 
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 md:p-8"
      onClick={onClose}
    >
      <div 
        className="bg-white dark:bg-gray-800 max-w-3xl w-full rounded-lg overflow-hidden shadow-xl relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 bg-blue-900 dark:bg-blue-950 p-4 flex justify-between items-center">
          <h2 className="text-xl font-bold text-white">Make a Donation</h2>
          <Button 
            variant="outline" 
            size="icon" 
            onClick={onClose}
            className="rounded-full bg-black/20 border-none hover:bg-black/40 text-white h-9 w-9"
          >
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </Button>
        </div>
        
        <div className="p-6">
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Account Details</h3>
            <div className="space-y-3 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              {Object.entries(accountDetails).map(([key, value]) => (
                <div key={key} className="flex justify-between items-center">
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-300 capitalize">
                    {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:
                  </p>
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-mono text-slate-900 dark:text-white">{value}</p>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-7 w-7 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/30"
                      onClick={() => copyToClipboard(value, key)}
                    >
                      {copyStatus[key] ? (
                        <CheckCircle className="h-4 w-4" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                      <span className="sr-only">Copy {key}</span>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Tax Exemption Information</h3>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                <span className="font-semibold">Section:</span> {taxExemptionDetails.section}
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                <span className="font-semibold">Benefit:</span> {taxExemptionDetails.benefitPercentage}
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                <span className="font-semibold">Eligibility:</span> {taxExemptionDetails.eligibility}
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                <span className="font-semibold">Certificate:</span> {taxExemptionDetails.certificateIssue}
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                <span className="font-semibold">Maximum Limit:</span> {taxExemptionDetails.maxLimit}
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                <span className="font-semibold">Documentation:</span> {taxExemptionDetails.documentRequired}
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Donation Categories</h3>
            <div className="space-y-3">
              {donationCategories.map((category) => (
                <div key={category.name} className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant={
                      category.name === 'Diamond' ? 'default' :
                      category.name === 'Platinum' ? 'secondary' :
                      category.name === 'Gold' ? 'outline' :
                      'secondary'
                    }>
                      {category.name}
                    </Badge>
                    <p className="text-sm font-medium text-slate-900 dark:text-white">{category.minAmount}</p>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{category.benefits}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-6">
              For assistance with donations or any queries, please contact our donation coordinator at <span className="text-blue-600 dark:text-blue-400">donations@sadhcare.org</span> or call <span className="text-blue-600 dark:text-blue-400">+91 123 456 7890</span>.
            </p>
            <div className="flex justify-center">
              <Button variant="default" size="lg" className="font-medium">
                Download Donation Form
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Badge component for donor categories
const CategoryBadge = ({ category }: { category: string }) => {
  let badgeVariant: "default" | "secondary" | "outline" | "destructive" = "default";
  
  switch (category) {
    case 'Diamond':
      badgeVariant = "default";
      break;
    case 'Platinum':
      badgeVariant = "secondary";
      break;
    case 'Gold':
      badgeVariant = "outline";
      break;
    case 'Silver':
    case 'Bronze':
      badgeVariant = "secondary";
      break;
    default:
      badgeVariant = "default";
  }
  
  return (
    <Badge variant={badgeVariant} className="text-xs">
      {category}
    </Badge>
  );
};

export default function Donations() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const openDonationModal = () => {
    setIsModalOpen(true);
    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };
  
  const closeDonationModal = () => {
    setIsModalOpen(false);
    // Re-enable body scrolling when modal is closed
    document.body.style.overflow = 'visible';
  };

  return (
    <>
      <PageTitle 
        title="Donations" 
        description="Support our mission to provide quality healthcare services to all. Your contributions help us expand our facilities, acquire advanced medical equipment, and serve more patients in need."
      />
      
      {/* Call to Action Section */}
      <section className="bg-white dark:bg-gray-900/40 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">
            Make a Difference Today
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Your generous donations enable us to continue providing high-quality healthcare services, 
            acquire cutting-edge medical equipment, and extend our reach to underserved communities.
          </p>
          <Button onClick={openDonationModal} variant="default" size="lg" className="font-medium">
            Donate Now
          </Button>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="border bg-white dark:bg-gray-800/70 shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-center text-slate-900 dark:text-white">Medical Equipment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 dark:text-slate-300 text-center">
                  Help us acquire state-of-the-art medical equipment to enhance our diagnostic and treatment capabilities.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border bg-white dark:bg-gray-800/70 shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-center text-slate-900 dark:text-white">Patient Support Fund</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 dark:text-slate-300 text-center">
                  Contribute to our fund that provides financial assistance to patients who cannot afford treatment.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border bg-white dark:bg-gray-800/70 shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-center text-slate-900 dark:text-white">Infrastructure Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 dark:text-slate-300 text-center">
                  Support the expansion and improvement of our hospital facilities to better serve our growing patient base.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Our Donors Section */}
      <section className="bg-gray-100 dark:bg-gray-800/30 py-20 border-y border-gray-200 dark:border-gray-700/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900 dark:text-white">
            Our Generous Donors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {donors.map((donor) => (
              <Card key={donor.id} className="border bg-white dark:bg-gray-800/70 shadow-sm hover:shadow-md transition-shadow duration-300">
                <CardHeader className="pb-2 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="relative h-24 w-24 rounded-full overflow-hidden">
                      <Image 
                        src={donor.image}
                        alt={donor.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <CardTitle className="text-lg text-slate-900 dark:text-white">{donor.name}</CardTitle>
                  <div className="flex items-center justify-center gap-2 mt-1">
                    <CategoryBadge category={donor.category} />
                  </div>
                </CardHeader>
                <CardContent className="text-center pb-2">
                  <p className="text-blue-600 dark:text-blue-400 font-semibold mb-1">{donor.amount}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">{donor.date}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-300 italic">&quot;{donor.message}&quot;</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Corporate Partners Section */}
      <section className="bg-white dark:bg-gray-900/40 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-slate-900 dark:text-white">
            Corporate Social Responsibility
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            We welcome corporate partnerships through CSR initiatives. Partner with us to make a significant 
            impact on healthcare access and quality in our community.
          </p>
          <Button variant="outline" className="font-medium border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-900/30">
            Corporate Partnership Inquiry
          </Button>
        </div>
      </section>
      
      {/* Donation Modal */}
      <DonationModal isOpen={isModalOpen} onClose={closeDonationModal} />
    </>
  );
} 
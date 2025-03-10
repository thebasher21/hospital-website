'use client';

import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import PageTitle from '@/components/PageTitle';
import Image from 'next/image';

// Sample gallery data
const galleryItems = [
  {
    id: 1,
    title: 'Hospital Main Building',
    description: 'The modern facade of our main hospital building featuring state-of-the-art architecture designed for patient comfort and efficient healthcare delivery.',
    image: 'https://placehold.co/800x600/0067b8/ffffff.jpeg?text=Hospital+Building'
  },
  {
    id: 2,
    title: 'Advanced Surgery Suite',
    description: 'Our advanced surgical suite equipped with the latest technology for minimally invasive and complex surgical procedures.',
    image: 'https://placehold.co/800x600/00a2ed/ffffff.jpeg?text=Surgery+Suite'
  },
  {
    id: 3,
    title: 'Patient Room',
    description: 'Comfortable and well-appointed patient rooms designed to create a healing environment with natural light and modern amenities.',
    image: 'https://placehold.co/800x600/68217a/ffffff.jpeg?text=Patient+Room'
  },
  {
    id: 4,
    title: 'Emergency Department',
    description: 'Our 24/7 emergency department ready to provide immediate care with dedicated trauma bays and advanced life-saving equipment.',
    image: 'https://placehold.co/800x600/107c10/ffffff.jpeg?text=Emergency+Dept'
  },
  {
    id: 5,
    title: 'Pediatric Ward',
    description: 'Child-friendly pediatric ward with colorful décor, play areas, and specialized care units for young patients.',
    image: 'https://placehold.co/800x600/0067b8/ffffff.jpeg?text=Pediatric+Ward'
  },
  {
    id: 6,
    title: 'Diagnostic Imaging Center',
    description: 'Advanced diagnostic imaging center featuring MRI, CT, ultrasound, and X-ray capabilities for comprehensive diagnostics.',
    image: 'https://placehold.co/800x600/00a2ed/ffffff.jpeg?text=Imaging+Center'
  },
  {
    id: 7,
    title: 'Rehabilitation Facility',
    description: 'Comprehensive rehabilitation facility with physical therapy, occupational therapy, and specialized equipment for patient recovery.',
    image: 'https://placehold.co/800x600/68217a/ffffff.jpeg?text=Rehab+Facility'
  },
  {
    id: 8,
    title: 'Hospital Cafeteria',
    description: 'Modern cafeteria offering nutritious meals and refreshments for patients, visitors, and staff in a welcoming environment.',
    image: 'https://placehold.co/800x600/107c10/ffffff.jpeg?text=Hospital+Cafeteria'
  },
  {
    id: 9,
    title: 'Hospital Garden',
    description: 'Therapeutic garden space where patients and visitors can enjoy nature, fresh air, and a peaceful environment.',
    image: 'https://placehold.co/800x600/0067b8/ffffff.jpeg?text=Hospital+Garden'
  },
  {
    id: 10,
    title: 'Medical Laboratory',
    description: 'State-of-the-art laboratory facilities for accurate diagnostics and research with advanced equipment and expert technicians.',
    image: 'https://placehold.co/800x600/00a2ed/ffffff.jpeg?text=Medical+Lab'
  },
  {
    id: 11,
    title: 'Consultation Room',
    description: 'Private consultation rooms where patients can discuss their health concerns with our medical professionals in a comfortable setting.',
    image: 'https://placehold.co/800x600/68217a/ffffff.jpeg?text=Consultation+Room'
  },
  {
    id: 12,
    title: 'Hospital Pharmacy',
    description: 'Well-stocked pharmacy providing medications, medical supplies, and expert advice from our professional pharmacists.',
    image: 'https://placehold.co/800x600/107c10/ffffff.jpeg?text=Hospital+Pharmacy'
  }
];

// Modal component for image viewing
const ImageModal = ({ 
  isOpen, 
  onClose, 
  image, 
  title, 
  description 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  image: string; 
  title: string; 
  description: string;
}) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 md:p-8"
      onClick={onClose}
    >
      <div 
        className="bg-white dark:bg-gray-800 max-w-4xl w-full rounded-lg overflow-hidden shadow-xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute top-4 right-4 z-10">
          <Button 
            variant="outline" 
            size="icon" 
            onClick={onClose}
            className="rounded-full bg-black/20 border-none hover:bg-black/40 text-white h-10 w-10"
          >
            <X className="h-6 w-6" />
            <span className="sr-only">Close</span>
          </Button>
        </div>
        
        <div className="relative h-[60vh] w-full">
          <Image 
            src={image} 
            alt={title} 
            fill 
            className="object-contain" 
            sizes="(max-width: 768px) 100vw, 80vw"
          />
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{title}</h3>
          <p className="text-slate-600 dark:text-slate-300">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<(typeof galleryItems)[0] | null>(null);
  
  const openModal = (item: typeof galleryItems[0]) => {
    setSelectedImage(item);
    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };
  
  const closeModal = () => {
    setSelectedImage(null);
    // Re-enable body scrolling when modal is closed
    document.body.style.overflow = 'visible';
  };

  return (
    <>
      <PageTitle 
        title="Gallery" 
        description="Explore our facilities, medical equipment, and hospital environment through our gallery of images."
      />
      
      {/* Gallery Section */}
      <section className="bg-white dark:bg-gray-900/40 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900 dark:text-white">
            Hospital Facilities & Environment
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryItems.map((item) => (
              <Card 
                key={item.id} 
                className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300 border bg-white dark:bg-gray-800/70"
                onClick={() => openModal(item)}
              >
                <div className="relative h-60 w-full">
                  <Image 
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-medium text-slate-900 dark:text-white">{item.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Modal for image viewing */}
      {selectedImage && (
        <ImageModal 
          isOpen={!!selectedImage} 
          onClose={closeModal} 
          image={selectedImage.image} 
          title={selectedImage.title} 
          description={selectedImage.description}
        />
      )}
    </>
  );
} 
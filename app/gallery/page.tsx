"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
// import { X, ChevronLeft, ChevronRight, Play } from "lucide-react";
import { X } from "lucide-react";
import PageTitle from "@/components/PageTitle";
import Image from "next/image";

// Sample gallery data
const galleryItems = [
    {
        id: 1,
        title: "Hospital Entrance",
        description:
            "Welcoming entrance with clear signage, security, and easy access for patients and visitors.",
        image: "/images/gallery/hospital_entrance.jpg",
    },
    {
        id: 2,
        title: "Reception",
        description:
            "Hospital reception with a friendly staff to assist patients and visitors with inquiries and check-ins.",
        image: "/images/gallery/reception.jpg",
    },
    {
        id: 3,
        title: "OPD Waiting Area",
        description:
            "Spacious waiting area for outpatient department (OPD) with comfortable seating arrangements.",
        image: "/images/gallery/opd_waiting_area.jpg",
    },
    {
        id: 4,
        title: "OPD Consulting Cabins",
        description:
            "Private consulting cabins in the OPD for patient consultations with specialists.",
        image: "/images/gallery/opd_consulting_cabins.jpg",
    },
    {
        id: 5,
        title: "ICU",
        description:
            "Intensive care unit equipped with advanced life support systems for critically ill patients.",
        image: "/images/gallery/icu.jpg",
    },
    {
        id: 6,
        title: "Emergency Ward",
        description:
            "24/7 emergency services with immediate medical attention and emergency treatment facilities.",
        image: "/images/gallery/emergency_ward.jpg",
    },
    {
        id: 7,
        title: "X Ray Unit",
        description:
            "Modern X-ray unit for diagnostic imaging with high-quality results for bone and internal conditions.",
        image: "/images/gallery/x_ray.jpg",
    },
    {
        id: 8,
        title: "Laboratory",
        description:
            "Fully equipped laboratory for various diagnostic tests with accurate and fast results.",
        image: "/images/gallery/laboratory.jpg",
    },
    {
        id: 9,
        title: "Physiotherapy Unit",
        description:
            "Physiotherapy unit with equipment and trained professionals for rehabilitation and physical therapy.",
        image: "/images/gallery/physiotherapy_unit.jpg",
    },
    {
        id: 10,
        title: "Major Operation Theatre",
        description:
            "State-of-the-art major operation theatre for complex surgeries with modern equipment.",
        image: "/images/gallery/major_operation_theatre.jpg",
    },
    {
        id: 11,
        title: "Minor Operation Theatre",
        description:
            "Well-equipped minor operation theatre for less complex and outpatient procedures.",
        image: "/images/gallery/minor_operation_theatre.jpg",
    },
    {
        id: 12,
        title: "Dental Surgery Ward",
        description:
            "Specialized dental surgery ward equipped for various oral and maxillofacial procedures.",
        image: "/images/gallery/orthodental_unit.jpg",
    },
    {
        id: 13,
        title: "Ophthalmology Unit",
        description:
            "Comprehensive eye care services including diagnosis, treatment, and surgeries for eye conditions.",
        image: "/images/gallery/ophthalmology_unit.jpg",
    },
    {
        id: 14,
        title: "Labour Room",
        description:
            "Comfortable and well-equipped labor room for childbirth with monitoring and immediate care services.",
        image: "/images/gallery/labour_room.jpg",
    },
    {
        id: 15,
        title: "General Ward",
        description:
            "Comfortable general ward with beds and facilities for multiple patients under observation.",
        image: "/images/gallery/general_ward.jpg",
    },
];

// const videoItems = [
//     {
//         id: 1,
//         title: "Dialysis Facility Tour",
//         description:
//             "Walkthrough of our dialysis units and patient-friendly setups.",
//         videoUrl: "/images/videos/video1.mp4",
//         thumbnail: "/images/gallery/dialysis_thumb.jpg",
//     },
//     {
//         id: 2,
//         title: "Radiology Services",
//         description: "Introduction to our advanced radiology diagnostics.",
//         videoUrl: "/images/videos/video2.mp4",
//         thumbnail: "/images/gallery/radiology_thumb.jpg",
//     },
//     {
//         id: 3,
//         title: "Emergency Care Facility",
//         description:
//             "Experience our 24/7 emergency care facilities and ICU setup.",
//         videoUrl: "/images/videos/video3.mp4",
//         thumbnail: "/images/gallery/emergency_thumb.jpg",
//     },
//     {
//         id: 4,
//         title: "Emergency Care Facility",
//         description:
//             "Experience our 24/7 emergency care facilities and ICU setup.",
//         videoUrl: "/images/videos/video4.mp4",
//         thumbnail: "/images/gallery/emergency_thumb.jpg",
//     },
// ];

// Modal component for image viewing
const ImageModal = ({
    isOpen,
    onClose,
    image,
    title,
    description,
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
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                        {title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState<
        (typeof galleryItems)[0] | null
    >(null);

    const openModal = (item: (typeof galleryItems)[0]) => {
        setSelectedImage(item);
        // Prevent body scrolling when modal is open
        document.body.style.overflow = "hidden";
    };

    const closeModal = () => {
        setSelectedImage(null);
        // Re-enable body scrolling when modal is closed
        document.body.style.overflow = "visible";
    };

    // const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    // const [isPlaying, setIsPlaying] = useState(false);

    // const nextVideo = () => {
    //     setCurrentVideoIndex((prev) => (prev + 1) % videoItems.length);
    //     setIsPlaying(false);
    // };

    // const prevVideo = () => {
    //     setCurrentVideoIndex(
    //         (prev) => (prev - 1 + videoItems.length) % videoItems.length
    //     );
    //     setIsPlaying(false);
    // };

    // const togglePlay = () => {
    //     setIsPlaying((prev) => !prev);
    // };

    // const currentVideo = videoItems[currentVideoIndex];

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

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
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
                                    <h3 className="font-medium text-slate-900 dark:text-white">
                                        {item.title}
                                    </h3>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Videos section */}
            {/* <section className="bg-white dark:bg-gray-900/40 py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12 text-slate-900 dark:text-white">
                        Hospital Video Tour
                    </h2>

                    <div className="relative w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg">
                        <video
                            src={currentVideo.videoUrl}
                            poster={currentVideo.thumbnail}
                            className="w-full h-[400px] object-cover rounded-lg"
                            autoPlay={isPlaying}
                            controls={false} // We'll use custom play button
                        />

                        {!isPlaying && (
                            <div
                                className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer"
                                onClick={togglePlay}
                            >
                                <Play className="w-16 h-16 text-white" />
                            </div>
                        )}

                        <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
                            <h3 className="text-lg font-semibold">
                                {currentVideo.title}
                            </h3>
                            <p className="text-sm">
                                {currentVideo.description}
                            </p>
                        </div>
                    </div>

                    <div className="flex justify-center gap-4 mt-6">
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={prevVideo}
                            className="rounded-full"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={nextVideo}
                            className="rounded-full"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </Button>
                    </div>
                </div>
            </section> */}

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

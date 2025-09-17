"use client";

import PageTitle from "@/components/PageTitle";
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { getBasePath } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";
import { ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Doctors() {
    const managementStaff = [
        {
            name: "Dr. (Brig) Amitava Banerjee",
            designation: "Medical Director & HOD",
            image: "/images/doctors/Amitava_Banerjee.jpg",
            bio: "Radiodiagnosis",
        },
        {
            name: "Dr. (Maj) Roli Tewari",
            designation: "COO & Medical Deputy MS",
            image: "/images/doctors/Roli_Tewari.jpg",
            bio: "Superintendent",
        },
        {
            name: "Dr. Parul Prinja",
            designation: "Medical Specialist",
            image: "/images/doctors/Parul_Prinja.jpg",
            bio: "",
        },
        {
            name: "Dr. Umesh Kumari Yadav",
            designation: "Gynaecologist",
            image: "/images/doctors/Umesh_Kumari_Yadav.jpg",
            bio: "",
        },
    ];

    const doctors = [
        {
            id: 1,
            name: "Dr. Vipin Jamdagni",
            image: "/images/doctors/Vipin_Jamdagni.jpeg",
            speciality: "Medical Specialist",
            working_days: [1, 0, 1, 0, 1, 0, 0],
            timing: "9:00AM to 9:00PM",
        },
        {
            id: 2,
<<<<<<< HEAD
            name: "Dr. Nidhi Kumari",
            image: "",
            speciality: "Gynaecologist",
=======
            name: "Dr. Anadhi Dhar",
            image: "/images/doctors/Anadhi_Dhar.jpeg",
            speciality: "Medical Specialist",
>>>>>>> e31addc92b5704474a0ecd3ecc4d575ad3c0eb18
            working_days: [1, 1, 1, 1, 0, 0, 0],
            timing: "8:30AM to 4:00PM",
        },
        {
            id: 3,
            name: "Dr. Rajesh Yadav",
            image: "/images/doctors/Rajesh_Yadav.jpeg",
            speciality: "General Surgeon",
            working_days: [1, 1, 1, 0, 1, 0, 0],
            timing: "8:00AM to 4:00PM",
        },
        {
            id: 4,
            name: "Dr. Shashikant Mishra",
            image: "/images/doctors/Shashikant_Mishra.jpeg",
            speciality: "Cardiologist",
            working_days: [0, 1, 0, 1, 0, 1, 1],
            timing: "10:00AM to 6:00PM",
        },
        {
            id: 5,
            name: "Dr. Sunil Yadav",
            image: "/images/doctors/Sunil_Yadav.jpeg",
            speciality: "Orthopedic Surgeon",
            working_days: [0, 1, 0, 1, 0, 1, 1],
            timing: "11:00AM to 11:30PM",
        },
        {
            id: 6,
            name: "Dr. Swarnima Saxena",
            image: "/images/doctors/Swarnima_Saxena.jpeg",
            speciality: "Gynaecologist",
            working_days: [1, 1, 1, 1, 1, 0, 0],
            timing: "9:00AM to 5:00PM",
        },
        {
            id: 7,
            name: "Dr. Karan Yadav",
            image: "/images/doctors/Karan_Yadav.jpeg",
            speciality: "ENT Surgeon",
            working_days: [1, 1, 0, 1, 1, 0, 0],
            timing: "9:30AM to 5:45PM",
        },
        {
            id: 8,
<<<<<<< HEAD
            name: "Dr. Vishal Subhash Ambare",
=======
            name: "Dr. Vishal Ambare",
>>>>>>> e31addc92b5704474a0ecd3ecc4d575ad3c0eb18
            image: "/images/doctors/Vishal_Ambare.jpeg",
            speciality: "Pediatrics",
            working_days: [1, 1, 1, 0, 1, 0, 0],
            timing: "10:00AM to 2:00PM",
        },
        {
            id: 9,
            name: "Dr. J P Tak",
            image: "/images/doctors/J_P_Tak.jpeg",
            speciality: "Anesthetist",
            working_days: [0, 1, 1, 1, 0, 1, 0],
            timing: "1:15PM to 9:00PM",
        },
        {
            id: 10,
            name: "Dr. Mohit Tayal",
            image: "/images/doctors/Mohit_Tayal.jpeg",
            speciality: "Pediatrics",
            working_days: [1, 0, 1, 0, 1, 0, 1],
            timing: "6:30PM to 12:00AM",
        },
        {
            id: 11,
<<<<<<< HEAD
            name: "Dr. Bhavna Sharma",
            image: "",
            speciality: "Pathologist",
            working_days: [0, 1, 1, 1, 0, 1, 0],
            timing: "1:15PM to 9:00PM",
        },
        {
            id: 12,
            name: "Dr. Pradhuman Yadav",
            image: "",
            speciality: "Uro Surgeon",
            working_days: [1, 0, 1, 0, 1, 0, 0],
            timing: "9:00AM to 9:00PM",
        },
        {
            id: 13,
            name: "Dr. Shri Bhagwan",
            image: "",
            speciality: "Forensics",
            working_days: [1, 0, 1, 0, 1, 0, 1],
            timing: "6:30PM to 12:00AM",
        },
        {
            id: 14,
            name: "Dr. Sameer",
            image: "",
            speciality: "General Physician",
            working_days: [0, 1, 1, 1, 0, 1, 0],
            timing: "1:15PM to 9:00PM",
        },
        {
            id: 15,
            name: "Dr. Akash Sharma",
            image: "",
            speciality: "General Physician",
            working_days: [1, 0, 1, 0, 1, 0, 1],
            timing: "6:30PM to 12:00AM",
        },
        {
            id: 16,
            name: "Dr. Tarun Sharma",
            image: "",
            speciality: "General Physician",
            working_days: [1, 1, 1, 0, 1, 0, 0],
            timing: "8:00AM to 4:00PM",
        },
        {
            id: 17,
            name: "Dr. Shivani Malik",
            image: "",
            speciality: "General Physician",
            working_days: [1, 0, 1, 0, 1, 0, 0],
            timing: "9:00AM to 9:00PM",
        },
=======
            name: "Dr. Priyank Bhatia",
            image: "/images/doctors/Priyank_Bhatia.jpeg",
            speciality: "Dentist",
            working_days: [1, 0, 1, 0, 1, 0, 1],
            timing: "6:30PM to 12:00AM",
        },
>>>>>>> e31addc92b5704474a0ecd3ecc4d575ad3c0eb18
    ];

    const workingDayLabels = ["S", "M", "T", "W", "T", "F", "S"];

    const [isSorted, setIsSorted] = useState(false);
    const [doctorsData, setDoctorsData] = useState([...doctors]);

    const handleArrowClick = () => {
        if (isSorted) {
            setDoctorsData(
                doctors.sort((a, b) => {
                    const nameA = a.name.toLowerCase();
                    const nameB = b.name.toLowerCase();
                    return nameA > nameB ? -1 : nameA < nameB ? 1 : 0;
                })
            );
        } else {
            setDoctorsData(
                doctors.sort((a, b) => {
                    const nameA = a.name.toLowerCase();
                    const nameB = b.name.toLowerCase();
                    return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
                })
            );
        }

        setIsSorted(!isSorted);
    };

    return (
        <>
            <PageTitle
                title="Our Doctors"
                description="SADH has a team of doctors specialized in different fields of medicine, who have a deep desire to promote the welfare of others and help create a better world. Many of the doctors and support staff at SADH are ex-Army doctors and personnel, led by Dr. (Brig) Amitava Banerjee."
            />
            <section className="bg-white dark:bg-gray-900/40 py-20 border-t border-gray-200 dark:border-gray-700/30">
                <div className="container mx-auto px-4">
                    <h2
                        className="text-3xl font-bold mb-12 text-slate-900 dark:text-white text-center"
                        data-i18n="aboutUs.management.title"
                    >
                        Our Management Team
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        {managementStaff.map((staff, index) => (
                            <Card
                                key={index}
                                className="overflow-hidden transition-all duration-300 hover:shadow-lg border bg-white dark:bg-gray-800/70 py-0"
                            >
                                <div className="relative h-80 w-full">
                                    <Image
                                        src={getBasePath(staff.image)}
                                        alt={staff.name}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                    />
                                </div>
                                <CardHeader className="pb-2">
                                    <CardTitle
                                        className="text-slate-900 dark:text-white"
                                        data-i18n-key="aboutUs.management.staffName"
                                        data-i18n-params={`{"name":"${staff.name}"}`}
                                    >
                                        {staff.name}
                                    </CardTitle>
                                    <CardDescription
                                        className="text-slate-600 dark:text-slate-400"
                                        data-i18n-key="aboutUs.management.staffRole"
                                        data-i18n-params={`{"role":"${staff.designation}"}`}
                                    >
                                        {staff.designation}
                                    </CardDescription>
                                    <CardDescription
                                        className="text-slate-600 dark:text-slate-400"
                                        data-i18n-key="aboutUs.management.staffRole"
                                        data-i18n-params={`{"role":"${staff.bio}"}`}
                                    >
                                        {staff.bio}
                                    </CardDescription>
                                </CardHeader>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
            <section className="bg-gray-100 dark:bg-gray-800/30 py-20 border-y border-gray-200 dark:border-gray-700/30">
                <div className="overflow-x-auto mx-20 rounded-xl">
                    <table className="min-w-full table-auto bg-white dark:bg-gray-900/40 shadow-lg">
                        <thead>
                            <tr className="border-b">
                                <th></th>
                                <th className="pl-3 pr-6 py-3 text-left text-sm font-semibold text-slate-600 dark:text-slate-400">
                                    <div
                                        className="flex items-center cursor-pointer"
                                        onClick={handleArrowClick}
                                    >
                                        Name
                                        <ChevronUp
                                            className="ml-2 transition-transform duration-300"
                                            style={{
                                                transform: isSorted
                                                    ? "rotate(0deg)"
                                                    : "rotate(180deg)",
                                            }}
                                        />
                                    </div>
                                </th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-slate-600 dark:text-slate-400">
                                    Speciality
                                </th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-slate-600 dark:text-slate-400">
                                    Working Days
                                </th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-slate-600 dark:text-slate-400">
                                    Timing
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {doctorsData.map((doctor) => (
                                <tr
                                    key={doctor.id}
                                    className="border-t hover:bg-gray-200 dark:hover:bg-gray-800"
                                >
                                    <td className="px-1 py-4 flex items-center justify-center">
                                        <Image
                                            src={getBasePath(doctor.image)}
                                            alt={doctor.name}
                                            className="w-10 h-10 rounded-[10px]"
                                            width={10}
                                            height={10}
                                        />
                                    </td>
                                    <td className="pl-3 pr-6 py-4 text-sm font-medium text-slate-900 dark:text-white">
                                        {doctor.name}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-slate-900 dark:text-white">
                                        {doctor.speciality}
                                    </td>
                                    <td className="px-6 py-4 text-sm">
                                        <div className="flex gap-1">
                                            {doctor.working_days.map(
                                                (day, index) =>
                                                    day === 1 ? (
                                                        <span
                                                            key={index}
                                                            className="px-2 py-1 text-xs bg-blue-600 dark:bg-blue-900/60 text-blue-50 dark:text-blue-400 rounded-full"
                                                        >
                                                            {
                                                                workingDayLabels[
                                                                    index
                                                                ]
                                                            }
                                                        </span>
                                                    ) : (
                                                        <span
                                                            key={index}
                                                            className="px-2 py-1 text-xs bg-gray-300 dark:bg-gray-800 text-gray-600 dark:text-gray-500 rounded-full"
                                                        >
                                                            {
                                                                workingDayLabels[
                                                                    index
                                                                ]
                                                            }
                                                        </span>
                                                    )
                                            )}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-slate-900 dark:text-white">
                                        {doctor.timing}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* CTA Section - Third content section (white) */}
            <section className="bg-white dark:bg-gray-900/40 py-20 border-t border-gray-200 dark:border-gray-700/30">
                <div className="container mx-auto text-center">
                    <h2
                        className="text-2xl font-bold mb-6 text-slate-900 dark:text-white"
                        data-i18n="specialities.cta.title"
                    >
                        Looking for Expert Care?
                    </h2>
                    <p
                        className="text-lg text-slate-700 dark:text-slate-300 mb-10 max-w-3xl mx-auto"
                        data-i18n="specialities.cta.description"
                    >
                        Our dedicated team of experienced doctors is here to
                        offer specialized treatments and personalized care to
                        ensure the best health outcomes for you.
                    </p>
                    <div className="flex justify-center gap-6 flex-wrap">
                        <Link href="/contact-us">
                            <Button
                                variant="outline"
                                className="border-gray-400 text-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800/60 font-medium cursor-pointer"
                            >
                                Contact Us
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}

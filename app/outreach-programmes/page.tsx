"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, MapPinIcon, UsersIcon, HeartIcon } from "lucide-react";
import PageTitle from "@/components/PageTitle";
import Link from "next/link";

// Sample data for past outreach programmes
const pastProgrammes = [
    {
        title: "Rural Health Camp - Raypur Village",
        date: "March 15-17, 2023",
        location: "Raypur Village, District East",
        description:
            "A three-day health camp providing free consultations, basic health screenings, and medicines to over 500 villagers. Services included general medicine, pediatrics, gynecology, and eye care.",
        beneficiaries: "527 patients",
        services: [
            "General Health Checkups",
            "Pediatric Care",
            "Gynecology Services",
            "Eye Examinations",
            "Free Medications",
        ],
        image: "/images/outreach/rural-health-camp.jpg", // Placeholder image path
    },
    {
        title: "School Health Program - City Public School",
        date: "January 10, 2023",
        location: "City Public School, Downtown",
        description:
            "A comprehensive health education and screening program for students. Our team conducted health checkups, dental examinations, and health education sessions on nutrition, hygiene, and preventive care.",
        beneficiaries: "320 students",
        services: [
            "Health Screenings",
            "Dental Checkups",
            "Nutrition Education",
            "Personal Hygiene Workshops",
        ],
        image: "/images/outreach/school-health-program.jpg", // Placeholder image path
    },
    {
        title: "Senior Citizen Wellness Day",
        date: "December 5, 2022",
        location: "Community Center, Westside",
        description:
            "A special health program dedicated to the elderly, offering free consultations in geriatric care, orthopedics, cardiology, and physiotherapy. The event also included workshops on healthy aging and chronic disease management.",
        beneficiaries: "175 senior citizens",
        services: [
            "Geriatric Consultations",
            "Cardiovascular Screenings",
            "Orthopedic Assessments",
            "Physiotherapy Sessions",
            "Medication Reviews",
        ],
        image: "/images/outreach/senior-wellness.jpg", // Placeholder image path
    },
];

// Types of outreach programmes the hospital conducts
const programmeTypes = [
    {
        title: "Medical Camps",
        description:
            "Free medical camps in underserved communities providing essential healthcare services, consultations, and medications. These camps bring medical expertise directly to those who need it most.",
        services: [
            "General Health Checkups",
            "Specialist Consultations",
            "Basic Diagnostic Tests",
            "Medication Distribution",
            "Health Education",
        ],
        icon: (
            <HeartIcon className="w-12 h-12 text-blue-600 dark:text-blue-400" />
        ),
    },
    {
        title: "Health Education Programs",
        description:
            "Educational initiatives to raise awareness about various health issues, preventive measures, and healthy lifestyle choices. These programs are conducted at schools, community centers, and public venues.",
        services: [
            "Disease Prevention Workshops",
            "Nutrition Education",
            "Maternal Health Sessions",
            "Adolescent Health Awareness",
            "Hygiene and Sanitation",
        ],
        icon: (
            <UsersIcon className="w-12 h-12 text-blue-600 dark:text-blue-400" />
        ),
    },
    {
        title: "Specialized Screening Camps",
        description:
            "Targeted screening programs for specific health conditions to enable early detection and treatment. These include diabetes screening, cardiac health assessment, cancer screening, and more.",
        services: [
            "Diabetes Screening",
            "Cardiovascular Risk Assessment",
            "Cancer Screening",
            "Vision and Eye Health",
            "Dental Checkups",
        ],
        icon: (
            <MapPinIcon className="w-12 h-12 text-blue-600 dark:text-blue-400" />
        ),
    },
    {
        title: "Corporate Wellness Programs",
        description:
            "Comprehensive health programs for corporate organizations, designed to promote employee health and well-being. These include health screenings, fitness programs, and stress management workshops.",
        services: [
            "Executive Health Checkups",
            "Ergonomic Assessments",
            "Mental Health Workshops",
            "Fitness Programs",
            "Work-Life Balance Seminars",
        ],
        icon: (
            <CalendarIcon className="w-12 h-12 text-blue-600 dark:text-blue-400" />
        ),
    },
];

export default function OutreachProgrammes() {
    // Function to render service badges
    const renderServiceBadges = (services: string[]) => {
        return services.map((service, index) => (
            <Badge key={index} variant="secondary" className="mr-2 mb-2">
                {service}
            </Badge>
        ));
    };

    return (
        <>
            <PageTitle
                title="Outreach Programmes"
                description="At SADH Care Hospital, we are committed to extending healthcare beyond our facilities through various community outreach programmes. We believe that healthcare is a fundamental right and work tirelessly to reach underserved populations."
            />

            {/* Types of Outreach Programmes - First content section (white) */}
            <section className="bg-white dark:bg-gray-900/40 py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12 text-slate-900 dark:text-white">
                        Our Outreach Initiatives
                    </h2>
                    <div className="grid grid-cols-1 gap-8 max-w-5xl mx-auto">
                        {programmeTypes.map((programme, index) => (
                            <Card
                                key={index}
                                className="w-full border shadow-sm hover:shadow-md transition-shadow duration-300 bg-white dark:bg-gray-800/70"
                            >
                                <CardHeader className="flex flex-col md:flex-row items-start md:items-center gap-4 pb-2">
                                    <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                                        {programme.icon}
                                    </div>
                                    <div>
                                        <CardTitle className="text-xl font-bold text-slate-900 dark:text-white">
                                            {programme.title}
                                        </CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent className="pt-2">
                                    <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                                        {programme.description}
                                    </p>
                                    <div className="mt-4">
                                        <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-2">
                                            Services Offered:
                                        </h4>
                                        <div className="flex flex-wrap">
                                            {renderServiceBadges(
                                                programme.services
                                            )}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Past Outreach Programmes - Second content section (light gray) */}
            <section className="bg-gray-100 dark:bg-gray-800/30 py-20 border-y border-gray-200 dark:border-gray-700/30">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12 text-slate-900 dark:text-white">
                        Past Outreach Programmes
                    </h2>
                    <div className="grid grid-cols-1 gap-8 max-w-5xl mx-auto">
                        {pastProgrammes.map((programme, index) => (
                            <Card
                                key={index}
                                className="w-full border shadow-sm hover:shadow-md transition-shadow duration-300 bg-white dark:bg-gray-800/70"
                            >
                                <CardHeader className="pb-2">
                                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2 gap-2">
                                        <CardTitle className="text-xl font-bold text-slate-900 dark:text-white">
                                            {programme.title}
                                        </CardTitle>
                                        <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                                            <CalendarIcon className="w-4 h-4" />
                                            <span>{programme.date}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-2">
                                        <MapPinIcon className="w-4 h-4" />
                                        <span>{programme.location}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 font-medium">
                                        <UsersIcon className="w-4 h-4" />
                                        <span>
                                            Beneficiaries:{" "}
                                            {programme.beneficiaries}
                                        </span>
                                    </div>
                                </CardHeader>
                                <CardContent className="pt-2">
                                    <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                                        {programme.description}
                                    </p>
                                    <div className="mt-4">
                                        <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-2">
                                            Services Provided:
                                        </h4>
                                        <div className="flex flex-wrap">
                                            {renderServiceBadges(
                                                programme.services
                                            )}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Get Involved - Third content section (white) */}
            <section className="bg-white dark:bg-gray-900/40 py-20">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">
                        Get Involved
                    </h2>
                    <p className="text-lg text-slate-700 dark:text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                        We welcome collaboration from individuals,
                        organizations, and corporations who share our vision of
                        accessible healthcare for all. If you would like to
                        partner with us, volunteer, or support our outreach
                        programmes, please get in touch.
                    </p>
                    <div className="flex justify-center gap-6 flex-wrap">
                        <Button variant="default" className="font-medium">
                            Become a Volunteer
                        </Button>
                        <Link href="/donations">
                            <Button
                                variant="outline"
                                className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-900/30 font-medium"
                            >
                                Support Our Initiatives
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}

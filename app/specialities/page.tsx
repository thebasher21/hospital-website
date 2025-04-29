"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import PageTitle from "@/components/PageTitle";
import { useState } from "react";
import Link from "next/link";

export default function Specialities() {
    // List of specialties with their names, icons, and descriptions
    const specialties = [
        {
            name: "General Medicine",
            icon: "💊",
            description:
                "Comprehensive care for a wide range of adult illnesses, chronic disease management, and preventive healthcare.",
            treatments: [
                "Piles",
                "Anal Fissure",
                "Anal Fistula",
                "Perianal Abscess",
                "Pilonidal Sinus",
            ],
        },
        {
            name: "General and Laparoscopic Surgery",
            icon: "🛠️",
            description:
                "Performs various surgical procedures, including minimally invasive laparoscopic techniques for internal medical conditions.",
            treatments: [
                "Gall Stone Surgery",
                "Hernia",
                "Appendicitis",
                "Rectal Prolapse",
            ],
        },
        {
            name: "Gynaecology and Obstetrics",
            icon: "👩‍⚕️",
            description:
                "Specializes in women's reproductive health, including pregnancy care, childbirth, and treating reproductive system disorders.",
            treatments: [
                "Hysterectomy",
                "Ovarian Cyst",
                "Uterine Fibroids",
                "Infertility",
                "IVF",
            ],
        },
        {
            name: "Paediatrics",
            icon: "👶",
            description:
                "Focused on the health of infants, children, and adolescents, addressing diseases, development, and overall well-being.",
            treatments: [
                "Pediatric Care",
                "Vaccinations",
                "Childhood Illnesses",
            ],
        },
        {
            name: "Orthopedics",
            icon: "🦴",
            description:
                "Deals with musculoskeletal system disorders, treating fractures, joint issues, and conditions affecting bones, muscles, and tendons.",
            treatments: [
                "ACL Tear",
                "PCL Tear",
                "Knee Pain",
                "Hip Pain",
                "Fractures",
            ],
        },
        {
            name: "ENT",
            icon: "👂",
            description:
                "Focuses on diagnosing and treating conditions related to the ear, nose, and throat, including hearing loss and respiratory issues.",
            treatments: [
                "Tonsillectomy",
                "Adenoidectomy",
                "Septoplasty",
                "Tympanoplasty",
            ],
        },
        {
            name: "Urology",
            icon: "💧",
            description:
                "Specializes in urinary tract diseases and male reproductive health, treating conditions like kidney stones, infections, and cancers.",
            treatments: [
                "Kidney Stones",
                "Urine Incontinence",
                "Prostate Cancer",
                "Hydrocele",
            ],
        },
        {
            name: "Non-interventional Cardiology",
            icon: "❤️",
            description:
                "Involves the diagnosis and management of heart diseases using medications and lifestyle changes, without the need for surgery.",
            treatments: [
                "Pacemaker Implantation",
                "Heart Valve Disease",
                "Angiography",
            ],
        },
        {
            name: "Pain Management",
            icon: "🩹",
            description:
                "Focused on alleviating chronic pain through therapies like medications, physical therapy, and interventional treatments.",
            treatments: ["Pain Relief Therapies", "Chronic Pain Management"],
        },
        {
            name: "Dental Surgery",
            icon: "🦷",
            description:
                "Involves surgical procedures for the mouth, teeth, gums, and jaw, including extractions and corrective surgeries.",
            treatments: [
                "Dental Extractions",
                "Tooth Implantation",
                "Jaw Surgery",
            ],
        },
        {
            name: "Nephrology",
            icon: "🩺",
            description:
                "Specializes in diagnosing and treating kidney diseases, including kidney failure, hypertension, and electrolyte imbalances.",
            treatments: [
                "Kidney Transplant",
                "Dialysis",
                "Chronic Kidney Disease Management",
            ],
        },
    ];

    const [activeCard, setActiveCard] = useState(-1);

    const handleCardClick = (index: number) => {
        setActiveCard(activeCard === index ? -1 : index);
    };

    return (
        <>
            <PageTitle
                title="Our Specialities"
                description="Our hospital offers comprehensive medical care across a wide range of specialties. 
                   Our team of experienced specialists is committed to providing the highest quality healthcare services."
            />

            {/* Specialties Grid - First content section (white) */}
            <section className="bg-white dark:bg-gray-900/40 py-20">
                <div className="container mx-auto px-4">
                    <h2
                        className="text-3xl font-bold text-center mb-12 text-slate-900 dark:text-white"
                        data-i18n="specialities.section.title"
                    >
                        Specialties
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {specialties.map((specialty, index) => (
                            <Card
                                key={index}
                                className="transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-gray-100 dark:hover:bg-gray-700 border bg-white dark:bg-gray-800/70 cursor-pointer"
                                onClick={() => handleCardClick(index)}
                            >
                                <CardHeader>
                                    <div className="flex items-center mb-2">
                                        <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mr-4 text-2xl">
                                            {specialty.icon}
                                        </div>
                                        <CardTitle
                                            className="text-xl text-gray-700 dark:text-gray-300"
                                            data-i18n-key="specialities.specialty.name"
                                            data-i18n-params={`{"name":"${specialty.name}"}`}
                                        >
                                            {specialty.name}
                                        </CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="transition-all duration-300">
                                        {activeCard === index ? (
                                            <ul className="flex flex-wrap gap-2">
                                                {specialty.treatments.map(
                                                    (treatment, index) => (
                                                        <li
                                                            key={index}
                                                            className="bg-blue-600 dark:bg-blue-400 text-white px-4 py-1 rounded-full text-sm"
                                                        >
                                                            {treatment}
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        ) : (
                                            <p
                                                className="text-slate-600 dark:text-slate-300 leading-relaxed"
                                                data-i18n-key="specialities.specialty.description"
                                                data-i18n-params={`{"description":"${specialty.description.replace(
                                                    /"/g,
                                                    '\\"'
                                                )}"}`}
                                            >
                                                {specialty.description}
                                            </p>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section - Second content section (light gray) */}
            <section className="bg-gray-100 dark:bg-gray-800/30 py-20 border-y border-gray-200 dark:border-gray-700/30">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12 text-slate-900 dark:text-white">
                        Our Specialist Team
                    </h2>
                    <div className="text-center max-w-3xl mx-auto bg-white dark:bg-gray-800/70 p-8 rounded-lg shadow-sm border">
                        <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
                            Our team includes world-class specialists with
                            extensive experience and expertise across various
                            medical disciplines. Each specialist is committed to
                            providing compassionate, patient-centered care using
                            the latest medical technologies and treatments.
                        </p>
                        <Button variant="default" className="font-medium">
                            Meet Our Doctors
                        </Button>
                    </div>
                </div>
            </section>

            {/* CTA Section - Third content section (white) */}
            <section className="bg-white dark:bg-gray-900/40 py-20 border-t border-gray-200 dark:border-gray-700/30">
                <div className="container mx-auto text-center">
                    <h2
                        className="text-2xl font-bold mb-6 text-slate-900 dark:text-white"
                        data-i18n="specialities.cta.title"
                    >
                        Need Medical Consultation?
                    </h2>
                    <p
                        className="text-lg text-slate-700 dark:text-slate-300 mb-10 max-w-3xl mx-auto"
                        data-i18n="specialities.cta.description"
                    >
                        Our specialists are available for consultations. Contact
                        us to schedule a consultation with the appropriate
                        department.
                    </p>
                    <div className="flex justify-center gap-6 flex-wrap">
                        <Link href="/contact-us">
                            <Button
                                variant="outline"
                                className="border-gray-400 text-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800/60 font-medium"
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

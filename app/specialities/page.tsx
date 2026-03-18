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
            name: "General Medicine and Lifestyle Diseases",
            icon: "💊",
            description:
                "Comprehensive care for a wide range of adult illnesses, chronic disease management, and preventive healthcare.",
            treatments: [
                "All general ailments such as Typhoid, Jaundice, TB, etc",
                "All seasonal ailments such as Dengue, Gastroenteritis, etc",
                "Life style diseases such as Diabetes, Hypertension, etc",
                "Thyroid",
                "Anemia",
                "Obesity",
                "General weakness",
                "Other medical conditions",
            ],
        },
        {
            name: "General Surgery",
            icon: "🩺",
            description:
                "Surgical treatment for a wide range of conditions affecting the abdomen, digestive system, soft tissues, etc.",
            treatments: [
                "Open Cholecystectomy",
                "Haemorrhoids",
                "Circumcision",
                "Hernioplasty-Open",
                "Herniorrhaphy",
                "Breast Biopsy, Open Lumpectomy",
                "Colon Resection",
                "Laparotomy",
                "Varicose veins",
                "Ambulatory phlebotomy etc.",
            ],
        },
        {
            name: "Laparoscopic Surgery",
            icon: "🛠️",
            description:
                "Minimally invasive surgery using small incisions and a camera to perform procedures resulting in early recovery.",
            treatments: [
                "Laparoscopic Cholecystectomy (Gall Bladder)",
                "Laparoscopic Hernioplasty and Herniorrhaphy",
                "Laproscopic Tubectomy",
                "Laproscopic Oophorectomy",
                "Laparoscopic Appendectomy",
                "Laparoscopic colon Resection",
                "Total Laparoscopic Hysterectomy",
                "Diagnostic Laparoscopy",
            ],
        },
        {
            name: "Gynaecology and Obstetrics",
            icon: "👩‍⚕️",
            description:
                "Specializes in women's reproductive health, including pre, ante and post natal care, childbirth, and treating reproductive system disorders.",
            treatments: [
                "High risk pregnancies",
                "Late pregnancies",
                "Dilation & Curettage (D&C)",
                "Tubectomy",
                "Oophorectomy",
                "Colposcopy and Hysteroscopy",
                "Hysterectomy",
                "Ovarian cysts, Malignancies",
                "Fallopian tube surgery",
                "Removal of fibroids",
                "MTP"
            ],
        },
        {
            name: "Paediatrics",
            icon: "👶",
            description:
                "Focused on the health of infants, children, and adolescents, addressing diseases, development, and overall well-being.",
            treatments: [
                "Emergency",
                "New Born Baby Resuscitation",
                "Level-1 NICU",
                "Paediatric IPD",
                "Vaccination",
                "Nutrition and Growth Monitoring",
            ],
        },
        {
            name: "Orthopedics",
            icon: "🦴",
            description:
                "Deals with musculoskeletal system disorders, treating fractures, joint issues, and conditions affecting bones, muscles, and tendons.",
            treatments: [
                "Foot & ankle Surgery",
                "Hand, Shoulder, Elbow Surgery",
                "Arthritis diagnosis & Treatment ",
                "Arthroscopic surgeries",
                "Joint replacement surgeries such as Total Knee and Hip Replacement",
                "Limb lengthening surgeries",
                "Tendon transfer and repair surgeries",
                "Surgical grafts",
                "All types of fracture management"
            ],
        },
        {
            name: "ENT",
            icon: "👂",
            description:
                "Focuses on diagnosing and treating conditions related to the ear, nose, and throat, including hearing loss and respiratory issues.",
            treatments: [
                "Tonsillectomy, Adenoidectomy",
                "Tympanoplasty",
                "Functional Endoscopic Sinus surgery (FESS)",
                "Snoring/sleep apnoea surgery",
                "Corrective breathing surgery",
                "Myringotomy with Tube Insertion",
                "Nasal Surgery including Septoplasty",
                "Mastoidectomy"
            ],
        },
        {
            name: "Urology",
            icon: "💧",
            description:
                "Specializes in urinary tract diseases and male reproductive health, treating conditions like kidney stones, infections, etc.",
            treatments: [
                "Renal (kidney) surgery (PCNL, RIRS)",
                "Ureter surgery (URS)",
                "Bladder surgery",
                "Pelvic lymph node dissection",
                "Prostatic surgery (TURP, HoLEP)",
                "Testicular (scrotal) & penile surgery",
                "Urethral surgery etc.",
            ],
        },
        {
            name: "Non-interventional Cardiology",
            icon: "❤️",
            description:
                "Involves the diagnosis, monitoring, prevention and risk management of heart diseases using medications and lifestyle changes, without the need for surgery.",
            treatments: [
                "2-D Echo",
                "ECG",
                "Holter Monitor",
                "Hypertension Management",
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
                "Involves diagnosis and treatment for the mouth, teeth, gums and jaws including surgical extractions, etc.",
                treatments: [
                "General and Preventive Dentistry",
                "Endodontics (RCT)",
                "Orthodontics (Braces)",
                "Prosthodontics (Crown)",
                "Periodontics (scaling & Polishing)",
                "Paediatric dentistry",
                "Oral & Maxillofacial surgery",
                "Implantology",
            ],
        },
        {
            name: "Nephrology",
            icon: "🦠",
            description:
                "Specializes in diagnosing and treating kidney diseases, including CKD, AKI, Electrolyte imbalances etc.",
                treatments: [
                "Dialysis",
                "Acute Kidney Injury Management",
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
                description="Our hospital offers comprehensive medical care across a wide range of specialities. 
                   Our team of experienced specialists is committed to provide the highest quality healthcare services."
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
                                className="transition-all duration-300 transform hover:scale-105 hover:shadow-xl border bg-white dark:bg-gray-800/70 cursor-pointer"
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
                                                            className="bg-blue-500 dark:bg-blue-400 text-white px-4 py-1 rounded-full text-sm"
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
                                                data-i18n-params={JSON.stringify({
                                                    description: specialty.description,
                                                })}
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
                        <Link href="/doctors">
                            <Button
                                variant="default"
                                className="font-medium cursor-pointer"
                            >
                                Meet Our Doctors
                            </Button>
                        </Link>
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

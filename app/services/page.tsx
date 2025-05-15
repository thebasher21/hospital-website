import { Button } from "@/components/ui/button";
import PageTitle from "@/components/PageTitle";
import Link from "next/link";
import {
    Ambulance,
    Baby,
    Bone,
    Dna,
    Ear,
    Heart,
    HousePlug,
    Microscope,
    Pill,
    PillBottle,
    Scissors,
    SquareActivity,
} from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { getBasePath } from "@/lib/utils";

const services = [
    {
        title: "Emergency Care",
        description:
            "24x7 emergency services with operation theatre, labour room, and neonatal ICU Level-1 support.",
        icon: (
            <Ambulance className="w-9 h-9 text-blue-600 dark:text-blue-400" />
        ),
    },
    {
        title: "General and Laparoscopic Surgery",
        description:
            "Advanced surgical care including minimally invasive laparoscopic procedures across multiple specialties.",
        icon: <Scissors className="w-9 h-9 text-blue-600 dark:text-blue-400" />,
    },
    {
        title: "Obstetrics and Gynaecology",
        description:
            "Comprehensive women's health services including maternity care, delivery, and gynecological surgeries.",
        icon: <Dna className="w-9 h-9 text-blue-600 dark:text-blue-400" />,
    },
    {
        title: "Orthopaedics",
        description:
            "Expert care for fractures, joint issues, and orthopedic surgeries ensuring full musculoskeletal recovery.",
        icon: <Bone className="w-9 h-9 text-blue-600 dark:text-blue-400" />,
    },
    {
        title: "Paediatrics",
        description:
            "24x7 specialized care for newborns, infants, and children in a safe, nurturing environment.",
        icon: <Baby className="w-9 h-9 text-blue-600 dark:text-blue-400" />,
    },
    {
        title: "Urology",
        description:
            "Dedicated services for urinary tract disorders and male reproductive health surgeries.",
        icon: (
            <PillBottle className="w-9 h-9 text-blue-600 dark:text-blue-400" />
        ),
    },
    {
        title: "ENT Surgeries",
        description:
            "Comprehensive ear, nose, and throat surgeries for hearing, breathing, and throat-related issues.",
        icon: <Ear className="w-9 h-9 text-blue-600 dark:text-blue-400" />,
    },
    {
        title: "Oral & Maxillofacial Surgery",
        description:
            "Specialized surgical care for facial trauma, jaw disorders, and oral reconstructive procedures.",
        icon: (
            <SquareActivity className="w-9 h-9 text-blue-600 dark:text-blue-400" />
        ),
    },
    {
        title: "Diagnostics and Imaging",
        description:
            "Advanced diagnostic facilities including USG, X-ray, C-arm radiography, ECG, and pathology lab services.",
        icon: (
            <Microscope className="w-9 h-9 text-blue-600 dark:text-blue-400" />
        ),
    },
    {
        title: "Support Facilities",
        description:
            "Essential support services including 24x7 ambulance, pharmacy, dialysis, and laundry facilities.",
        icon: (
            <HousePlug className="w-9 h-9 text-blue-600 dark:text-blue-400" />
        ),
    },
    {
        title: "Preventive Health Packages",
        description:
            "Customized health packages based on age, gender, and disease-specific needs for early diagnosis.",
        icon: <Pill className="w-9 h-9 text-blue-600 dark:text-blue-400" />,
    },
    {
        title: "Free OPD of All Doctors",
        description:
            "Free outpatient consultations available with all specialists including Obstetrics & Gynaecology, Paediatrics, and more.",
        icon: <Heart className="w-9 h-9 text-blue-600 dark:text-blue-400" />,
    },
];

const amenities = [
    {
        title: "Cashless Insurance",
        icon: "/images/services/cashless_insurance.png",
    },
    {
        title: "OPD Available",
        icon: "/images/services/opd_available.png",
    },
    {
        title: "OT Available",
        icon: "/images/services/ot_available.png",
    },
    {
        title: "Radiology",
        icon: "/images/services/radiology.png",
    },
];

const insurances = [
    {
        title: "Aditya Birla Health Insurance",
        icon: "/images/insurance/aditya_birla_health_insurance.png",
        link: "https://www.adityabirlacapital.com/healthinsurance/homepage",
    },
    {
        title: "Cholamandalam MS Health Insurance",
        icon: "/images/insurance/cholamandalam_ms_health_insurance.png",
        link: "https://www.cholainsurance.com/health-insurance",
    },
    {
        title: "Ericson",
        icon: "/images/insurance/ericson_insurance.png",
        link: "https://www.ericsontpa.com/",
    },
    {
        title: "Family Health Plan Insurance",
        icon: "/images/insurance/fhpl_health_insurance.png",
        link: "https://www.fhpl.net/",
    },
    {
        title: "Health Insurance (HI)",
        icon: "/images/insurance/hi_insurance.png",
        link: "https://hitpa.co.in/",
    },
    {
        title: "HDFC ERGO Health Insurance",
        icon: "/images/insurance/hdfc_ergo.png",
        link: "https://www.hdfcergo.com/",
    },
    {
        title: "ICICI Lombard Health Insurance",
        icon: "/images/insurance/icici_lombard.png",
        link: "https://www.icicilombard.com/health-insurance",
    },
    {
        title: "Medi Assist TPA",
        icon: "/images/insurance/mediassist_insurance.png",
        link: "https://mediassisttpa.in/",
    },
    {
        title: "Niva Bupa",
        icon: "/images/insurance/niva_bupa_insurance.png",
        link: "https://www.nivabupa.com/",
    },
    {
        title: "Paramount TPA",
        icon: "/images/insurance/paramount_insurance.png",
        link: "https://www.paramounttpa.com/",
    },
    {
        title: "Star Health Insurance",
        icon: "/images/insurance/star_health_insurance.png",
        link: "https://www.starhealth.in/",
    },
    {
        title: "TATA AIG Health Insurance",
        icon: "/images/insurance/tata_aig_health_insurance.png",
        link: "https://www.tataaig.com/health-insurance",
    },
    {
        title: "Universal Sompo Health Insurance",
        icon: "/images/insurance/universal_sompo.png",
        link: "https://www.universalsompo.com/health-insurance/",
    },
];

export default function ServicesPage() {
    return (
        <>
            <PageTitle
                title="Our Services"
                description="At SADH Care Hospital, we offer a comprehensive range of medical services 
                   delivered by experienced healthcare professionals using state-of-the-art 
                   technology and facilities."
            />

            {/* Services Grid - First content section (white) */}
            <section className="bg-white dark:bg-gray-900/40 py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12 text-slate-900 dark:text-white">
                        Medical Services
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service) => (
                            <div key={service.title} className="flex">
                                <Card
                                    className={
                                        "h-full transition-all duration-300 hover:shadow-lg h-full flex-1 transition-all duration-300 hover:shadow-lg bg-white dark:bg-gray-800/70 border"
                                    }
                                >
                                    <CardHeader>
                                        <div className="flex items-center mb-2">
                                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                                                {service.icon}
                                            </div>
                                            <h3 className="text-xl text-primary font-medium">
                                                {service.title}
                                            </h3>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground">
                                            {service.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Treatment Process - Second content section (light gray) */}
            <section className="bg-gray-100 dark:bg-gray-800/30 py-20 border-y border-gray-200 dark:border-gray-700/30">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12 text-slate-900 dark:text-white">
                        Our Treatment Process
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {/* Step 1 */}
                        <div className="text-center p-6 bg-white dark:bg-gray-800/70 rounded-lg shadow-sm border">
                            <div className="bg-gray-100 dark:bg-gray-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-gray-700 dark:text-gray-300 text-2xl font-bold">
                                    1
                                </span>
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">
                                Initial Consultation
                            </h3>
                            <p className="text-slate-600 dark:text-slate-300">
                                Meet with our specialists for a thorough
                                assessment of your health concerns.
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div className="text-center p-6 bg-white dark:bg-gray-800/70 rounded-lg shadow-sm border">
                            <div className="bg-gray-100 dark:bg-gray-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-gray-700 dark:text-gray-300 text-2xl font-bold">
                                    2
                                </span>
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">
                                Diagnosis & Planning
                            </h3>
                            <p className="text-slate-600 dark:text-slate-300">
                                Receive accurate diagnosis and a detailed
                                treatment plan tailored to your needs.
                            </p>
                        </div>

                        {/* Step 3 */}
                        <div className="text-center p-6 bg-white dark:bg-gray-800/70 rounded-lg shadow-sm border">
                            <div className="bg-gray-100 dark:bg-gray-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-gray-700 dark:text-gray-300 text-2xl font-bold">
                                    3
                                </span>
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">
                                Treatment & Follow-up
                            </h3>
                            <p className="text-slate-600 dark:text-slate-300">
                                Undergo specialized treatment with continuous
                                monitoring and follow-up care.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Amenities - Third content section (white) */}
            <section className="bg-white dark:bg-gray-900/40 py-20 border-t border-gray-200 dark:border-gray-700/30">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-12 text-slate-900 dark:text-white">
                        Amenities
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-5xl mx-auto">
                        {amenities.map((amenity, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-flex-start bg-white dark:bg-gray-800/70 p-4 rounded-lg shadow-sm border"
                            >
                                <div>
                                    <img
                                        alt=""
                                        loading="lazy"
                                        width="45"
                                        decoding="async"
                                        data-nimg="1"
                                        src={getBasePath(amenity.icon)}
                                    />
                                </div>
                                <p className="text-xl font-semibold text-slate-900 dark:text-white mx-4">
                                    {amenity.title}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Insurance Section - Fourth content section (white) */}
            <section className="bg-gray-100 dark:bg-gray-800/30 py-20 border-t border-gray-200 dark:border-gray-700/30">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-12 text-slate-900 dark:text-white">
                        Insurances Accepted
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-6xl mx-auto">
                        {insurances.map((insurance, index) => (
                            <Link key={index} href={insurance.link}>
                                <div className="flex items-center justify-flex-start bg-white dark:bg-transparent p-4 rounded-lg shadow-sm hover:underline cursor-pointer">
                                    <div>
                                        <img
                                            alt=""
                                            loading="lazy"
                                            width="45"
                                            decoding="async"
                                            data-nimg="1"
                                            src={getBasePath(insurance.icon)}
                                        />
                                    </div>
                                    <p className="text-xl font-semibold text-slate-900 dark:text-white mx-4">
                                        {insurance.title}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section - Fifth content section (white) */}
            <section className="bg-white dark:bg-gray-900/40 py-20 border-t border-gray-200 dark:border-gray-700/30">
                <div className="container mx-auto text-center">
                    <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">
                        Need a Specialized Service?
                    </h2>
                    <p className="text-lg text-slate-700 dark:text-slate-300 mb-10 max-w-3xl mx-auto">
                        Our team of medical professionals is ready to provide
                        personalized care tailored to your specific health
                        needs.
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

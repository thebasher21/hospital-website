import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardClickHandler,
} from "@/components/ui/card";
import {
    getTranslations,
    getTranslationValue,
} from "@/lib/server/translations";
import { getBasePath } from "@/lib/utils";
import WelcomeModal from "@/components/WelcomeModal";
import HeroCarousel from "@/components/HeroCarousel";
import GalleryCarousel from "@/components/GalleryCarousel";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import Link from "next/link";
import StatisticsComponent from "@/components/Statistics";

// Define the type for carousel slides
interface CarouselSlide {
    title: string;
    subtitle: string;
    description: string;
    image: string;
}

interface Testimonial {
    quote: string;
    name: string;
    role: string;
}

export default async function Home() {
    // Fetch translations server-side
    const { translations } = await getTranslations();

    // Extract carousel slides from translations
    const carouselSlides =
        (getTranslationValue(
            translations,
            "hero.carousel.slides"
        ) as CarouselSlide[]) || [];

    // Process slides to ensure image paths are correct
    const processedSlides = carouselSlides.map((slide) => ({
        ...slide,
        image: slide.image.startsWith("http")
            ? slide.image
            : getBasePath(slide.image),
    }));

    // Prepare testimonials
    const testimonials: Testimonial[] = [
        {
            quote:
                (getTranslationValue(
                    translations,
                    "testimonials.testimonial1.quote"
                ) as string) ||
                "The care I received at SADH Care Hospital was exceptional. The doctors were knowledgeable and compassionate, and the staff went above and beyond to ensure my comfort.",
            name:
                (getTranslationValue(
                    translations,
                    "testimonials.testimonial1.name"
                ) as string) || "John Doe",
            role:
                (getTranslationValue(
                    translations,
                    "testimonials.testimonial1.role"
                ) as string) || "Cardiac Patient",
        },
        {
            quote:
                (getTranslationValue(
                    translations,
                    "testimonials.testimonial2.quote"
                ) as string) ||
                "I was impressed by the modern facilities and technology at SADH Care Hospital. The entire process from admission to discharge was smooth and well-coordinated.",
            name:
                (getTranslationValue(
                    translations,
                    "testimonials.testimonial2.name"
                ) as string) || "Jane Smith",
            role:
                (getTranslationValue(
                    translations,
                    "testimonials.testimonial2.role"
                ) as string) || "Maternity Patient",
        },
        {
            quote: "The staff at SADH Care Hospital treated my family with respect and dignity. The doctors explained everything clearly and made sure we understood our options.",
            name: "Robert Johnson",
            role: "Family Member",
        },
        {
            quote: "I've been visiting SADH Care Hospital for regular check-ups for years. The consistent quality of care and attention to detail makes me feel safe and valued as a patient.",
            name: "Maria Garcia",
            role: "Regular Patient",
        },
    ];

    // Gallery image labels
    const galleryImageLabels = Array.from({ length: 14 }, (_, i) => {
        const label = getTranslationValue(translations, "gallery.imageLabel");
        return typeof label === "string"
            ? label.replace("{number}", (i + 1).toString())
            : `/images/gallery/gallery${i + 1}.jpeg`;
    });

    return (
        <>
            {/* Client-side welcome modal */}
            <WelcomeModal />

            <div className="relative">
                {/* Hero carousel */}
                <HeroCarousel slides={processedSlides} />
            </div>

            {/* Features Section - First content section (white) */}
            <section className="bg-white dark:bg-gray-900/40 py-12 sm:py-16 md:py-20">
                <div className="container mx-auto px-4 sm:px-6">
                    <h2
                        className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-slate-900 dark:text-white"
                        data-i18n="services.title"
                    >
                        {(getTranslationValue(
                            translations,
                            "services.title"
                        ) as string) || "Our Services"}
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {/* Service 1 */}
                        <CardClickHandler
                            icon={"🚑"}
                            title={
                                (getTranslationValue(
                                    translations,
                                    "services.emergency.title"
                                ) as string) || "Emergency Care"
                            }
                            description={
                                (getTranslationValue(
                                    translations,
                                    "services.emergency.description"
                                ) as string) ||
                                "24/7 emergency services with state-of-the-art facilities and expert medical staff."
                            }
                            data={[
                                "Emergency",
                                "OT",
                                "Ultrasound",
                                "X-Ray",
                                "Normal & CS Delivery",
                                "Ambulance",
                                "Lab",
                                "NICU",
                                "Pharmacy",
                                "Dialysis",
                            ]}
                        />

                        {/* Service 2 */}
                        <CardClickHandler
                            icon={"🛏️"}
                            title={
                                (getTranslationValue(
                                    translations,
                                    "services.specialized.title"
                                ) as string) || "Services"
                            }
                            description={
                                (getTranslationValue(
                                    translations,
                                    "services.services.description"
                                ) as string) ||
                                "Comprehensive healthcare services including consultations, diagnostics, and various medical procedures."
                            }
                            data={[]}
                        />

                        {/* Service 3 */}
                        <Card className="shadow-md border bg-white dark:bg-gray-800/60 transition-all duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer">
                            <Link href={getBasePath("/specialities")}>
                                <CardHeader className="text-center">
                                    <div className="bg-gray-100 dark:bg-gray-700 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <span className="text-gray-700 dark:text-gray-300 text-2xl flex items-center justify-center w-full h-full">
                                            🩺
                                        </span>
                                    </div>
                                    <CardTitle
                                        className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-white"
                                        data-i18n="services.specialities.title"
                                    >
                                        {(getTranslationValue(
                                            translations,
                                            "services.specialities.title"
                                        ) as string) || "Specialities"}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p
                                        className="text-slate-600 dark:text-slate-300 leading-relaxed"
                                        data-i18n="services.specialities.description"
                                    >
                                        {(getTranslationValue(
                                            translations,
                                            "services.specialities.description"
                                        ) as string) ||
                                            "Specialized medical departments including Gynaecology & Obstetrics, Orthopedics, Pediatrics, and other critical medical specialties."}
                                    </p>
                                </CardContent>
                            </Link>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Stats Section - Second content section (light gray) */}
            <section className="bg-gray-100 dark:bg-gray-800/30 py-12 sm:py-16 md:py-20 border-y border-gray-200 dark:border-gray-700/30">
                <StatisticsComponent />
            </section>

            {/* Testimonials Section - Third content section (white) */}
            <section className="bg-white dark:bg-gray-900/40 py-12 sm:py-16 md:py-20">
                <div className="container mx-auto px-4 sm:px-6">
                    <h2
                        className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-slate-900 dark:text-white"
                        data-i18n="testimonials.title"
                    >
                        {(getTranslationValue(
                            translations,
                            "testimonials.title"
                        ) as string) || "Patient Testimonials"}
                    </h2>

                    {/* Testimonials Carousel */}
                    <TestimonialsCarousel testimonials={testimonials} />
                </div>
            </section>
        </>
    );
}

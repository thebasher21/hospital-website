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
            quote: `I was very lucky to come to Sadh Care Hospital. My mother was very sick past 3½ months. She was admitted to 2 other hospitals in Delhi 
            but nothing was helping her. Her condition was worsening. She was very disheartened with indifferent attitude of the doctors in those hospitals. 
            Those hospitals were more like money sucking institutions. My mother's condiion was not improving and she was being prescribed unneccesary 
            medications. So, then I called my very dear Friend Roli Tiwari who manages Sadh Care hospital. She felt the helplessness I was feeling and told 
            me to come here with my mom. It's about 2 hours drive from my home but since I was so disheartened with all other hospitals & doctors, I decided 
            to take another chance. As soon as I came here, I was so pleased & relieved to see the prompt & readiness of the staff. They were already ready 
            with wheelchair for my mom & took all the blood samples as soon as she arrived. No form fillig, no deposits; just pure patient care & concern. 
            My maom's fist impression was that she was super happy with the lab staff. Bood drawn effortlessly without much pain, which my mom never 
            experienced before, in any hospital. After that, room arrangement, housekeeping staff, nurses & duty doctors were very helpful & friendly and 
            took extra care which no commercial hospital ever offered. My mom was shown to an excellent & competent docter, Dr. Parul Priya. She talked to 
            my mother for 45 mins to hear all her problem, unlike any other doctors my mom had seen earlier. I feel very confident after meting Dr. Parul 
            Priya & she's now my mom's go to doctor, even from USA. The rooms, hospital & surroundings were extremely clean & ambience was very serene, like 
            a beautiful ashram rather than a commercial hospital. Food was very good for both patients & attendants & staff was very corteous. Finally, 
            billing was also vey effortless & bare minimun charges. This hospital is very ethical & not a commercial money making business like other metro 
            city hospitals. I hope, one day, Sadh Care Hospital will become a multi-speciality hospital so all the procedures can be done in one place. I 
            have a vey good & satisfactory experience after coming here. God blees all the staff, doctors of Sadh Care Hospital! Attendant: Kavita Khanna`,
            name: "Sushiel Khanna",
            role: "",
        },
        {
            quote: `THANK YOU NOTE on behalf of Jai Kumar. Dean Sadh Team/Mangement, I am writing this note to send my heartfelt gratitude. Thanks for giving
                the good treatment to my father during the hospitalization at your hospital. Also giving the careness in all day & night by your supporting 
                staff. As a doctor, you have gone above and beyond everything I ever would have expected. A patient's testimonial is less of a recognition 
                of a doctor's professional expertise, and more of a recommendation of a doctor's ability to listen, care and heal. I can vouch for the fact 
                that your abilities are unmatched. My special thanks to are as under:
                Dr. Parul, Dr. Akash, Dr. Medha, Dr. Pankaj, Varsha, Neetu, Upasana, Madhusudan, Pawan, All of the members of the nursing staff
                The above persons have given the good support to us during the tough time which will be always remember in my heart. I am stopping to write
                that once again "BIG THANK YOU TO SADH"
                Warm regards,
                Ankit Dwivedi`,
            name: "Ankit Dwivedi",
            role: "",
        },
        {
            quote: `Deas SADH CARE Hospital, This was very great to see your Hospital in such a good condition & preparation of NABH, I am very happy to see 
            the preparation you have done. We have worked with many hospital but this was the best hospital till NOW, NO hospital prepared like this before, 
            It's all because of good & dedicated team, all because of initiative taken by Kaul sir & Roli Tiwari mam. You all deserve to be genuine NABH 
            Accreditation. Soon we'll achieve this stamp of appreciation.
            All the very best.
            Regards,
            SONV KapiL`,
            name: "Sonv Kapil",
            role: "",
        },
    ];

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
                                "Emergency Treatment and Admissions",
                                "X-Ray",
                                "Lab",
                                "Normal and Cesarean delivery",
                                "Emergency OT",
                                "NICU",
                                "Ambulance",
                                "Pharmacy",
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
                            data={[
                                "OPD",
                                "IPD",
                                "Ultrasound",
                                "OT",
                                "Dialysis",
                                "Ayushman Bharat",
                                "TPA - cashless and reimbursement",
                                "Haryana government",
                                "Medical gas services",
                                "Laundry services",
                                "Dietary services",
                            ]}
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

'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import PageTitle from '@/components/PageTitle';

export default function Specialities() {
  // List of specialties with their names, icons, and descriptions
  const specialties = [
    {
      name: "Cardiology",
      icon: "❤️",
      description: "Diagnosis and treatment of heart disorders including coronary artery disease, heart rhythm problems, and heart failure. We offer advanced cardiac imaging, interventional procedures, and cardiac rehabilitation."
    },
    {
      name: "Neurology",
      icon: "🧠",
      description: "Comprehensive care for disorders of the brain, spinal cord, and nerves. Our neurologists specialize in stroke care, epilepsy, multiple sclerosis, Parkinson's disease, and other neurological conditions."
    },
    {
      name: "Orthopedics",
      icon: "🦴",
      description: "Treatment of musculoskeletal disorders including joint replacements, sports injuries, spine problems, and fracture care. We offer minimally invasive surgical techniques and rehabilitation services."
    },
    {
      name: "Oncology",
      icon: "🩺",
      description: "Comprehensive cancer care including chemotherapy, radiation therapy, immunotherapy, and surgical interventions. Our multidisciplinary team offers personalized treatment plans for all types of cancer."
    },
    {
      name: "Pediatrics",
      icon: "👶",
      description: "Specialized healthcare for infants, children, and adolescents. Our pediatricians provide preventive care, treatment for acute illnesses, management of chronic conditions, and developmental assessments."
    },
    {
      name: "Gynecology",
      icon: "👩",
      description: "Women's health services including routine screenings, pregnancy care, menopause management, and treatment of reproductive disorders. We provide comprehensive care for women at all stages of life."
    },
    {
      name: "Dermatology",
      icon: "🧴",
      description: "Diagnosis and treatment of skin, hair, and nail disorders. Our dermatologists handle conditions like eczema, psoriasis, acne, skin cancer screening, and cosmetic procedures."
    },
    {
      name: "Ophthalmology",
      icon: "👁️",
      description: "Comprehensive eye care services including vision testing, cataract surgery, glaucoma treatment, corneal disorders, and retinal disease management. We offer both medical and surgical eye treatments."
    },
    {
      name: "ENT (Otolaryngology)",
      icon: "👂",
      description: "Treatment of ear, nose, throat, and head and neck disorders. Our ENT specialists address hearing loss, sinus problems, voice disorders, sleep apnea, and head and neck cancers."
    },
    {
      name: "Gastroenterology",
      icon: "🍽️",
      description: "Diagnosis and treatment of digestive system disorders including GERD, irritable bowel syndrome, inflammatory bowel disease, liver conditions, and colon cancer screening."
    },
    {
      name: "Nephrology",
      icon: "🫘",
      description: "Care for kidney diseases and disorders including chronic kidney disease, kidney stones, hypertension, and dialysis management. We offer comprehensive renal care services."
    },
    {
      name: "Pulmonology",
      icon: "🫁",
      description: "Treatment of respiratory conditions including asthma, COPD, pneumonia, tuberculosis, and sleep disorders. We provide pulmonary function testing and respiratory therapy."
    },
    {
      name: "Endocrinology",
      icon: "🧪",
      description: "Management of hormonal disorders including diabetes, thyroid conditions, osteoporosis, and metabolic disorders. Our endocrinologists provide personalized care plans."
    },
    {
      name: "Urology",
      icon: "🚽",
      description: "Treatment of urinary tract and male reproductive system disorders including kidney stones, urinary incontinence, prostate conditions, and male infertility."
    },
    {
      name: "Psychiatry",
      icon: "🧠",
      description: "Mental health services for conditions such as depression, anxiety, bipolar disorder, schizophrenia, and addiction. We offer both inpatient and outpatient psychiatric care."
    }
  ];

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
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900 dark:text-white" data-i18n="specialities.section.title">
            Medical Specialties
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialties.map((specialty, index) => (
              <Card key={index} className="transition-all duration-300 hover:shadow-lg border bg-white dark:bg-gray-800/70">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mr-4 text-2xl">
                      {specialty.icon}
                    </div>
                    <CardTitle className="text-xl text-gray-700 dark:text-gray-300" data-i18n-key="specialities.specialty.name" data-i18n-params={`{"name":"${specialty.name}"}`}>
                      {specialty.name}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed" data-i18n-key="specialities.specialty.description" data-i18n-params={`{"description":"${specialty.description.replace(/"/g, '\\"')}"}`}>
                    {specialty.description}
                  </p>
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
              Our team includes world-class specialists with extensive experience and expertise 
              across various medical disciplines. Each specialist is committed to providing 
              compassionate, patient-centered care using the latest medical technologies and treatments.
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
          <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white" data-i18n="specialities.cta.title">
            Need Medical Consultation?
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-10 max-w-3xl mx-auto" data-i18n="specialities.cta.description">
            Our specialists are available for consultations. Contact us to schedule a consultation with the appropriate department.
          </p>
          <div className="flex justify-center gap-6 flex-wrap">
            <Button variant="outline" className="border-gray-400 text-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800/60 font-medium">
              <span data-i18n="specialities.cta.contactButton">Contact Us</span>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
} 
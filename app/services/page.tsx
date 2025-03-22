import ServiceCard from '@/components/ServiceCard';
import { Button } from "@/components/ui/button";
import PageTitle from '@/components/PageTitle';

const services = [
  {
    title: 'Emergency Care',
    description: 'Round-the-clock emergency medical services with state-of-the-art facilities and experienced medical professionals.',
    icon: '/images/services/emergency.svg',
  },
  {
    title: 'Cardiology',
    description: 'Comprehensive cardiac care including diagnostics, interventional procedures, and rehabilitation services.',
    icon: '/images/services/cardiology.svg',
  },
  {
    title: 'Neurology',
    description: 'Advanced neurological care for disorders of the brain, spine, and nervous system with cutting-edge technology.',
    icon: '/images/services/neurology.svg',
  },
  {
    title: 'Orthopedics',
    description: 'Specialized care for musculoskeletal conditions, joint replacements, and sports injuries.',
    icon: '/images/services/orthopedics.svg',
  },
  {
    title: 'Pediatrics',
    description: 'Compassionate healthcare for infants, children, and adolescents in a child-friendly environment.',
    icon: '/images/services/pediatrics.svg',
  },
  {
    title: 'Obstetrics & Gynecology',
    description: "Comprehensive women's health services including prenatal care, delivery, and gynecological treatments.",
    icon: '/images/services/obgyn.svg',
  },
  {
    title: 'Oncology',
    description: 'Integrated cancer care with advanced diagnostic, treatment, and supportive services.',
    icon: '/images/services/oncology.svg',
  },
  {
    title: 'Radiology & Imaging',
    description: 'Cutting-edge diagnostic imaging services including X-ray, CT, MRI, and ultrasound.',
    icon: '/images/services/radiology.svg',
  },
  {
    title: 'Laboratory Services',
    description: 'Comprehensive clinical laboratory services with quick and accurate test results.',
    icon: '/images/services/laboratory.svg',
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
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  className="h-full flex-1 transition-all duration-300 hover:shadow-lg bg-white dark:bg-gray-800/70 border"
                />
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
                <span className="text-gray-700 dark:text-gray-300 text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">Initial Consultation</h3>
              <p className="text-slate-600 dark:text-slate-300">Meet with our specialists for a thorough assessment of your health concerns.</p>
            </div>
            
            {/* Step 2 */}
            <div className="text-center p-6 bg-white dark:bg-gray-800/70 rounded-lg shadow-sm border">
              <div className="bg-gray-100 dark:bg-gray-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-gray-700 dark:text-gray-300 text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">Diagnosis & Planning</h3>
              <p className="text-slate-600 dark:text-slate-300">Receive accurate diagnosis and a detailed treatment plan tailored to your needs.</p>
            </div>
            
            {/* Step 3 */}
            <div className="text-center p-6 bg-white dark:bg-gray-800/70 rounded-lg shadow-sm border">
              <div className="bg-gray-100 dark:bg-gray-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-gray-700 dark:text-gray-300 text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">Treatment & Follow-up</h3>
              <p className="text-slate-600 dark:text-slate-300">Undergo specialized treatment with continuous monitoring and follow-up care.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section - Third content section (white) */}
      <section className="bg-white dark:bg-gray-900/40 py-20 border-t border-gray-200 dark:border-gray-700/30">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">
            Need a Specialized Service?
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-10 max-w-3xl mx-auto">
            Our team of medical professionals is ready to provide personalized care 
            tailored to your specific health needs.
          </p>
          <div className="flex justify-center gap-6 flex-wrap">
            <Button variant="outline" className="border-gray-400 text-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800/60 font-medium">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
} 
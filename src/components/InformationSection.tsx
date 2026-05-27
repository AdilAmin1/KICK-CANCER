import { motion } from 'motion/react';
import { CANCER_FACTS, RESOURCES } from '../data';
import { BookOpen, HelpCircle, Activity, Star, FileText } from 'lucide-react';
import { useState } from 'react';

export default function InformationSection() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const faqs = [
    {
      question: "How is childhood cancer different from adult cancer?",
      answer: "Childhood cancers are biologically different from adult cancers. They are not caused by lifestyle factors or environmental exposures. Historically, childhood cancers occur in the developing organs, bones, or blood cells, meaning they respond with higher success to tailored, targeted pediatric protocols rather than traditional adult radiation or chemo."
    },
    {
      question: "What does the gold ribbon symbolize?",
      answer: "In 1997, the gold ribbon was chosen by families of young patients to represent the struggle and hope of children with cancer worldwide. Just as gold represents a precious, pure, and resilient metal, the ribbon represents the precious lives of children who represent our future."
    },
    {
      question: "How can I spread awareness locally?",
      answer: "Spreading awareness starts with small, local steps. Sharing accurate facts on social media, supporting school gold-ribbon events, wearing gold ribbon badges, and engaging with childhood cancer non-profits are powerful ways to keep this issue in the public focus."
    }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-20 py-4 px-4 sm:px-6">
      
      {/* Title Header */}
      <section className="text-center max-w-2xl mx-auto space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight text-neutral-900">Childhood Cancer Information</h1>
      </section>

      {/* Vital Statistics Bento Grid */}
      <section className="space-y-8">
        <div className="flex items-center gap-3 border-b border-neutral-100 pb-3">
          <Activity className="w-5 h-5 text-amber-500" />
          <h2 className="text-xl font-extrabold text-neutral-900">Key Realities</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CANCER_FACTS.map((fact, index) => (
            <motion.div
              key={fact.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white border border-neutral-100 rounded-2xl p-6 hover:shadow-md hover:border-amber-300/40 transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-amber-600 bg-amber-400/10 px-2.5 py-1 rounded-md">
                  {fact.statLabel}
                </span>
                <p className="text-sm text-neutral-500 font-medium leading-relaxed">
                  {fact.description}
                </p>
              </div>
              <div className="pt-6 mt-4 border-t border-neutral-50">
                <span className="text-3xl font-black text-amber-500 block">
                  {fact.stat}
                </span>
                <span className="text-xs font-bold text-neutral-400 mt-1 block">
                  {fact.title}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Resource Cards */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-4 space-y-4">
          <div className="p-3 bg-amber-400/10 rounded-xl text-amber-500 w-fit">
            <BookOpen className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-extrabold text-neutral-900">Recommended Resources</h2>
          <p className="text-neutral-500 text-sm leading-relaxed font-normal">
            Knowledge is a source of power and comfort during a journey. Check out these peer alliances, research papers, and guides to help understand pediatric medicine.
          </p>
        </div>

        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {RESOURCES.map((resource, i) => (
            <a 
              key={i} 
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-neutral-100 p-6 rounded-2xl hover:border-amber-400/40 hover:shadow-xs transition-all flex flex-col justify-between group"
            >
              <div>
                <span className="text-xs font-bold tracking-wider text-amber-500 uppercase flex items-center gap-1.5 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  {resource.category}
                </span>
                <h3 className="font-bold text-neutral-900 text-base mb-2 group-hover:text-amber-500 transition-colors">{resource.title}</h3>
                <p className="text-neutral-500 text-xs leading-relaxed font-normal">{resource.description}</p>
                <span className="inline-block mt-3 text-[11px] font-mono text-neutral-400 group-hover:text-neutral-500 transition-colors">
                  {resource.url.replace('https://www.', '').replace('https://', '')}
                </span>
              </div>
              <div className="pt-6 mt-4 border-t border-neutral-50 flex items-center gap-1 text-xs font-bold text-amber-600 group-hover:text-amber-700 transition-colors">
                <FileText className="w-4 h-4" />
                <span>Visit Resource</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Frequently Asked Questions accordion */}
      <section className="space-y-8 bg-neutral-50/50 rounded-3xl p-6 sm:p-10 border border-neutral-100">
        <div className="flex items-center gap-3">
          <HelpCircle className="w-5 h-5 text-amber-500" />
          <h2 className="text-xl font-extrabold text-neutral-900">Childhood Cancer FAQ</h2>
        </div>

        <div className="space-y-4 max-w-4xl">
          {faqs.map((faq, index) => {
            const isOpen = activeAccordion === index;
            return (
              <div 
                key={index} 
                className="bg-white rounded-xl border border-neutral-150 overflow-hidden transition-shadow hover:shadow-xs"
              >
                <button
                  onClick={() => setActiveAccordion(isOpen ? null : index)}
                  className="w-full text-left px-6 py-4 flex justify-between items-center hover:bg-neutral-50/50 cursor-pointer focus:outline-hidden"
                >
                  <span className="font-bold text-neutral-900 text-sm sm:text-base pr-4">
                    {faq.question}
                  </span>
                  <span className="text-amber-500 text-xl font-extrabold shrink-0">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm text-neutral-500 leading-relaxed font-normal animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

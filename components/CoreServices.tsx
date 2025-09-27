import React from 'react';

const DesignIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c.251-.146.52-.268.802-.363a2.25 2.25 0 012.894 0c.282.095.55.217.802.363m-3.5 0a4.5 4.5 0 013.5 0m-3.5 0v5.714a2.25 2.25 0 00.659 1.591L9.75 14.5M5 14.5L3 12.5m2 2l2-2m-2 2l-2 2" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 3.104v5.714a2.25 2.25 0 01.659 1.591L19 14.5m-4.75-11.396c-.251-.146-.52-.268-.802-.363a2.25 2.25 0 00-2.894 0c-.282.095-.55.217-.802.363m3.5 0a4.5 4.5 0 00-3.5 0m3.5 0v5.714a2.25 2.25 0 00-.659 1.591L14.25 14.5M19 14.5L21 12.5m-2 2l-2-2m2 2l2 2" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 18v-4.5m14 4.5v-4.5" />
  </svg>
);

const PrototypeIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 17.25v-.228a4.5 4.5 0 00-.12-1.03l-2.268-9.64a3.375 3.375 0 00-3.285-2.602H7.923a3.375 3.375 0 00-3.285 2.602l-2.268 9.64a4.5 4.5 0 00-.12 1.03v.228m19.5 0a3 3 0 01-3 3H5.25a3 3 0 01-3-3m19.5 0a3 3 0 00-3-3H5.25a3 3 0 00-3 3m16.5 0h.008v.008h-.008v-.008zm-3 0h.008v.008h-.008v-.008z" />
  </svg>
);

const ValidationIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="group h-full p-8 bg-charcoal-bg border border-paper-white/10 rounded-sm relative transition-all duration-300 transform-gpu hover:-translate-y-2 hover:border-saffron-yellow/50 hover:shadow-2xl hover:shadow-charcoal-bg/50">
      <div className="absolute top-0 right-0 w-0 h-0 border-solid border-t-[40px] border-l-[40px] border-t-saffron-yellow border-l-transparent transition-all duration-300 transform scale-0 group-hover:scale-100 origin-top-right"></div>
      <div className="flex items-center justify-center h-16 w-16 rounded-sm bg-paper-white/5 text-saffron-yellow mb-6 border border-paper-white/10 group-hover:border-saffron-yellow/30 transition-all duration-300">
        <div className="transform transition-transform duration-300 group-hover:scale-110">
            {icon}
        </div>
      </div>
      <h3 className="text-2xl font-bold font-display text-heading-text mb-4">{title}</h3>
      <p className="text-slate-text leading-relaxed mb-6">{description}</p>
      <a href="/services" className="font-bold text-saffron-yellow hover:text-opacity-80 transition-all inline-flex items-center group/link">
          Learn More
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform transition-transform duration-300 group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </a>
    </div>
  );
};

const servicesData = [
  {
    icon: <DesignIcon className="h-8 w-8" />,
    title: 'Virtual Engineering',
    description: 'Leveraging state-of-the-art simulation to fold complex physics into predictable, optimized virtual models.',
  },
  {
    icon: <PrototypeIcon className="h-8 w-8" />,
    title: 'Rapid Prototyping',
    description: 'Transforming digital blueprints into tangible, high-fidelity prototypes to bring your concept to life with precision.',
  },
  {
    icon: <ValidationIcon className="h-8 w-8" />,
    title: 'Performance Validation',
    description: 'Our rigorous testing ensures the final product not only meets but exceeds all performance specifications.',
  },
];

const CoreServices: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-charcoal-bg/50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16 animate-unfold">
          <h2 className="text-4xl lg:text-5xl font-bold font-display text-heading-text">Our Core <span className="text-saffron-yellow">Services</span></h2>
          <p className="text-lg text-slate-text mt-4 max-w-2xl mx-auto">An integrated process for developing next-generation electric motors.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div key={index} className="animate-unfold" style={{animationDelay: `${index * 150}ms`, transformOrigin: 'top'}}>
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreServices;

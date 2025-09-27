import React from 'react';

interface PropositionItemProps {
  title: string;
  description: string;
  index: number;
}

const PropositionItem: React.FC<PropositionItemProps> = ({ title, description, index }) => (
  <div className="relative pl-16 group transition-transform duration-300 hover:-translate-y-1">
      <div className="absolute left-0 top-0 h-10 w-10 flex items-center justify-center rounded-sm border-2 border-saffron-yellow text-saffron-yellow font-semibold font-display transition-all duration-300 group-hover:scale-110 group-hover:border-4 group-hover:shadow-md group-hover:shadow-saffron-yellow/30">
          {index.toString().padStart(2, '0')}
      </div>
    <div className="relative">
      <h4 className="text-xl font-semibold text-charcoal-bg mb-2 font-display">{title}</h4>
      <p className="text-charcoal-bg/80">{description}</p>
    </div>
  </div>
);

const propositions = [
  {
    title: 'Simulation-Reality Correlation',
    description: 'Our meticulous simulation process ensures virtual models translate to physical prototypes with unparalleled accuracy, instilling confidence in every design choice.'
  },
  {
    title: 'Application-Specific Design',
    description: 'We don’t believe in one-size-fits-all. Every motor is a bespoke solution, perfectly folded and formed to your application’s unique constraints.'
  },
  {
    title: 'Engineered for Endurance',
    description: 'Prioritizing reliability and efficiency, we engineer robust solutions that stand the test of time, ensuring your product is both durable and competitive.'
  },
  {
    title: 'End-to-End Project Ownership',
    description: 'From the initial brief to the final validated sample, we provide a single, expert point of contact, ensuring a streamlined and accountable partnership.'
  }
];

const ValueProposition: React.FC = () => {
  return (
    <section id="value-proposition" className="py-24 bg-charcoal-bg relative overflow-hidden">
        {/* The split background is now handled by a pseudo-element on the section itself for stability */}
        <style>{`
          #value-proposition::before {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            height: 100%;
            width: 66.666667%;
            background-color: #F4F4F4;
            animation: unfold 1s ease-out forwards;
            transform-origin: right;
            display: none;
          }
          @media (min-width: 1024px) {
            #value-proposition::before {
              display: block;
            }
          }
        `}</style>
      <div className="container mx-auto px-6 relative grid lg:grid-cols-3 gap-8 lg:gap-16 items-center">
        <div className="lg:col-span-1 z-10 animate-unfold text-center lg:text-left mb-12 lg:mb-0">
             <h2 className="text-4xl lg:text-5xl font-bold font-display text-heading-text">Engineered <span className="text-saffron-yellow">Certainty</span></h2>
            <p className="text-lg text-slate-text mt-4">We transform technical excellence into tangible benefits that drive your success.</p>
        </div>
        <div className="lg:col-span-2 z-10">
            <div className="bg-paper-white p-8 sm:p-12 lg:p-0 lg:bg-transparent rounded-sm lg:rounded-none">
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
                {propositions.map((prop, i) => (
                    <div key={i} className="animate-unfold" style={{animationDelay: `${150 + i * 150}ms`, transformOrigin: 'top'}}>
                        <PropositionItem title={prop.title} description={prop.description} index={i + 1} />
                    </div>
                ))}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
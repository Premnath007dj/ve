import React from 'react';
import TextReveal from './TextReveal';

interface IndustryCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const IndustryCard: React.FC<IndustryCardProps> = ({ title, description, imageUrl }) => (
  <div className="group relative rounded-sm overflow-hidden aspect-[4/3] bg-charcoal-bg">
    <img src={imageUrl} alt={title} className="w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-110" style={{clipPath: 'polygon(0 0, 100% 0, 100% 80%, 80% 100%, 0 100%)'}}/>
    <div className="absolute inset-0 bg-saffron-yellow/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
    <div className="absolute inset-0 p-6 flex flex-col justify-end transform translate-y-1/2 group-hover:translate-y-0 transition-transform duration-500 ease-out">
      <h3 className="text-2xl font-bold font-display mb-2 text-heading-text">{title}</h3>
      <div className="opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-full transition-all duration-500 ease-out delay-100">
        <p className="text-paper-white mb-4 font-medium">{description}</p>
        <a href="#contact" className="font-bold text-saffron-yellow hover:text-opacity-80 transition-all inline-flex items-center group/link">
          Explore Solutions
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform transition-transform duration-300 group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </a>
      </div>
    </div>
  </div>
);

const industriesData = [
  {
    title: 'Automotive',
    description: 'Delivering robust and reliable motor solutions for critical automotive systems, from ADAS to next-generation EV propulsion.',
    imageUrl: 'images/automotive trends 2025.jpeg',
  },
  {
    title: 'Consumer Electronics',
    description: 'Engineering the efficient, quiet, and dependable motors that power the future of home appliances and personal devices.',
    imageUrl: 'images/ma-Consumer-Electronics.png',
  },
  {
    title: 'Industrial & Aerospace',
    description: 'Developing custom, high-performance motors for challenging environments like defense, aerospace, and agricultural machinery.',
    imageUrl: 'images/drone-shot-tractor-spraying-lush-600nw-2464594961.webp',
  },
];

const Industries: React.FC = () => {
  return (
    <section id="industries" className="py-24 bg-charcoal-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-unfold">
          <TextReveal text="Precision in Practice, Across Industries" className="text-4xl lg:text-5xl font-bold font-display text-heading-text" />
          <p className="text-lg text-slate-text mt-4 max-w-2xl mx-auto">We possess deep expertise across a wide range of demanding sectors.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {industriesData.map((industry, index) => (
             <div key={index} className="animate-unfold" style={{animationDelay: `${index * 150}ms`, transformOrigin: 'top'}}>
              <IndustryCard {...industry} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
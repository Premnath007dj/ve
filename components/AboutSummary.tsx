import React from 'react';

const AboutSummary: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-charcoal-bg text-heading-text">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3 animate-unfold">
                <h2 className="text-4xl lg:text-5xl font-bold font-display mb-6">The Minds Behind the <span className="text-saffron-yellow">Motion</span></h2>
                <p className="text-slate-text leading-relaxed mb-6">
                To provide clients with a direct partnership to world-class engineering expertise, transforming complex electric motor challenges into reliable, efficient, and manufacturable solutions. We are committed to deep collaboration, technical excellence, and complete project ownership.
                </p>
                <a href="/about" className="font-bold text-saffron-yellow hover:text-opacity-80 transition-all inline-flex items-center group/link text-lg">
                    Meet Our Team & Philosophy
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2 transform transition-transform duration-300 group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>
            </div>
            <div className="lg:col-span-2 animate-unfold" style={{animationDelay: '150ms'}}>
                <div 
                    className="w-full h-auto aspect-square rounded-sm border-4 border-saffron-yellow bg-charcoal-bg p-2 shadow-lg"
                    style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'}}
                >
                    <img 
                    src="https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=800&auto-format&fit=crop"
                    alt="Principal Engineer" 
                    className="w-full h-full object-cover rounded-sm"
                    />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSummary;

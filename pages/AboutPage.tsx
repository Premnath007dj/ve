import React from 'react';

const ValueCard: React.FC<{ icon: JSX.Element; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-paper-white/5 p-6 rounded-sm text-center border border-paper-white/10 transition-all duration-300 hover:border-saffron-yellow/50 hover:-translate-y-1 hover:shadow-xl hover:shadow-saffron-yellow/10">
    <div className="flex justify-center mb-4">
      <div className="h-14 w-14 flex items-center justify-center rounded-sm bg-saffron-yellow/10 text-saffron-yellow">
        {icon}
      </div>
    </div>
    <h4 className="text-xl font-bold font-display text-heading-text mb-2">{title}</h4>
    <p className="text-sm text-slate-text">{description}</p>
  </div>
);

const values = [
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338A2.25 2.25 0 0017.088 3.75H15M4.5 15.75l.75-7.5h7.5l.75 7.5m-9 0h9" /></svg>,
        title: 'Precision',
        description: 'Meticulous attention to detail in every simulation, calculation, and component choice is the bedrock of our process.'
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-.778.099-1.533.284-2.253" /></svg>,
        title: 'Innovation',
        description: 'We constantly push the boundaries of motor technology, seeking novel solutions to achieve higher efficiency and power density.'
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.512 2.72a3 3 0 01-4.682-2.72 9.094 9.094 0 013.741.479m-4.26 9.544a4.5 4.5 0 01-.095-2.231 4.5 4.5 0 01.095-2.231m0 0a4.5 4.5 0 005.163 0m1.398 4.462A4.5 4.5 0 0017.09 18a4.5 4.5 0 001.398-4.462m-1.398 4.462a4.5 4.5 0 01-5.163 0m-3.766-4.462A9 9 0 0112 10.5c2.252 0 4.297.946 5.766 2.482A9.027 9.027 0 0112 15c-2.252 0-4.297-.946-5.766-2.482z" /></svg>,
        title: 'Collaboration',
        description: 'We function as an extension of your team, fostering a transparent and communicative partnership for seamless project execution.'
    },
];

const expertise = [
    { name: 'PMSM & BLDC Motors', desc: 'High-efficiency permanent magnet synchronous and brushless DC motors for demanding applications.' },
    { name: 'Synchronous Reluctance Motors (SynRM)', desc: 'Robust and cost-effective magnet-free designs for variable speed industrial drives.' },
    { name: 'PMDC & Actuators', desc: 'Precision-controlled permanent magnet DC motors and custom electro-mechanical actuators.' },
];

const AboutPage: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-charcoal-bg text-heading-text">
        <div className="pt-16 pb-10">
            <div className="text-center animate-unfold">
                <h1 className="text-4xl lg:text-5xl font-bold font-display">The Minds Behind the <span className="text-saffron-yellow">Motion</span></h1>
                <p className="text-lg text-slate-text mt-4 max-w-3xl mx-auto">Our philosophy, values, and the expertise driving your innovation.</p>
            </div>
        </div>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-x-16 gap-y-10 mb-24">
            <div className="animate-unfold" style={{animationDelay: '150ms'}}>
                <h3 className="text-3xl font-semibold font-display text-saffron-yellow mb-4">Our Mission</h3>
                <p className="text-slate-text leading-relaxed">
                To provide clients with a direct partnership to world-class engineering expertise, transforming complex electric motor challenges into reliable, efficient, and manufacturable solutions. We are committed to deep collaboration, technical excellence, and complete project ownership.
                </p>
            </div>
            <div className="animate-unfold" style={{animationDelay: '300ms'}}>
                <h3 className="text-3xl font-semibold font-display text-saffron-yellow mb-4">Our Vision</h3>
                <p className="text-slate-text leading-relaxed">
                To be the industry's most trusted boutique innovation center for electric motor technology, pioneering the next generation of motion systems that are smaller, more powerful, and more sustainable than ever before.
                </p>
            </div>
        </div>
        
        <div className="mb-24">
            <h3 className="text-3xl font-semibold font-display text-saffron-yellow mb-12 text-center animate-unfold">Our Core Values</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {values.map((value, index) => (
                    <div key={value.title} className="animate-unfold" style={{animationDelay: `${index * 150}ms`}}>
                        <ValueCard {...value} />
                    </div>
                ))}
            </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3 animate-unfold" style={{animationDelay: '150ms'}}>
            <h3 className="text-3xl font-semibold font-display text-saffron-yellow mb-6">Core Expertise</h3>
            <p className="text-slate-text mb-8">
              With over six years of focused experience, our team specializes in the design, simulation, and validation of advanced electric motors. We provide end-to-end development for:
            </p>
            <ul className="space-y-6">
              {expertise.map(motor => (
                <li key={motor.name} className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-sm bg-paper-white/10 text-saffron-yellow mt-1 mr-4">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M12 6V3m0 18v-3" /></svg>
                  </div>
                  <div>
                    <h5 className="font-semibold text-heading-text">{motor.name}</h5>
                    <p className="text-sm text-slate-text/80">{motor.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-2 animate-unfold" style={{animationDelay: '300ms'}}>
            
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;

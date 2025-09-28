import React from 'react';

const AnimatedMotorGraphic: React.FC = () => (
    <svg viewBox="0 0 200 200" className="w-full h-full max-w-md mx-auto">
        <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F4B400" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#1e293b" stopOpacity="0.2" />
            </linearGradient>
            <filter id="glow">
                <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
                <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
        </defs>

        <style>
            {`
                @keyframes rotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
                @keyframes rotate-reverse { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }
                @keyframes pulse { 0%, 100% { opacity: 0.7; } 50% { opacity: 1; } }
                .rotor { animation: rotate 10s linear infinite; transform-origin: center; }
                .stator { animation: pulse 3s ease-in-out infinite; }
                .gear1 { animation: rotate 20s linear infinite; transform-origin: center; }
                .gear2 { animation: rotate-reverse 30s linear infinite; transform-origin: center; }
            `}
        </style>
        
        {/* Stator */}
        <circle cx="100" cy="100" r="90" fill="none" stroke="#94a3b8" strokeWidth="4" strokeDasharray="10 5" className="stator" />
        <circle cx="100" cy="100" r="80" fill="none" stroke="#1e293b" strokeWidth="18" />

        {/* Rotor */}
        <g className="rotor">
            <circle cx="100" cy="100" r="60" fill="url(#grad1)" stroke="#F4B400" strokeWidth="1" filter="url(#glow)" />
            <line x1="100" y1="100" x2="100" y2="40" stroke="#F4B400" strokeWidth="2" />
            <line x1="100" y1="100" x2="152" y2="70" stroke="#F4B400" strokeWidth="2" />
            <line x1="100" y1="100" x2="48" y2="130" stroke="#F4B400" strokeWidth="2" />
        </g>
        
        {/* Outer elements */}
        <circle cx="100" cy="100" r="98" fill="none" stroke="#F4B400" strokeWidth="0.5" strokeDasharray="2 8" />
        <g className="gear1">
           {[...Array(8)].map((_, i) => (
              <line 
                key={i}
                x1="100" y1="100"
                x2={100 + 95 * Math.cos(i * Math.PI / 4)}
                y2={100 + 95 * Math.sin(i * Math.PI / 4)}
                stroke="#94a3b8" strokeWidth="0.5" opacity="0.5" />
           ))}
        </g>
    </svg>
);

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative text-heading-text min-h-screen flex items-center justify-center overflow-hidden bg-charcoal-bg">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="max-w-xl text-center md:text-left">
            <div className="relative bg-paper-white/5 backdrop-blur-sm p-6 sm:p-8 md:p-12 rounded-sm border border-paper-white/10 animate-unfold" style={{clipPath: 'polygon(0 0, 100% 0, 100% 85%, 95% 100%, 0 100%)'}}>
                <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 text-heading-text animate-slide-in-left" style={{animationDelay: '200ms'}}>
                  Transforming Concepts into <span className="text-saffron-yellow">Kinetic Reality</span>
                </h1>
                <p className="text-lg md:text-xl text-slate-text max-w-2xl mb-10 animate-slide-in-right" style={{animationDelay: '400ms'}}>
                  We engineer the future of motion. From abstract ideas to validated prototypes, our expertise in electric motor design unfolds your project's full potential.
                </p>
                <a 
                  href="#contact" 
                  className="inline-block clip-parallelogram bg-saffron-yellow text-charcoal-bg font-bold py-4 px-12 rounded-sm text-lg hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-lg shadow-saffron-yellow/10 hover:shadow-xl hover:shadow-saffron-yellow/30 animate-fade-in"
                  style={{animationDelay: '600ms'}}
                >
                  Begin Your Blueprint
                </a>
            </div>
          </div>
          <div className="md:block animate-fade-in" style={{animationDelay: '800ms'}}>
            <AnimatedMotorGraphic />
          </div>
        </div>
      </div>

      <a href="/#services" aria-label="Scroll down" className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-fade-in" style={{ animationDelay: '1s' }}>
          <div className="w-px h-16 bg-slate-text/30 relative">
              <div className="w-px h-6 bg-slate-text/80 rounded-full absolute top-0 left-0 animate-bounce"></div>
          </div>
      </a>
    </section>
  );
};

export default Hero;

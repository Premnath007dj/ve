import React, { useState, useEffect, useRef } from 'react';
import TextReveal from './TextReveal';

const processPhases = [
  { name: 'Discovery & Specification', description: 'A comprehensive review of requirements to align our design with your needs from day one.' },
  { name: 'Benchmarking & Analysis', description: 'Thorough analysis of existing solutions to position your product for market success.' },
  { name: 'Design, Simulation & Refinement', description: 'The core engineering phase, using advanced simulation to create and refine a virtual prototype.' },
  { name: 'Prototyping & Iterative Testing', description: 'With a validated virtual design, we produce and rigorously test physical prototypes for data-driven improvements.' },
  { name: 'Technology Transfer & Validation', description: 'Ensuring a smooth transition to production with a complete, validated technology package.' },
];

const timelineData = [
    { phase: "1. Research", duration: "4-5 Weeks" },
    { phase: "2. Design", duration: "5-7 Weeks" },
    { phase: "3. Prototype", duration: "6-8 Weeks" },
    { phase: "4. Validation", duration: "6-7 Weeks" },
    { phase: "5. Transfer", duration: "4-5 Weeks" }
];

const TimelinePath = ({ scrollProgress }) => {
    const pathRef = useRef(null);
    const [pathLength, setPathLength] = useState(0);

    useEffect(() => {
        if (pathRef.current) {
            const length = pathRef.current.getTotalLength();
            setPathLength(length);
            pathRef.current.style.strokeDasharray = length;
            pathRef.current.style.strokeDashoffset = length;
        }
    }, []);

    useEffect(() => {
        if (pathLength && pathRef.current) {
            const drawLength = pathLength * scrollProgress;
            pathRef.current.style.strokeDashoffset = pathLength - drawLength;
        }
    }, [scrollProgress, pathLength]);

    return (
        <svg className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-48" preserveAspectRatio="none" viewBox="0 0 200 1200">
            <path
                ref={pathRef}
                d="M 100,0 V 150 C 100,200 180,220 180,270 S 100,320 100,370 V 550 C 100,600 20,620 20,670 S 100,720 100,770 V 1200"
                fill="none"
                stroke="rgba(244, 180, 0, 0.8)"
                strokeWidth="3"
            />
        </svg>
    );
};

const Process: React.FC = () => {
    const [activePhase, setActivePhase] = useState(0);
    const [scrollProgress, setScrollProgress] = useState(0);
    const phaseRefs = useRef([]);
    const timelineRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const index = parseInt(entry.target.dataset.index, 10);
                        setActivePhase(index);
                    }
                });
            },
            { threshold: 0.6 } 
        );

        phaseRefs.current.forEach(ref => {
            if (ref) observer.observe(ref);
        });

        return () => {
            phaseRefs.current.forEach(ref => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (timelineRef.current) {
                const { top, height } = timelineRef.current.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                const progress = Math.max(0, Math.min(1, (windowHeight - top) / (height + windowHeight)));
                setScrollProgress(progress);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

  return (
    <section id="process" className="py-24 bg-paper-white text-charcoal-bg overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 lg:mb-24 animate-unfold">
          <TextReveal text="A Disciplined Path to Innovation" className="text-4xl lg:text-5xl font-bold font-display" />
          <p className="text-lg text-charcoal-bg/90 mt-4 max-w-3xl mx-auto">Our structured, multi-phase process provides clear milestones and full visibility, ensuring every project is managed with clarity from start to finish.</p>
        </div>

        <div ref={timelineRef} className="relative max-w-5xl mx-auto">
            <div className="hidden lg:block">
                <TimelinePath scrollProgress={scrollProgress} />
            </div>
            <div className="absolute top-0 left-0 w-0.5 h-full bg-saffron-yellow/20 ml-3 lg:hidden"></div>

            <div className="space-y-16">
                {processPhases.map((phase, index) => (
                    <div 
                        key={index} 
                        ref={el => phaseRefs.current[index] = el}
                        data-index={index}
                        className="pl-12 lg:pl-0 lg:grid lg:grid-cols-2 lg:gap-x-32 lg:items-center"
                    >
                        <div className={`
                            relative transition-all duration-500 
                            ${index % 2 === 0 ? 'lg:col-start-1 lg:text-right' : 'lg:col-start-2 lg:text-left'}
                            ${activePhase >= index ? 'opacity-100 translate-y-0' : 'opacity-30 translate-y-5'}
                        `}>
                             <div className={`absolute -left-9 top-1 w-5 h-5 rounded-full bg-saffron-yellow ring-4 ring-paper-white z-10 lg:hidden transition-transform duration-500 ${activePhase === index ? 'scale-125' : ''}`}></div>
                            <div className={`p-6 bg-paper-white border-2 rounded-sm shadow-lg relative transition-all duration-500 ${activePhase === index ? 'border-saffron-yellow scale-105 shadow-2xl' : 'border-charcoal-bg/10'}`}>
                                <div className="hidden lg:block absolute top-1/2 h-4 w-4 bg-paper-white transform -translate-y-1/2 rotate-45 border-2 -z-10 transition-colors duration-500" style={index % 2 === 0 ? { right: '-9px', borderLeft: 'none', borderTop: 'none', borderColor: activePhase === index ? '#F4B400' : 'rgba(26,26,26,0.1)'} : { left: '-9px', borderRight: 'none', borderBottom: 'none', borderColor: activePhase === index ? '#F4B400' : 'rgba(26,26,26,0.1)'}}></div>
                                <h3 className="font-bold font-display text-saffron-yellow text-xl mb-1">Phase {index + 1}</h3>
                                <h4 className="font-semibold text-charcoal-bg text-lg">{phase.name}</h4>
                                <p className="text-sm text-charcoal-bg/80 mt-2">{phase.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        
         <div className="mt-24 lg:mt-32 animate-unfold">
             <h3 className="text-3xl font-bold text-charcoal-bg text-center mb-12 font-display">Typical Development Timeline</h3>
              <div className="max-w-4xl mx-auto space-y-6">
                {timelineData.map((item, index) => (
                    <div key={item.phase} className="animate-slide-in-left opacity-0 group rounded-md p-2 -m-2 transition-colors duration-300 hover:bg-charcoal-bg/5" style={{animationDelay: `${index * 150}ms`, animationFillMode: 'forwards'}}>
                        <div className="flex items-center justify-between mb-1 text-sm sm:text-base">
                            <span className="font-semibold text-charcoal-bg transition-colors duration-300 group-hover:text-saffron-yellow">{item.phase}</span>
                            <span className="font-medium text-charcoal-bg/70">{item.duration}</span>
                        </div>
                        <div className="w-full bg-charcoal-bg/10 rounded-full h-2.5">
                            <div 
                                className="bg-saffron-yellow h-2.5 rounded-full"
                                style={{ width: '0%', animation: `fill-bar 1.5s ${index * 150 + 200}ms ease-out forwards` }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
         </div>

      </div>
    </section>
  );
};

export default Process;
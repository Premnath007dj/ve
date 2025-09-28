import React, { useEffect, useRef, useState } from 'react';

const ElectroMagnetIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-tech-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 3H12H4.5C3.39543 3 2.5 3.89543 2.5 5V12V19C2.5 20.1046 3.39543 21 4.5 21H12M13.5 3L19.5 3C20.6046 3 21.5 3.89543 21.5 5V19C21.5 20.1046 20.6046 21 19.5 21H12M13.5 3V21M8 8V16M16 8V16" /></svg>;
const ThermalIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-tech-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21v-2a6 6 0 00-12 0v2" /></svg>;
const CadIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-tech-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5-7.5-7.5 7.5-7.5z" /><path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l-7.5 7.5 7.5 7.5 7.5-7.5-7.5-7.5z" transform="rotate(90 12 12)"/></svg>;
const PrototypePageIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-tech-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4M4 7l8 4M4 7v10l8 4m0-10v10" /></svg>;
const TestingIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-tech-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const OptimizationIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-tech-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const WebDevIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-tech-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" /></svg>;
const ThreeDPrinterIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-tech-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.343-.026.69.023.962.124a2.25 2.25 0 011.588 2.068v1.386m0 0L14.25 9l1.5-1.5m0 0V7.5m0 0l-1.5 1.5M12 12.75v6.75m6-6.75v6.75M12 21.75H6.375c-1.621 0-2.936-1.314-2.936-2.936V6.375c0-1.621 1.315-2.936 2.936-2.936h9.25c1.621 0 2.936 1.314 2.936 2.936v3.687" /></svg>;

interface DetailedService {
  icon: React.ReactNode;
  title: string;
  description: string;
  subPoints: string[];
  image: string;
}

export const DETAILED_SERVICES_DATA: DetailedService[] = [
    { icon: <ElectroMagnetIcon />, title: 'PMSM Motor Simulation', description: 'We provide advanced simulation for Permanent Magnet Synchronous Motors to optimize performance, torque density, and efficiency for high-demand applications.', subPoints: ['Cogging Torque & Ripple Minimization', 'Field-Weakening Performance Analysis', 'D-Q Axis Inductance Calculation', 'Magnet Demagnetization Analysis'], image: 'images/pmsm.png' },
    { icon: <ElectroMagnetIcon />, title: 'BLDC Motor Simulation', description: 'Our simulations for Brushless DC Motors focus on ensuring reliable commutation, minimizing torque ripple, and maximizing operational efficiency across a wide speed range.', subPoints: ['Back EMF Waveform Analysis', 'Commutation Logic Optimization', 'Torque Ripple Analysis', 'Speed-Torque Characterization'], image: 'images/bldc.png' },
    { icon: <ElectroMagnetIcon />, title: 'SynRM Motor Simulation', description: 'We specialize in Synchronous Reluctance Motor simulations, focusing on rotor design to maximize torque output and efficiency while eliminating the need for rare-earth magnets.', subPoints: ['Rotor Topology Optimization', 'Torque vs. Current Angle Analysis', 'Inductance Characterization', 'Sensorless Control Feasibility'], image: 'images/synrm.png' },
    { icon: <ThermalIcon />, title: 'Thermal Analysis', description: 'We simulate heat generation and dissipation to design effective cooling strategies, guaranteeing motor reliability under continuous and peak loads.', subPoints: ['Heat Dissipation Modeling', 'Hotspot Identification', 'Transient Thermal Analysis', 'Material Performance at Temperature'], image: 'images/og-electric-machines-thermal-management-blog.jpg' },
    { icon: <CadIcon />, title: 'Mechanical & CAD Design (DFM)', description: 'Every virtual design is translated into a detailed 3D CAD model, applying Design for Manufacturability (DFM) principles for cost-effective scaling.', subPoints: ['3D Solid Modeling', 'Component Integration', 'Material Selection', 'Tolerance Analysis'], image: 'images/engineer-designs-machine-components-on-600nw-2324015289.webp' },
    { icon: <PrototypePageIcon />, title: 'Rapid Prototyping', description: 'We manage the fabrication and assembly of initial motor samples, delivering up to five fully functional prototypes for your evaluation, with full documentation.', subPoints: ['A-Sample & B-Sample Builds', 'SOP and QA/QC Documentation', 'Supplier Management', 'Component Sourcing'], image: 'images/Prototyping_what_s_it_all_about_.webp' },
    { icon: <TestingIcon />, title: 'Performance & Reliability Testing', description: 'Prototypes undergo a rigorous testing regimen to validate their performance against simulation data, including endurance cycles and environmental stress screening.', subPoints: ['Speed-Torque Characterization', 'Efficiency Mapping', 'Temperature Rise Measurement', 'Endurance & Lifecycle Testing'], image: 'images/performance-testing.png' },
    { icon: <OptimizationIcon />, title: 'Production Optimization ', description: 'We work closely with your team to support the integration of the motor within your system, providing data to optimize production processes.', subPoints: ['Technology Transfer Package', 'Bill of Materials (BOM) Finalization', 'Final Validation Reporting'], image: 'images/Manufacturing_Optimization1.png' },
    { icon: <WebDevIcon />, title: 'Web and App Development', description: 'We provide end-to-end web and mobile app development, delivering scalable, secure, and user-friendly solutions.', subPoints: ['Custom Web Applications', 'Responsive Mobile Apps (iOS & Android)', 'Scalable Backend & API Development', 'UI/UX Design & Prototyping'], image: 'images/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg' },
    { icon: <ThreeDPrinterIcon />, title: '3D Printing Services', description: 'Bring your digital designs to life with reliable and affordable 3D printing for a wide range of applications.', subPoints: ['Rapid Prototyping', 'Functional Parts & Enclosures', 'High-Resolution Models', 'Multiple Material Options (PLA, ABS, PETG)'], image: 'images/360_F_449308752_xkBGspiOsbAADCkET4ihyznpJ8POHmys.jpg' },
];

const ServiceContentCard: React.FC<Omit<DetailedService, 'image'> & { isHovered: boolean }> = ({ icon, title, description, subPoints, isHovered }) => {
  return (
    <div className={`group h-full p-8 bg-charcoal-bg border border-paper-white/10 rounded-sm transition-all duration-500 transform-gpu ${isHovered ? 'scale-105 border-saffron-yellow/50 shadow-2xl shadow-charcoal-bg/50' : ''}`}>
      <div className="flex items-center mb-4">
        <div className={`flex items-center justify-center h-12 w-12 rounded-sm bg-paper-white/5 text-saffron-yellow border border-paper-white/10 transition-all duration-300 ${isHovered ? 'border-saffron-yellow/30' : ''}`}>
          <div className={`transform transition-transform duration-300 ${isHovered ? 'scale-110' : ''}`}>
              {icon}
          </div>
        </div>
        <h3 className="text-2xl font-bold font-display text-heading-text ml-4">{title}</h3>
      </div>
      <p className="text-slate-text leading-relaxed mb-6">{description}</p>
      <ul className="space-y-3 text-sm">
        {subPoints.map((feature, i) => (
          <li key={i} className="flex items-start">
            <svg className="w-4 h-4 mr-3 mt-0.5 flex-shrink-0 text-saffron-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
            <span className="text-slate-text/90">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ServiceImageCard: React.FC<{ image: string; title: string; isHovered: boolean }> = ({ image, title, isHovered }) => {
    return (
        <div className={`group rounded-sm overflow-hidden border border-paper-white/10 transition-all duration-500 transform-gpu relative animate-unfold ${isHovered ? 'scale-105 border-saffron-yellow/50 shadow-2xl shadow-charcoal-bg/50' : ''}`}>
            <img src={image} alt={title} className={`w-full transition-transform duration-500 ${isHovered ? 'scale-110' : ''}`} loading="lazy" />
        </div>
    );
};

const AnimatedOnScroll: React.FC<{ children: React.ReactNode, animation: string, delay?: number, className?: string }> = ({ children, animation, delay, className }) => {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            });
        });

        const { current } = domRef;
        if (current) {
            observer.observe(current);
        }

        return () => {
            if (current) {
                observer.unobserve(current);
            }
        };
    }, []);

    return (
        <div
            ref={domRef}
            className={`${className} ${isVisible ? animation : 'opacity-0'}`}
            style={{ transition: 'opacity 0.5s', animationDelay: isVisible ? `${delay}ms` : undefined }}
        >
            {children}
        </div>
    );
};

const ServicesPage: React.FC = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-24 bg-charcoal-bg/50 relative overflow-hidden">
        <div className="pt-16 pb-10">
            <div className="text-center animate-unfold">
                <h1 className="text-4xl lg:text-5xl font-bold font-display text-heading-text">From Blueprint to <span className="text-saffron-yellow">Motion</span></h1>
                <p className="text-lg text-slate-text mt-4 max-w-2xl mx-auto">Our integrated services form a seamless process for developing next-generation electric motors.</p>
            </div>
        </div>
      <div className="container mx-auto px-6 relative">
        <div className="grid grid-cols-1 gap-16">
          {DETAILED_SERVICES_DATA.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={index} 
                className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <AnimatedOnScroll animation="animate-unfold" delay={0} className={`md:col-span-3 ${isEven ? 'md:order-1' : 'md:order-2'}`}>
                  <ServiceContentCard {...service} isHovered={hoveredIndex === index} />
                </AnimatedOnScroll>
                <AnimatedOnScroll animation="animate-unfold" delay={100} className={`md:col-span-2 ${isEven ? 'md:order-2' : 'md:order-1'}`}>
                  <ServiceImageCard image={service.image} title={service.title} isHovered={hoveredIndex === index} />
                </AnimatedOnScroll>
                {hoveredIndex === index && (
                    <svg className="absolute w-full h-full top-0 left-0" style={{ pointerEvents: 'none' }}>
                        <line x1={isEven ? "75%" : "25%"} y1="50%" x2={isEven ? "25%" : "75%"} y2="50%" stroke="rgba(244, 180, 0, 0.5)" strokeWidth="2" className="animate-draw-path" />
                    </svg>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
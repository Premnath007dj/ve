import React, { useEffect, useRef, useState } from 'react';

interface TextRevealProps {
    text: string;
    className?: string;
}

const TextReveal: React.FC<TextRevealProps> = ({ text, className }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            });
        });

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <h2 className={className} ref={ref}>
            {text.split("").map((char, index) => (
                <span
                    key={index}
                    className={`inline-block transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                    style={{ transitionDelay: `${index * 30}ms` }}
                >
                    {char === ' ' ? '\u00A0' : char}
                </span>
            ))}
        </h2>
    );
};

export default TextReveal;
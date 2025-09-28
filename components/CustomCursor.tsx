import React, { useState, useEffect, useRef } from 'react';

const CustomCursor: React.FC = () => {
    const mainCursorRef = useRef<HTMLDivElement>(null);
    const followerCursorRef = useRef<HTMLDivElement>(null);
    const [isHovering, setIsHovering] = useState(false);
    const [isMouseDown, setIsMouseDown] = useState(false);

    const positionRef = useRef({ x: 0, y: 0 });
    const followerPositionRef = useRef({ x: 0, y: 0 });
    const animationFrameRef = useRef<number>();

    useEffect(() => {
        const onMouseMove = (e: MouseEvent) => {
            positionRef.current = { x: e.clientX, y: e.clientY };
        };

        const onMouseOver = (e: MouseEvent) => {
            setIsHovering(!!(e.target as Element).closest('a, button'));
        };
        
        const onMouseDown = () => setIsMouseDown(true);
        const onMouseUp = () => setIsMouseDown(false);

        const animate = () => {
            const { x, y } = positionRef.current;
            const { x: followerX, y: followerY } = followerPositionRef.current;

            followerPositionRef.current.x += (x - followerX) * 0.2;
            followerPositionRef.current.y += (y - followerY) * 0.2;

            if (mainCursorRef.current) {
                mainCursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
            }
            if (followerCursorRef.current) {
                followerCursorRef.current.style.transform = `translate3d(${followerPositionRef.current.x}px, ${followerPositionRef.current.y}px, 0) translate(-50%, -50%)`;
            }

            animationFrameRef.current = requestAnimationFrame(animate);
        };

        window.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseover', onMouseOver);
        window.addEventListener('mousedown', onMouseDown);
        window.addEventListener('mouseup', onMouseUp);
        document.body.style.cursor = 'none';

        animate();

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseover', onMouseOver);
            window.removeEventListener('mousedown', onMouseDown);
            window.removeEventListener('mouseup', onMouseUp);
            document.body.style.cursor = 'auto';
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, []);

    const mainCursorSize = isHovering ? 24 : 8;
    const followerCursorSize = isHovering ? 0 : 32;

    return (
        <>
            <div 
                ref={mainCursorRef} 
                className="fixed rounded-full bg-white pointer-events-none z-50 transition-all duration-300 ease-out"
                style={{
                    width: `${mainCursorSize}px`,
                    height: `${mainCursorSize}px`,
                    mixBlendMode: 'difference',
                    transform: `scale(${isMouseDown ? 0.8 : 1})`
                }}
            />
            <div 
                ref={followerCursorRef} 
                className="fixed rounded-full border border-white pointer-events-none z-50 transition-all duration-300 ease-out"
                style={{
                    width: `${followerCursorSize}px`,
                    height: `${followerCursorSize}px`,
                    mixBlendMode: 'difference',
                    opacity: isHovering ? 0 : 1,
                    transform: `scale(${isMouseDown ? 1.2 : 1})`
                }}
            />
        </>
    );
};

export default CustomCursor;
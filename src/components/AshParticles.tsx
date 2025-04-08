
import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  rotation: number;
  rotationSpeed: number;
  color: string; // Added color property
}

const AshParticles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Set initial canvas size
    setCanvasSize();

    // Adjust canvas size on window resize
    window.addEventListener('resize', setCanvasSize);

    // Create particles
    const createParticles = () => {
      const particles: Particle[] = [];
      const particleCount = Math.floor(window.innerWidth / 20); // Reduced count for smaller particles

      for (let i = 0; i < particleCount; i++) {
        // Determine if this particle will be red or gray (40% chance of red)
        const isRed = Math.random() < 0.4;
        const color = isRed ? 
          `rgba(${200 + Math.random() * 55}, ${60 + Math.random() * 20}, ${60 + Math.random() * 20}, ${Math.random() * 0.5 + 0.2})` : 
          `rgba(${200 + Math.random() * 55}, ${200 + Math.random() * 55}, ${200 + Math.random() * 55}, ${Math.random() * 0.5 + 0.1})`;
        
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height * -1, // Start above the viewport
          size: Math.random() * 3 + 0.5, // Smaller sizes between 0.5 and 3.5
          speed: Math.random() * 1.5 + 0.3, // Slightly slower for a softer fall
          opacity: Math.random() * 0.5 + 0.1, // Lower opacity
          rotation: Math.random() * 360,
          rotationSpeed: (Math.random() - 0.5) * 0.2,
          color: color
        });
      }

      particlesRef.current = particles;
    };

    createParticles();

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particlesRef.current.forEach((particle, index) => {
        ctx.save();
        ctx.translate(particle.x, particle.y);
        ctx.rotate((particle.rotation * Math.PI) / 180);
        
        // Draw ash particle with its color
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        
        // Randomly choose between circle and square for some variety
        if (Math.random() > 0.7) {
          ctx.rect(-particle.size / 2, -particle.size / 2, particle.size, particle.size);
        } else {
          ctx.arc(0, 0, particle.size / 2, 0, Math.PI * 2);
        }
        
        ctx.fill();
        
        ctx.restore();
        
        // Update particle position
        particle.y += particle.speed;
        particle.rotation += particle.rotationSpeed;
        
        // Reset particle if it goes off screen
        if (particle.y > canvas.height) {
          particle.y = Math.random() * (canvas.height * -0.5);
          particle.x = Math.random() * canvas.width;
        }
        
        // Update particle in array
        particlesRef.current[index] = particle;
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full z-10 pointer-events-none"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default AshParticles;

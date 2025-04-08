
import React, { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  rotation: number;
  rotationSpeed: number;
  color: string;
  isRed: boolean;
  originalSize: number;
}

const AshParticles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>(0);
  const mouseRef = useRef<{ x: number, y: number, active: boolean }>({ x: 0, y: 0, active: false });
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setCanvasSize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      setDimensions({ width, height });
    };

    // Set initial canvas size
    setCanvasSize();

    // Adjust canvas size on window resize
    window.addEventListener('resize', setCanvasSize);

    // Create particles
    const createParticles = () => {
      const particles: Particle[] = [];
      const particleCount = Math.floor(window.innerWidth / 10); // More particles for better interaction

      for (let i = 0; i < particleCount; i++) {
        // Determine if this particle will be red or gray (40% chance of red)
        const isRed = Math.random() < 0.4;
        const baseSize = Math.random() * 2 + 0.5; // Smaller sizes between 0.5 and 2.5
        const color = isRed ? 
          `rgba(${200 + Math.random() * 55}, ${60 + Math.random() * 20}, ${60 + Math.random() * 20}, ${Math.random() * 0.5 + 0.2})` : 
          `rgba(${200 + Math.random() * 55}, ${200 + Math.random() * 55}, ${200 + Math.random() * 55}, ${Math.random() * 0.5 + 0.1})`;
        
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height * -1, // Start above the viewport
          size: baseSize, // Current size
          originalSize: baseSize, // Original size to return to
          speed: Math.random() * 1.5 + 0.3, // Slightly slower for a softer fall
          opacity: Math.random() * 0.5 + 0.1, // Lower opacity
          rotation: Math.random() * 360,
          rotationSpeed: (Math.random() - 0.5) * 0.2,
          color: color,
          isRed: isRed
        });
      }

      particlesRef.current = particles;
    };

    createParticles();

    // Mouse move handler for particle interaction
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { 
        x: e.clientX, 
        y: e.clientY, 
        active: true 
      };
    };

    // Mouse leave handler
    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    // Add mouse event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particlesRef.current.forEach((particle, index) => {
        // Check if particle is close to mouse cursor (if mouse is active)
        let distanceEffect = 0;
        if (mouseRef.current.active) {
          const dx = particle.x - mouseRef.current.x;
          const dy = particle.y - mouseRef.current.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const interactionRadius = 180; // Increased mouse interaction radius
          
          if (distance < interactionRadius) {
            distanceEffect = 1 - (distance / interactionRadius);
            
            // Increase size based on proximity to cursor (more pronounced)
            particle.size = particle.originalSize + (distanceEffect * 5);
            
            // Add glare/bloom effect (increase opacity and shadow)
            ctx.shadowBlur = 20 * distanceEffect;
            ctx.shadowColor = particle.isRed ? 'rgba(255,100,100,0.9)' : 'rgba(255,255,255,0.9)';
            
            // More dramatic repulsion from cursor
            particle.x += (dx / distance) * distanceEffect * 1;
            particle.y += (dy / distance) * distanceEffect * 1;
            
            // Add glow effect
            const glowRadius = particle.size * 2;
            const gradient = ctx.createRadialGradient(
              particle.x, particle.y, 0,
              particle.x, particle.y, glowRadius
            );
            
            const glowColor = particle.isRed ? 
              'rgba(255,100,100,0.4)' : 
              'rgba(255,255,255,0.3)';
            
            gradient.addColorStop(0, glowColor);
            gradient.addColorStop(1, 'rgba(0,0,0,0)');
            
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, glowRadius, 0, Math.PI * 2);
            ctx.fill();
          } else {
            particle.size = particle.originalSize;
            ctx.shadowBlur = 0;
          }
        } else {
          particle.size = particle.originalSize;
          ctx.shadowBlur = 0;
        }
        
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
          particle.size = particle.originalSize;
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
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
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

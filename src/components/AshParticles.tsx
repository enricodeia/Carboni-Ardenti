
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

interface MouseState {
  x: number;
  y: number;
  active: boolean;
}

const AshParticles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>(0);
  const mouseRef = useRef<MouseState>({ x: 0, y: 0, active: false });
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Set canvas dimensions and handle window resize
  const setCanvasSize = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const width = window.innerWidth;
    const height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    setDimensions({ width, height });
  };

  // Create a single particle with random properties
  const createParticle = (): Particle => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return {} as Particle;
    }
    
    const isRed = Math.random() < 0.4;
    const baseSize = Math.random() * 2 + 0.5;
    const color = isRed ? 
      `rgba(${200 + Math.random() * 55}, ${60 + Math.random() * 20}, ${60 + Math.random() * 20}, ${Math.random() * 0.5 + 0.2})` : 
      `rgba(${200 + Math.random() * 55}, ${200 + Math.random() * 55}, ${200 + Math.random() * 55}, ${Math.random() * 0.5 + 0.1})`;
    
    return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height * -1,
      size: baseSize,
      originalSize: baseSize,
      speed: Math.random() * 1.5 + 0.3,
      opacity: Math.random() * 0.5 + 0.1,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 0.2,
      color: color,
      isRed: isRed
    };
  };

  // Initialize particles
  const createParticles = () => {
    const particleCount = Math.floor(window.innerWidth / 10);
    const particles: Particle[] = [];
    
    for (let i = 0; i < particleCount; i++) {
      particles.push(createParticle());
    }
    
    particlesRef.current = particles;
  };

  // Handle mouse interaction with particles
  const handleMouseInteraction = (particle: Particle): Particle => {
    const updatedParticle = { ...particle };
    
    if (mouseRef.current.active) {
      const dx = particle.x - mouseRef.current.x;
      const dy = particle.y - mouseRef.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const interactionRadius = 180;
      
      if (distance < interactionRadius) {
        const distanceEffect = 1 - (distance / interactionRadius);
        
        // Increase size based on proximity to cursor
        updatedParticle.size = particle.originalSize + (distanceEffect * 5);
        
        // Add repulsion from cursor
        updatedParticle.x += (dx / distance) * distanceEffect * 1;
        updatedParticle.y += (dy / distance) * distanceEffect * 1;
        
        return updatedParticle;
      }
    }
    
    updatedParticle.size = particle.originalSize;
    return updatedParticle;
  };

  // Draw a single particle on the canvas
  const drawParticle = (ctx: CanvasRenderingContext2D, particle: Particle) => {
    ctx.save();
    ctx.translate(particle.x, particle.y);
    ctx.rotate((particle.rotation * Math.PI) / 180);
    
    // Set shadow/glow effect if close to mouse
    if (mouseRef.current.active) {
      const dx = particle.x - mouseRef.current.x;
      const dy = particle.y - mouseRef.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const interactionRadius = 180;
      
      if (distance < interactionRadius) {
        const distanceEffect = 1 - (distance / interactionRadius);
        
        // Add shadow blur effect
        ctx.shadowBlur = 20 * distanceEffect;
        ctx.shadowColor = particle.isRed ? 'rgba(255,100,100,0.9)' : 'rgba(255,255,255,0.9)';
        
        // Add glow effect
        const glowRadius = particle.size * 2;
        const gradient = ctx.createRadialGradient(
          0, 0, 0,
          0, 0, glowRadius
        );
        
        const glowColor = particle.isRed ? 
          'rgba(255,100,100,0.4)' : 
          'rgba(255,255,255,0.3)';
        
        gradient.addColorStop(0, glowColor);
        gradient.addColorStop(1, 'rgba(0,0,0,0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(0, 0, glowRadius, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    // Draw ash particle with its color
    ctx.fillStyle = particle.color;
    ctx.beginPath();
    
    // Random shape (circle or square)
    if (Math.random() > 0.7) {
      ctx.rect(-particle.size / 2, -particle.size / 2, particle.size, particle.size);
    } else {
      ctx.arc(0, 0, particle.size / 2, 0, Math.PI * 2);
    }
    
    ctx.fill();
    ctx.restore();
  };

  // Update particle position and properties
  const updateParticle = (particle: Particle, canvas: HTMLCanvasElement): Particle => {
    const updatedParticle = { ...particle };
    
    // Update position
    updatedParticle.y += particle.speed;
    updatedParticle.rotation += particle.rotationSpeed;
    
    // Reset particle if it goes off screen
    if (updatedParticle.y > canvas.height) {
      updatedParticle.y = Math.random() * (canvas.height * -0.5);
      updatedParticle.x = Math.random() * canvas.width;
      updatedParticle.size = particle.originalSize;
    }
    
    return updatedParticle;
  };

  // Animation loop for particles
  const animate = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particlesRef.current = particlesRef.current.map((particle, index) => {
      // Apply mouse interaction
      const interactedParticle = handleMouseInteraction(particle);
      
      // Draw the particle
      drawParticle(ctx, interactedParticle);
      
      // Update particle position and return
      return updateParticle(interactedParticle, canvas);
    });
    
    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Initialize canvas size
    setCanvasSize();
    
    // Create initial particles
    createParticles();
    
    // Mouse event handlers
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { 
        x: e.clientX, 
        y: e.clientY, 
        active: true 
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };
    
    // Add event listeners
    window.addEventListener('resize', setCanvasSize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    
    // Start animation
    animate();
    
    // Cleanup
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

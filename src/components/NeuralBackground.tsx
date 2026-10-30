import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseAlpha: number;
  color: string;
}

interface Pulse {
  sourceIndex: number;
  targetIndex: number;
  progress: number;
  speed: number;
}

export const NeuralBackground: React.FC<{ isLight?: boolean }> = ({ isLight = false }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Node configuration
    const nodeCount = Math.min(Math.floor((width * height) / 9500), 45);
    const connectionDistance = 140;
    const colors = isLight
      ? ['#4f46e5', '#2563eb', '#0891b2']
      : ['#3b82f6', '#06b6d4', '#8b5cf6'];

    const particles: Particle[] = [];
    for (let i = 0; i < nodeCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 2 + 1.8,
        baseAlpha: Math.random() * 0.4 + 0.35,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    const pulses: Pulse[] = [];
    let mouse = { x: -1000, y: -1000, active: false };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Randomly spawn pulses between nearby nodes
      if (!prefersReducedMotion && Math.random() < 0.04 && pulses.length < 8) {
        const i = Math.floor(Math.random() * particles.length);
        const candidates: number[] = [];
        for (let j = 0; j < particles.length; j++) {
          if (i === j) continue;
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.hypot(dx, dy);
          if (dist < connectionDistance) {
            candidates.push(j);
          }
        }
        if (candidates.length > 0) {
          const target = candidates[Math.floor(Math.random() * candidates.length)];
          pulses.push({
            sourceIndex: i,
            targetIndex: target,
            progress: 0,
            speed: 0.015 + Math.random() * 0.015
          });
        }
      }

      // Update and draw connections
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        // Move nodes
        if (!prefersReducedMotion) {
          p1.x += p1.vx;
          p1.y += p1.vy;

          if (p1.x < 0 || p1.x > width) p1.vx *= -1;
          if (p1.y < 0 || p1.y > height) p1.vy *= -1;
        }

        // Draw links
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.hypot(dx, dy);

          if (dist < connectionDistance) {
            const alpha = (1 - dist / connectionDistance) * (isLight ? 0.16 : 0.22);
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = isLight
              ? `rgba(99, 102, 241, ${alpha})`
              : `rgba(59, 130, 246, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }

        // Mouse interaction: draw subtle connection to cursor
        if (mouse.active) {
          const mdx = p1.x - mouse.x;
          const mdy = p1.y - mouse.y;
          const mdist = Math.hypot(mdx, mdy);
          if (mdist < 130) {
            const malpha = (1 - mdist / 130) * (isLight ? 0.35 : 0.45);
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = isLight
              ? `rgba(14, 165, 233, ${malpha})`
              : `rgba(6, 182, 212, ${malpha})`;
            ctx.lineWidth = 1.2;
            ctx.stroke();
          }
        }
      }

      // Update and draw signal pulses
      for (let k = pulses.length - 1; k >= 0; k--) {
        const pulse = pulses[k];
        pulse.progress += pulse.speed;

        if (pulse.progress >= 1) {
          pulses.splice(k, 1);
          continue;
        }

        const pSource = particles[pulse.sourceIndex];
        const pTarget = particles[pulse.targetIndex];
        if (!pSource || !pTarget) continue;

        const pulseX = pSource.x + (pTarget.x - pSource.x) * pulse.progress;
        const pulseY = pSource.y + (pTarget.y - pSource.y) * pulse.progress;

        ctx.beginPath();
        ctx.arc(pulseX, pulseY, 2.4, 0, Math.PI * 2);
        ctx.fillStyle = isLight ? 'rgba(79, 70, 229, 0.85)' : 'rgba(6, 182, 212, 0.9)';
        ctx.fill();
      }

      // Draw particle nodes
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.baseAlpha;
        ctx.fill();
        ctx.globalAlpha = 1;
      }

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isLight]);

  return (
    <div className="absolute inset-0 pointer-events-auto overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full h-full block opacity-80"
        aria-hidden="true"
      />
      {/* Subtle vignette radial mask so edges fade gracefully */}
      <div className="absolute inset-0 pointer-events-none bg-radial-gradient [background:radial-gradient(circle_at_center,transparent_40%,var(--bg-primary)_100%)]" />
    </div>
  );
};

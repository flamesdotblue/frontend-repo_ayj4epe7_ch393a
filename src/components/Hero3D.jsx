import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Brain, Cpu, Sparkles } from 'lucide-react';

export default function Hero3D() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Subtle gradient overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent dark:from-neutral-950 dark:via-neutral-950/30" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-black/5 dark:border-white/10 bg-white/70 dark:bg-neutral-900/70 px-3 py-1 text-xs font-medium backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-fuchsia-600" />
            Interactive 3D • Machine Learning • XR
          </div>

          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-[1.1]">
            Building intelligent and immersive experiences
          </h1>

          <p className="mt-4 text-neutral-700 dark:text-neutral-300 text-base sm:text-lg">
            I’m an ML/XR developer crafting real‑time, spatial interfaces powered by neural models. I blend computer vision, generative AI, and 3D systems to turn ideas into delightful products.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="inline-flex items-center justify-center rounded-md bg-fuchsia-600 px-5 py-2.5 text-white font-medium hover:bg-fuchsia-700 transition-colors"
            >
              Explore Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md border border-black/5 dark:border-white/10 bg-white/70 dark:bg-neutral-900/70 px-5 py-2.5 text-neutral-900 dark:text-white font-medium hover:border-fuchsia-500/40"
            >
              Get in Touch
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4">
            <Feature icon={<Brain className="h-4 w-4" />} label="Generative + CV" />
            <Feature icon={<Cpu className="h-4 w-4" />} label="Real-time" />
            <Feature icon={<Sparkles className="h-4 w-4" />} label="Playful UX" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Feature({ icon, label }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="inline-flex items-center gap-2 rounded-lg border border-black/5 dark:border-white/10 bg-white/70 dark:bg-neutral-900/70 px-3 py-2 text-sm font-medium backdrop-blur text-neutral-800 dark:text-neutral-200"
    >
      {icon}
      <span>{label}</span>
    </motion.div>
  );
}

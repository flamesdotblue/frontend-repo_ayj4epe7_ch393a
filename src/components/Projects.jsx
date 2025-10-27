import { motion } from 'framer-motion';
import { ExternalLink, Layers, Cpu, Box } from 'lucide-react';

const projects = [
  {
    title: 'Spatial Style Transfer',
    tag: 'XR + Vision',
    description:
      'Neural style transfer running on-device in a mixed reality environment with hand-anchored UI and occlusion-aware rendering.',
    tech: ['PyTorch', 'WebXR', 'Three.js'],
    link: '#',
    icon: Layers,
  },
  {
    title: 'Realtime Gesture Control',
    tag: 'ML + HCI',
    description:
      'Lightweight keypoint detector that maps hand gestures to 3D interactions for creative tools and accessibility workflows.',
    tech: ['TensorRT', 'OpenCV', 'ONNX'],
    link: '#',
    icon: Cpu,
  },
  {
    title: 'Procedural Worlds',
    tag: '3D Systems',
    description:
      'GPU-driven instancing and SDF modeling to generate playful, explorable worlds with physics-based interactions.',
    tech: ['GLSL', 'three-stdlib', 'WebGPU'],
    link: '#',
    icon: Box,
  },
];

export default function Projects() {
  return (
    <section id="work" className="relative py-24 bg-white dark:bg-neutral-950">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-fuchsia-500/5 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white"
        >
          Selected Work
        </motion.h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />)
          )}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  const Icon = project.icon;
  return (
    <motion.a
      href={project.link}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group relative rounded-2xl border border-black/5 dark:border-white/10 bg-white/80 dark:bg-neutral-900/70 backdrop-blur p-5 flex flex-col hover:border-fuchsia-500/40 hover:shadow-[0_8px_40px_-12px_rgba(217,70,239,0.25)]"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm font-medium text-fuchsia-600">
          <Icon className="h-4 w-4" />
          {project.tag}
        </div>
        <ExternalLink className="h-4 w-4 text-neutral-400 group-hover:text-fuchsia-500 transition-colors" />
      </div>

      <h3 className="mt-3 text-lg font-semibold text-neutral-900 dark:text-white">
        {project.title}
      </h3>
      <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300 line-clamp-3">
        {project.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span key={t} className="text-xs px-2 py-1 rounded-md bg-fuchsia-500/10 text-fuchsia-700 dark:text-fuchsia-300 border border-fuchsia-500/20">
            {t}
          </span>
        ))}
      </div>
    </motion.a>
  );
}

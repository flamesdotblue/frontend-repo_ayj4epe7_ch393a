import { motion } from 'framer-motion';
import { Send, Github, Linkedin, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-fuchsia-500/10 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white"
        >
          Let’s build something immersive
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-3 text-neutral-700 dark:text-neutral-300"
        >
          Open to collaborations, R&D, and prototyping around ML, computer vision, and XR.
        </motion.p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center gap-2 rounded-md bg-fuchsia-600 px-5 py-2.5 text-white font-medium hover:bg-fuchsia-700 transition-colors"
          >
            <Send className="h-4 w-4" /> Email Me
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-black/5 dark:border-white/10 bg-white/70 dark:bg-neutral-900/70 px-5 py-2.5 text-neutral-900 dark:text-white font-medium hover:border-fuchsia-500/40"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-black/5 dark:border-white/10 bg-white/70 dark:bg-neutral-900/70 px-5 py-2.5 text-neutral-900 dark:text-white font-medium hover:border-fuchsia-500/40"
          >
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
        </div>

        <p className="mt-8 text-xs text-neutral-500">
          © {new Date().getFullYear()} ML/XR Developer — Built with love for interactive tech
        </p>
      </div>
    </section>
  );
}

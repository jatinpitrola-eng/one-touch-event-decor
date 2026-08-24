'use client';

import { motion } from 'framer-motion';
import { OrnamentDivider } from './background';

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = 'center',
  dark = false,
  className = '',
}: {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: 'center' | 'left';
  dark?: boolean;
  className?: string;
}) {
  const isCenter = align === 'center';
  return (
    <div
      className={`${isCenter ? 'mx-auto text-center' : 'text-left'} max-w-2xl ${className}`}
    >
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className={`eyebrow ${dark ? 'text-blush' : 'text-copper'} ${isCenter ? 'flex items-center justify-center' : 'inline-flex items-center'}`}
        >
          {isCenter && <span className="mr-3 h-px w-8 bg-copper/50" />}
          {eyebrow}
          {isCenter && <span className="ml-3 h-px w-8 bg-copper/50" />}
        </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className={`mt-4 font-display text-3xl leading-tight sm:text-4xl lg:text-5xl ${
          dark ? 'text-cream' : 'text-charcoal'
        }`}
      >
        {title}{' '}
        {highlight && (
          <span className={`italic ${dark ? 'text-blush' : 'text-gradient-emerald'}`}>
            {highlight}
          </span>
        )}
      </motion.h2>
      {isCenter && (
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-5"
        >
          <OrnamentDivider className={dark ? 'text-blush' : ''} />
        </motion.div>
      )}
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className={`mx-auto mt-5 max-w-xl text-base leading-relaxed ${
            dark ? 'text-cream/70' : 'text-muted-foreground'
          } ${isCenter ? '' : 'lg:mr-0'}`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}

'use client';

import { Section } from '@/components/section';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import Image from 'next/image';
import { useState } from 'react';

const showcaseItems = [
  {
    id: 'calendar',
    label: 'Calendar',
    title: 'Your daily flow, visualized.',
    description:
      'Manage appointments effortlessly with a comprehensive calendar view. See staff schedules at a glance, color-coded for quick reference, and fully synced with your clinic\'s workflow.',
    image: '/opticai-landingpage-screenshot/calendar.png',
    alt: 'Prysm calendar view showing daily clinic schedule',
    objectPosition: 'object-left-top',
  },
  {
    id: 'records',
    label: 'Medical Records',
    title: 'Every visit, every finding — one timeline.',
    description:
      'Full medical history with exam logs, AI-generated insights, and personal details in a single scrollable view. Track across years and see the complete picture before any appointment.',
    image: '/opticai-landingpage-screenshot/client-logs.png',
    alt: 'Prysm medical records timeline with exam history and AI insights',
    objectPosition: 'object-left-top',
  },
  {
    id: 'exam',
    label: 'Clinical Exams',
    title: 'Modular exam workflows, built for optometry.',
    description:
      'Customize exam layouts with 20+ optometry-specific components. Drag-and-drop cards for refraction, slit lamp, fundus, and more — then generate prescriptions directly.',
    image: '/opticai-landingpage-screenshot/exam-page.png',
    alt: 'Prysm clinical exam page with optometry components',
    objectPosition: 'object-left-top',
  },
  {
    id: 'ai',
    label: 'AI Assistant',
    title: 'Talk to your clinic data.',
    description:
      'Reschedule appointments, search clients, or summarize clinical findings — in natural language. The assistant understands your clinic context and shows real-time tool progress.',
    image: '/opticai-landingpage-screenshot/ai-assistant.png',
    alt: 'Prysm AI assistant chat interface with appointment rescheduling',
    objectPosition: 'object-left-top',
  },
  {
    id: 'clinics',
    label: 'Multi-Clinic',
    title: 'Every branch, one control center.',
    description:
      'Each clinic has its own profile, status, entry PIN, and team. Company admins get cross-branch visibility, analytics, and user management — without switching contexts.',
    image: '/opticai-landingpage-screenshot/multi-clinics.png',
    alt: 'Prysm multi-clinic dashboard showing five optical clinic branches',
    objectPosition: 'object-right-top',
  },
];

const Showcase = () => {
  const [active, setActive] = useState(0);
  const current = showcaseItems[active];

  return (
    <Section className='relative w-full'>
      <div className='flex flex-col'>
        {/* Header */}
        <div className='flex flex-col gap-2 px-6 py-10 md:py-14'>
          <h2 className='max-w-xl text-left font-regular text-3xl tracking-tighter md:text-5xl'>
            See Prysm in Action
          </h2>
          <p className='max-w-lg text-left text-lg text-muted-foreground leading-relaxed tracking-tight'>
            Real screenshots from the live product — not mockups, not promises.
          </p>
        </div>

        {/* Tabbed Showcase */}
        <div className='border-border border-t border-dashed'>
          {/* Tab Bar */}
          <div className='flex border-border border-b border-dashed'>
            {showcaseItems.map((item, index) => (
              <button
                key={item.id}
                type='button'
                onClick={() => setActive(index)}
                className={cn(
                  'relative flex-1 px-4 py-3 text-center text-sm font-medium transition-colors',
                  index !== 0 && 'border-border border-l border-dashed',
                  active === index
                    ? 'bg-foreground text-background'
                    : 'text-muted-foreground hover:bg-muted/40 hover:text-foreground',
                )}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className='grid grid-cols-1 lg:grid-cols-5 py-6 md:py-10'>
            {/* Text Panel */}
            <div className='flex flex-col justify-center gap-4 border-border p-6 md:p-10 lg:col-span-2 lg:border-r lg:border-dashed'>
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className='flex flex-col gap-3'
              >
                <h3 className='text-2xl font-medium tracking-tight md:text-3xl'>
                  {current.title}
                </h3>
                <p className='text-sm leading-relaxed text-muted-foreground md:text-base'>
                  {current.description}
                </p>
              </motion.div>
            </div>

            {/* Screenshot Panel */}
            <div className='relative lg:col-span-3 overflow-hidden bg-muted/20'>
              <motion.div
                key={current.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className='relative aspect-[16/10] w-full'
              >
                <Image
                  src={current.image}
                  alt={current.alt}
                  fill
                  className={cn('object-cover', current.objectPosition)}
                  sizes='(max-width: 1024px) 100vw, 60vw'
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Showcase;

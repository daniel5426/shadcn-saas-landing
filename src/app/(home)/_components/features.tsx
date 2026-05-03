'use client';

import { Section } from '@/components/section';
import {
  Building2 as BuildingIcon,
  CalendarDays as CalendarIcon,
  Eye as EyeIcon,
  FileText as FileIcon,
  Sparkles as SparklesIcon,
  Users as UsersIcon,
} from 'lucide-react';

const features = [
  {
    Icon: CalendarIcon,
    title: 'Smart Scheduling',
    description:
      'Day, week, and month views with staff color-coding, vacation checks, and Google Calendar sync.',
  },
  {
    Icon: UsersIcon,
    title: 'Client & Family CRM',
    description:
      'Full client records — contacts, medical history, family groups, notes, and health fund tracking.',
  },
  {
    Icon: EyeIcon,
    title: 'Clinical Exam Engine',
    description:
      'Custom layouts with 20+ optometry components, drag-and-drop cards, and prescription management.',
  },
  {
    Icon: FileIcon,
    title: 'Orders & Documents',
    description:
      'Glasses and CL order management with supplier details, billing, status tracking, and DOCX exports.',
  },
  {
    Icon: BuildingIcon,
    title: 'Multi-Clinic Control',
    description:
      'Company dashboard with cross-branch analytics, role-based access, and centralized administration.',
  },
  {
    Icon: SparklesIcon,
    title: 'AI Assistant',
    description:
      'Natural language search, appointment management, client summaries, and medical insights.',
  },
];

const Features = () => (
  <Section className='relative w-full'>
    <div className='flex flex-col'>
      {/* Header */}
      <div className='flex flex-col gap-2 px-6 py-10 md:py-14'>
        <h2 className='max-w-xl text-left font-regular text-3xl tracking-tighter md:text-5xl'>
          Everything Your Clinic Needs
        </h2>
        <p className='max-w-lg text-left text-lg text-muted-foreground leading-relaxed tracking-tight'>
          One workspace for the daily flow — from the waiting room to the exam chair to the back office.
        </p>
      </div>

      {/* Dense Feature Grid */}
      <div className='border-border border-t border-dashed'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className='group relative flex flex-col gap-3 border-border border-b border-dashed p-6 transition-colors hover:bg-muted/40 sm:even:border-l sm:even:border-dashed lg:border-l lg:border-dashed lg:first:border-l-0 lg:[&:nth-child(3n+1)]:border-l-0'
            >
              {/* Index + Icon Row */}
              <div className='flex items-center justify-between'>
                <feature.Icon className='size-5 stroke-[1.5] text-foreground/80' />
                <span className='font-mono text-[10px] tabular-nums text-muted-foreground/60'>
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>

              {/* Content */}
              <div className='flex flex-col gap-1'>
                <h3 className='text-[15px] font-medium tracking-tight'>
                  {feature.title}
                </h3>
                <p className='text-[13px] leading-relaxed text-muted-foreground'>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </Section>
);

export default Features;

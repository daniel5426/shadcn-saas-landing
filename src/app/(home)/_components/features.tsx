'use client';

import { Section } from '@/components/section';
import { cva } from 'class-variance-authority';
import {
  BarChart3 as BarChartIcon,
  Boxes as IntegrationsIcon,
  Brain as BrainIcon,
  Eye as EyeIcon,
  HandCoins as HandCoinsIcon,
  Users as UsersIcon,
} from 'lucide-react';

// Create a variant for feature items
const featureItemVariants = cva(
  'group flex flex-col justify-between gap-10 p-6 last:border-border last:border-b last:border-dashed hover:bg-card hover:bg-card/80 sm:gap-22 md:gap-34 lg:gap-46',
  {
    variants: {
      size: {
        sm: '',
        lg: 'lg:col-span-2',
      },
    },
    defaultVariants: {
      size: 'sm',
    },
  },
);

const features = [
  {
    id: 1,
    Icon: IntegrationsIcon,
    title: 'Multi-Clinic Architecture',
    description:
      'Company-wide management with clinic isolation, role-based access control, and secure data separation.',
    size: 'lg',
  },
  {
    id: 2,
    Icon: UsersIcon,
    title: 'Client Management',
    description:
      'Comprehensive client database with family relationships, referral tracking, and medical history.',
    size: 'sm',
  },
  {
    id: 3,
    Icon: EyeIcon,
    title: 'Advanced Eye Exams',
    description:
      'Customizable exam components (subjective, objective, etc.) with unified data storage and prescription management.',
    size: 'sm',
  },
  {
    id: 4,
    Icon: BrainIcon,
    title: 'AI-Powered Assistant',
    description:
      'Intelligent operations assistant for natural language queries, appointment management, and medical insights.',
    size: 'lg',
  },
];

const Features = () => (
  <Section className='relative w-full pt-10'>
    <div className='flex flex-col gap-10'>
      <div className='flex flex-col gap-2 px-6'>
        <h2 className='max-w-xl text-left font-regular text-3xl tracking-tighter md:text-5xl'>
          Why Prysm?
        </h2>
        <p className='max-w-xl text-left text-lg text-muted-foreground leading-relaxed tracking-tight lg:max-w-lg'>
          Powerful features designed to modernize your optical clinic operations and improve patient care.
        </p>
      </div>

      <div className='w-full border-border border-t border-dashed pb-4'>
        <div className='grid grid-cols-1 divide-x divide-y divide-dashed divide-border text-left sm:grid-cols-2 lg:grid-cols-3'>
          {features.map((feature) => (
            <div
              key={feature.id}
              className={featureItemVariants({
                size: feature.size as 'sm' | 'lg',
              })}
            >
              <feature.Icon className='h-8 w-8 stroke-1 transition-transform hover:rotate-12 hover:scale-125' />
              <div className='flex flex-col '>
                <h3 className='text-xl tracking-tight transition-all'>
                  {feature.title}
                </h3>
                <p className='max-w-xs text-base text-muted-foreground transition-all'>
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

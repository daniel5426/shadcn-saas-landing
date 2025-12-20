import { title as homeTitle } from '@/app/layout.config';
import { Section } from '@/components/section';
import { createMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import Link from 'next/link';

const LAST_UPDATED = 'March 2, 2025';

export default function TermsOfService() {
  return (
    <>
      <Section className='p-4 text-center lg:p-6'>
        <h1 className='mb-2 font-bold text-3xl leading-tight tracking-tighter md:text-4xl'>
          Terms of Service
        </h1>
        <p className='text-muted-foreground text-sm'>
          Last updated: {LAST_UPDATED}
        </p>
      </Section>
      <Section>
        <div className='grid divide-y divide-dashed divide-border'>
          {sections.map((section) => (
            <div key={section.title} className='group p-6 transition-all'>
              <h2 className='mb-4 font-semibold text-xl tracking-tight'>
                {section.title}
              </h2>
              <div className='prose prose-sm prose-zinc dark:prose-invert max-w-none'>
                {section.content}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}

const sections = [
  {
    title: 'Overview',
    content: (
      <p>
        Prysm is a desktop-based optical clinic management system. By downloading, installing, 
        or using our software, you agree to these terms. These terms constitute a binding legal agreement 
        between you (either an individual or an entity) and Prysm.
      </p>
    ),
  },
  {
    title: 'Software License',
    content: (
      <div className='space-y-8'>
        <div>
          <h3 className='mb-3 font-medium text-card-foreground text-xl'>
            Grant of License
          </h3>
          <ul className='ml-4 list-disc space-y-2'>
            <li>
              We grant you a non-exclusive, non-transferable license to use the Prysm desktop application 
              for your internal business operations.
            </li>
            <li>
              The license is granted on a per-clinic usage basis, subject to your subscription plan.
            </li>
            <li>
              You may not reverse engineer, decompile, or disassemble the software.
            </li>
          </ul>
        </div>
        <div>
          <h3 className='mb-3 font-medium text-card-foreground text-xl'>
            Cloud Services
          </h3>
          <ul className='ml-4 list-disc space-y-2'>
            <li>
              Prysm provides cloud synchronization services to enable multi-clinic functionality.
            </li>
            <li>
              We reserve the right to suspend these services in case of non-payment or violation of terms.
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: 'User Obligations',
    content: (
      <div className='mt-4 space-y-3 text-muted-foreground'>
        <p>As a user of Prysm, you agree to:</p>
        <ul className='ml-4 list-disc space-y-2'>
          <li>Maintain the confidentiality of your authentication credentials.</li>
          <li>Ensure that your hardware meets the minimum system requirements.</li>
          <li>Use the software in compliance with all applicable healthcare regulations.</li>
          <li>Regularly backup your local data unless using our cloud backup service.</li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Intellectual Property',
    content: (
      <div className='mt-4 space-y-3 text-muted-foreground'>
        <p>
          The Prysm software, including its code, design, and documentation, is the exclusive property of Prysm 
          and is protected by copyright and intellectual property laws.
        </p>
      </div>
    ),
  },
  {
    title: 'Limitation of Liability',
    content: (
      <div className='mt-4 space-y-3 text-muted-foreground'>
        <p>
          To the maximum extent permitted by law, Prysm shall not be liable for any indirect, incidental, 
          or consequential damages arising from the use or inability to use the software, including but not 
          limited to loss of business profits or data.
        </p>
      </div>
    ),
  },
  {
    title: 'Contact Information',
    content: (
      <div className='mt-4 space-y-3 text-muted-foreground'>
        <p>
          For any questions or concerns regarding these terms, please contact us at:
        </p>
        <div className='flex flex-col space-y-2'>
          <a
            href='mailto:danielbenassaya2626@gmail.com'
            className='inline-flex items-center text-fd-primary underline duration-300 hover:text-fd-primary/70'
          >
            danielbenassaya2626@gmail.com
          </a>
          <span className='text-sm'>+972-58-433-5665</span>
        </div>
      </div>
    ),
  },
];

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}): Promise<Metadata> {
  const params = await props.params;
  const description = `Terms of service for ${homeTitle}. Last updated on ${LAST_UPDATED}.`;

  return createMetadata({
    title: 'Terms of Service',
    description,
    openGraph: {
      url: '/terms',
    },
    alternates: {
      canonical: '/terms',
    },
  });
}

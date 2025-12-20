import { title as homeTitle } from '@/app/layout.config';
import { InlineLink } from '@/components/inline-link';
import { Section } from '@/components/section';
import { createMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';

const LAST_UPDATED = 'March 2, 2025';

export default function PrivacyPolicy() {
  return (
    <>
      <Section className='p-4 text-center lg:p-6'>
        <h1 className='mb-2 font-bold text-3xl leading-tight tracking-tighter md:text-4xl'>
          Privacy Policy
        </h1>
        <div className='flex items-center justify-center gap-2'>
          <p className='text-muted-foreground text-sm'>
            Last updated: {LAST_UPDATED}
          </p>
          <span className='text-muted-foreground text-sm'>•</span>
          <InlineLink href='/terms' className='text-sm'>
            Terms of Service
          </InlineLink>
        </div>
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
    title: 'Our Commitment to Privacy',
    content: (
      <p>
        Prysm is committed to protecting the privacy and confidentiality of patient health information. 
        As a desktop application designed for optical clinics, we implement robust security measures 
        to safeguard sensitive medical data in accordance with healthcare privacy standards.
      </p>
    ),
  },
  {
    title: 'Data Collection and Storage',
    content: (
      <ul className='ml-4 list-disc space-y-2'>
        <li>
          Patient records, exam results, and medical history are stored locally on your system 
          and synchronized securely across your clinic network.
        </li>
        <li>
          We collect only essential information needed to provide clinic management services, 
          including patient demographics, examination data, and billing information.
        </li>
        <li>
          All patient health information is encrypted both in transit and at rest using 
          industry-standard encryption protocols.
        </li>
        <li>
          Authentication data (Google OAuth) is handled securely and never stored locally.
        </li>
      </ul>
    ),
  },
  {
    title: 'Healthcare Data Protection',
    content: (
      <div className='space-y-2'>
        <p>
          Prysm is designed with healthcare privacy regulations in mind:
        </p>
        <ul className='ml-4 list-disc space-y-2'>
          <li>Patient data is segregated by clinic with role-based access control.</li>
          <li>Audit logs track all access to patient records for compliance purposes.</li>
          <li>Data is never shared with third parties without explicit authorization.</li>
          <li>Backup and recovery procedures ensure data integrity and availability.</li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Third-Party Services',
    content: (
      <p>
        Prysm uses limited third-party services including Google OAuth for authentication 
        and OpenAI for AI-assisted features. These services are configured to minimize 
        exposure of protected health information and comply with applicable privacy standards.
      </p>
    ),
  },
  {
    title: 'Your Rights and Controls',
    content: (
      <ul className='ml-4 list-disc space-y-2'>
        <li>Access, modify, and export patient data at any time through the application.</li>
        <li>Control user permissions and access levels for staff members.</li>
        <li>Request complete data deletion upon termination of service.</li>
        <li>Configure data retention policies to meet your regulatory requirements.</li>
      </ul>
    ),
  },
  {
    title: 'Contact Us',
    content: (
      <p>
        For questions about data privacy or security, please contact us at{' '}
        <a href='mailto:danielbenassaya2626@gmail.com' className='text-fd-primary underline'>
          danielbenassaya2626@gmail.com
        </a>
        {' '}or call +972-58-433-5665.
      </p>
    ),
  },
  {
    title: 'Updates to This Policy',
    content: (
      <p>
        We may update this privacy policy to reflect changes in our practices or legal requirements. 
        Users will be notified of significant changes through the application or via email.
      </p>
    ),
  },
];

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}): Promise<Metadata> {
  const params = await props.params;
  const description = `Privacy Policy for ${homeTitle}. Last updated on ${LAST_UPDATED}.`;

  return createMetadata({
    title: 'Privacy Policy',
    description,
    openGraph: {
      url: '/privacy',
    },
    alternates: {
      canonical: '/privacy',
    },
  });
}

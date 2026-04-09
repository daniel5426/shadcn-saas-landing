import { title as homeTitle } from '@/app/layout.config';
import { InlineLink } from '@/components/inline-link';
import { Section } from '@/components/section';
import { createMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';

const LAST_UPDATED = 'April 9, 2026';

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
    title: 'Overview',
    content: (
      <p>
        OpticAI is a desktop application for optical clinics. This policy
        explains what data we access, how we use it, how long we keep it, and
        how users can request deletion. For Google integrations, we access only
        the Google data needed to authenticate the user and sync calendar events
        that the user chooses to manage through the app.
      </p>
    ),
  },
  {
    title: 'Data Accessed',
    content: (
      <ul className='ml-4 list-disc space-y-2'>
        <li>
          Google account email address, and in some cases basic profile details
          returned by Google during OAuth sign-in, such as name and profile
          image.
        </li>
        <li>
          Google OAuth credentials required to maintain the connection,
          including access tokens and refresh tokens.
        </li>
        <li>
          Google Calendar data needed for the features you enable, including
          calendar events and event metadata.
        </li>
        <li>
          When a user syncs appointments to Google Calendar, event details may
          include the appointment title, date, time, duration, notes, and, if
          the clinic chooses, attendee details such as the client name and email
          address.
        </li>
      </ul>
    ),
  },
  {
    title: 'Google Scopes Used',
    content: (
      <div className='space-y-3'>
        <p>OpticAI currently uses the following Google OAuth scopes:</p>
        <ul className='ml-4 list-disc space-y-2'>
          <li>
            <code>https://www.googleapis.com/auth/calendar</code>
          </li>
          <li>
            <code>https://www.googleapis.com/auth/calendar.events</code>
          </li>
          <li>
            <code>https://www.googleapis.com/auth/userinfo.email</code>
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Data Usage',
    content: (
      <ul className='ml-4 list-disc space-y-2'>
        <li>Authenticate users and link their Google account to OpticAI.</li>
        <li>
          Create, update, delete, and read Google Calendar events requested by
          the user.
        </li>
        <li>
          Associate synced Google Calendar events with appointments inside the
          app so the clinic can manage scheduling workflows.
        </li>
        <li>
          Maintain the connection so the user does not need to reconnect every
          session.
        </li>
      </ul>
    ),
  },
  {
    title: 'Data Sharing',
    content: (
      <ul className='ml-4 list-disc space-y-2'>
        <li>
          We do not sell Google user data and we do not use Google user data for
          advertising.
        </li>
        <li>
          Google user data is shared with Google only as required to provide the
          authorized Google Calendar and account-linking features.
        </li>
        <li>
          We do not share Google user data with third parties except service
          providers acting on our behalf where necessary to operate the service,
          comply with the law, or protect rights and security.
        </li>
      </ul>
    ),
  },
  {
    title: 'Data Storage and Protection',
    content: (
      <ul className='ml-4 list-disc space-y-2'>
        <li>
          Google data is stored only to the extent needed to provide the
          integration, including linked Google account email, OAuth tokens, and
          related calendar sync references.
        </li>
        <li>
          We use reasonable technical and organizational safeguards to protect
          data in transit and at rest and to limit access to authorized
          personnel and systems.
        </li>
        <li>
          Access to connected Google data is limited to the functions requested
          by the user inside OpticAI.
        </li>
      </ul>
    ),
  },
  {
    title: 'Data Retention and Deletion',
    content: (
      <div className='space-y-3'>
        <p>
          We retain Google user data only for as long as needed to provide the
          requested integration and maintain the user’s connected account,
          unless a longer period is required by law.
        </p>
        <ul className='ml-4 list-disc space-y-2'>
          <li>
            Linked Google account details, OAuth tokens, and related calendar
            sync references are kept while the integration remains active.
          </li>
          <li>
            Users may request deletion of their Google-connected data by
            contacting us at{' '}
            <a
              href='mailto:danielbenassaya2626@gmail.com'
              className='text-fd-primary underline'
            >
              danielbenassaya2626@gmail.com
            </a>
            .
          </li>
          <li>
            Users may also request that their Google integration be
            disconnected, after which future Google Calendar syncing will stop.
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Your Rights and Contact',
    content: (
      <p>
        If you have questions about this policy, want to request access or
        deletion, or need help with your Google-connected data, contact{' '}
        <a
          href='mailto:danielbenassaya2626@gmail.com'
          className='text-fd-primary underline'
        >
          danielbenassaya2626@gmail.com
        </a>{' '}
        or call +972-58-433-5665.
      </p>
    ),
  },
  {
    title: 'Updates to This Policy',
    content: (
      <p>
        We may update this policy from time to time. Material changes will be
        reflected on this page by updating the effective date above.
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

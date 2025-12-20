import { InlineLink } from '@/components/inline-link';
import { Section } from '@/components/section';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faq = [
  {
    question: 'What is Prysm?',
    answer:
      'Prysm is a comprehensive multi-clinic management system designed specifically for optical clinics. It is a desktop application that combines patient management, eye exams, inventory, and billing in one unified platform.',
  },
  {
    question: 'Is Prysm cloud-based or on-premise?',
    answer:
      'Prysm is a modern desktop application (Electron) that offers the best of both worlds: the performance and offline capabilities of desktop software, with secure cloud synchronization for multi-clinic management.',
  },
  {
    question: 'Can I manage multiple clinic locations?',
    answer:
      'Yes! Prysm is built with multi-clinic architecture at its core. You can manage multiple locations, assign role-based access to staff, and view company-wide reports from a central dashboard.',
  },
  {
    question: 'Is my patient data secure?',
    answer:
      'Absolutely. We use industry-standard encryption, secure authentication (Google OAuth), and role-based access control to ensure your patient data is protected and private.',
  },
  {
    question: 'Can I migrate data from my current software?',
    answer:
      'Yes, we offer data migration services to help you move your existing patient records, history, and inventory into Prysm seamlessly.',
  },
];

export const FAQ = () => (
  <Section className='grid divide-y divide-dashed divide-border lg:grid-cols-2 lg:divide-x lg:divide-y-0'>
    <div className='flex flex-col gap-2 px-6 py-10 md:py-14'>
      <h4 className='max-w-xl text-left font-regular text-3xl tracking-tighter md:text-5xl'>
        Frequently Asked Questions
      </h4>
      <p className='max-w-xl text-left text-lg text-muted-foreground leading-relaxed tracking-tight lg:max-w-lg'>
        Still have questions?{' '}
        <InlineLink href='/contact' className='no-underline'>
          Contact Us
        </InlineLink>
      </p>
    </div>

    <Accordion
      type='single'
      collapsible
      className='w-full divide-dashed divide-border'
    >
      {faq.map((item, index) => (
        <AccordionItem
          key={`${item.question}-${index}`}
          value={`index-${index}`}
        >
          <AccordionTrigger className='rounded-none px-4 hover:bg-card hover:no-underline data-[state=open]:bg-card'>
            {item.question}
          </AccordionTrigger>
          <AccordionContent className='p-4'>{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  </Section>
);

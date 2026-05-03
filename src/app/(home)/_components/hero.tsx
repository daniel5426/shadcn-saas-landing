import { Icons } from '@/components/icons/icons';
import { Section } from '@/components/section';
import { Button } from '@/components/ui/button';
import { env } from '@/env';
import type { Page } from '@/lib/source';
import { MailIcon } from 'lucide-react';
import * as motion from 'motion/react-client';
import Image from 'next/image';
import Link from 'next/link';
import heroImage from '../../../../public/images/gradient-noise-purple-azure-light.png';

const Hero = ({ posts }: { posts: Page[] }) => (
  <Section className='relative w-full overflow-hidden bg-dashed px-4 py-16 sm:px-16 sm:py-24 md:py-32'>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.4,
        scale: { type: 'spring', visualDuration: 0.4, bounce: 0.5 },
      }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className='-z-10 absolute inset-0 h-full w-full'
    >
      <Image
        src={heroImage}
        alt='Hero Background'
        height={600}
        width={704}
        className='pointer-events-none absolute right-0 bottom-0 h-[900px] w-[1004px] max-w-[1004px] translate-x-1/2 translate-y-1/2 select-none opacity-80 dark:opacity-100'
        priority
      />
    </motion.div>
    <div className='mx-auto flex flex-col items-center justify-center gap-8'>
      <div className='flex flex-col gap-4'>
        <h1 className='max-w-2xl text-center font-regular text-5xl tracking-tighter md:text-7xl'>
          The Operating System
          <br />
          for Optical Clinics
        </h1>
        <p className='max-w-2xl text-center text-lg text-muted-foreground leading-relaxed tracking-tight md:text-xl'>
          Prysm is a desktop application that brings scheduling, client records,
          clinical exams, orders, referrals, and multi-clinic management into one
          connected workspace — built specifically for optical professionals.
        </p>
      </div>
      <div className='flex flex-row gap-3'>
        <Button
          size='lg'
          className='group gap-4 bg-muted/70 shadow-none'
          variant='outline'
          asChild
        >
          <Link href='/contact'>
            Get in touch{' '}
            <MailIcon className='group-hover:-rotate-12 size-4 transition-transform' />
          </Link>
        </Button>
        <Button size='lg' className='group gap-4' asChild>
          <Link href={env.NEXT_PUBLIC_APP_URL}>
            Request Demo{' '}
            <Icons.arrowUpRight className='group-hover:-rotate-12 size-4 transition-transform' />
          </Link>
        </Button>
      </div>

      {/* App Preview Screenshot */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
        className='mt-4 w-full max-w-4xl'
      >
        <div className='screenshot-frame'>
          <Image
            src='/opticai-landingpage-screenshot/client-detail.png'
            alt='Prysm — Client details workspace showing personal information, contact details, family management, and clinical notes'
            width={1400}
            height={900}
            className='w-full'
            priority
          />
        </div>
      </motion.div>
    </div>
  </Section>
);

export default Hero;

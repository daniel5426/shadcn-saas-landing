'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

import { Section } from '@/components/section';
import Autoplay from 'embla-carousel-auto-scroll';

const logos = [
  { name: 'Vercel' },
  { name: 'OpenAI' },
  { name: 'Claude' },
  { name: 'Next.js' },
  { name: 'Neon' },
];

export const Customers = ({
  count,
}: {
  count: number;
}) => {
  const closest = Math.floor(count / 50) * 50;

  return (
    <Section className='relative flex flex-col items-center justify-between gap-8 p-6 py-8 sm:flex-row sm:gap-16 md:py-10'>
      <p className='text-muted-foreground sm:max-w-xs'>
        {closest}+ companies already use Prysm to automate their workflows.
      </p>
      <div className='md:w-[50%]'>
        <Carousel
          plugins={[
            Autoplay({
              speed: 600 / 1000,
              startDelay: 100,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
            }),
          ]}
          opts={{
            align: 'start',
            dragFree: true,
            loop: true,
          }}
        >
          <CarouselContent>
            {logos.map((logo) => (
              <CarouselItem className='basis-1/4 md:basis-1/5' key={logo.name}>
                <div className='flex items-center justify-center'>
                  <span className='text-sm font-semibold text-muted-foreground opacity-50'>
                    {logo.name}
                  </span>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </Section>
  );
};

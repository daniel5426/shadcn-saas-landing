'use client';

import { Section } from '@/components/section';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { User } from 'lucide-react';
import { useEffect, useState } from 'react';

const testimonials = [
  {
    title: 'Streamlined our clinic',
    description:
      'Prysm has completely revolutionized how we handle our patient exams and billing. The interface is intuitive and fast.',
    author: {
      name: 'Dr. Sarah Cohen',
      image: 'https://github.com/shadcn.png', // Placeholder
    },
  },
  {
    title: 'Perfect for multi-location',
    description:
      'Managing three clinics was a nightmare until we switched to Prysm. The centralized control is exactly what we needed.',
    author: {
      name: 'David Levy',
      image: 'https://github.com/leerob.png', // Placeholder
    },
  },
  {
    title: 'Best eye exam module',
    description:
      'The eye examination features are incredibly detailed and customizable. It fits perfectly with our optometrists workflow.',
    author: {
      name: 'Rachel B.',
      image: 'https://github.com/haydenbleasel.png', // Placeholder
    },
  },
  {
    title: 'Outstanding support',
    description:
      'The support team helped us migrate all our old patient data seamlessly. Highly recommended!',
    author: {
      name: 'Michael Chen',
      image: 'https://github.com/pontusab.png', // Placeholder
    },
  },
];

const Testimonials = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent(current + 1);
      }
    }, 4000);
  }, [api, current]);

  return (
    <Section className='relative w-full pt-10'>
      <div className='flex flex-col gap-10'>
        <div className='flex flex-col gap-2 px-6'>
          <h2 className='max-w-xl text-left font-regular text-3xl tracking-tighter md:text-5xl'>
            Trusted by Professionals
          </h2>
          <p className='max-w-xl text-left text-lg text-muted-foreground leading-relaxed tracking-tight lg:max-w-lg'>
            See what optical clinic managers and optometrists are saying about Prysm.
          </p>
        </div>

        <Carousel
          setApi={setApi}
          className='w-full border-border border-t border-dashed'
        >
          <CarouselContent className='ml-0 divide-x divide-dashed divide-border'>
            {testimonials.map((item, index) => (
              <CarouselItem
                className='pl-0 lg:basis-1/2'
                key={`${item.title}_${index}`}
              >
                <div className='flex aspect-video flex-col justify-between p-6 hover:bg-card lg:col-span-2'>
                  <User className='h-8 w-8 stroke-1 transition-transform hover:rotate-12 hover:scale-125' />
                  <div className='flex flex-col gap-4'>
                    <div className='flex flex-col'>
                      <h3 className='text-xl tracking-tight'>{item.title}</h3>
                      <p className='max-w-xs text-base text-muted-foreground'>
                        {item.description}
                      </p>
                    </div>
                    <p className='flex flex-row items-center gap-2 text-sm'>
                      <span className='text-muted-foreground'>By</span>
                      <Avatar className='h-6 w-6'>
                        <AvatarImage src={item.author.image} />
                        <AvatarFallback>??</AvatarFallback>
                      </Avatar>
                      <span>{item.author.name}</span>
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </Section>
  );
};

export default Testimonials;

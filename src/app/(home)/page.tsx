import Hero from '@/app/(home)/_components/hero';
import Separator from '@/components/separator';
import { getSortedByDatePosts } from '@/lib/source';
import CTA from './_components/cta';

import { FAQ } from './_components/faq';
import Features from './_components/features';
import Showcase from './_components/showcase';

export default function Home() {
  const posts = getSortedByDatePosts().slice(0, 3);

  return (
    <>
      <Hero posts={posts} />

      <Separator />
      <Features />
      <Separator />
      <Showcase />
      <Separator />
      <FAQ />
      <Separator />
      <CTA />
    </>
  );
}
